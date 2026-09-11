from pathlib import Path
import json
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parent
out = root / 'checks'
out.mkdir(exist_ok=True)
results = []

with sync_playwright() as p:
    browser = p.chromium.launch()
    for width in (1440, 768, 390, 320):
        page = browser.new_page(viewport={'width': width, 'height': 1000}, device_scale_factor=1)
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.goto((root / 'index.html').as_uri())

        for image in page.locator('img').all():
            image.scroll_into_view_if_needed()
            image.evaluate('(i) => i.decode()')

        page.wait_for_function('Array.from(document.images).every(i => i.complete && i.naturalWidth > 0)')
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'Overflow at {width}'
        assert page.locator('h1').count() == 1
        assert page.locator('.project4').count() == 5

        page.locator('nav a[href="#projects"]').click()
        page.wait_for_function('location.hash === "#projects"')
        page.emulate_media(reduced_motion='reduce')
        page.evaluate('window.scrollTo(0,0)')

        page.screenshot(path=str(out / f'{width}.png'), full_page=True)
        page.screenshot(path=str(out / f'{width}-hero.png'))

        case = page.locator('#project-auto')
        case.screenshot(path=str(out / f'{width}-case.png'))

        if width >= 1180:
            children = [
                case.locator('.project4-index'),
                case.locator('.project4-title'),
                case.locator('.project4-copy'),
                case.locator('.project4-media'),
            ]
            boxes = [item.bounding_box() for item in children]
            assert all(boxes[i]['x'] < boxes[i + 1]['x'] for i in range(3))
            widths = [box['width'] for box in boxes]
            assert max(widths) - min(widths) < 10
        elif width >= 700:
            index_box = case.locator('.project4-index').bounding_box()
            title_box = case.locator('.project4-title').bounding_box()
            copy_box = case.locator('.project4-copy').bounding_box()
            media_box = case.locator('.project4-media').bounding_box()
            assert abs(index_box['y'] - title_box['y']) < 4
            assert abs(copy_box['y'] - media_box['y']) < 4
            assert copy_box['y'] > index_box['y']
        else:
            boxes = [
                case.locator('.project4-index').bounding_box(),
                case.locator('.project4-title').bounding_box(),
                case.locator('.project4-copy').bounding_box(),
                case.locator('.project4-media').bounding_box(),
            ]
            assert all(boxes[i]['y'] < boxes[i + 1]['y'] for i in range(3))

        assert not errors, errors
        results.append({
            'width': width,
            'images': page.locator('img').count(),
            'projects': page.locator('.project4').count(),
            'overflow': False,
            'navigation': 'passed',
            'errors': errors,
        })
        page.close()

    browser.close()

print(json.dumps(results, indent=2, ensure_ascii=False))
(out / 'results.json').write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding='utf-8')
