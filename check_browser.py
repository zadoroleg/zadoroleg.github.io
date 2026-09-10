from pathlib import Path
import json
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parent
out=root/'checks'; out.mkdir(exist_ok=True)
results=[]
with sync_playwright() as p:
    browser=p.chromium.launch()
    for width in (1440,768,390,320):
        page=browser.new_page(viewport={'width':width,'height':1000},device_scale_factor=1)
        errors=[]; page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto((root/'index.html').as_uri())
        for image in page.locator('img').all():
            image.scroll_into_view_if_needed()
            image.evaluate('(i) => i.decode()')
        page.wait_for_function('Array.from(document.images).every(i=>i.complete && i.naturalWidth>0)')
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),f'Overflow at {width}'
        assert page.locator('h1').count()==1
        page.locator('nav a[href="#projects"]').click()
        page.wait_for_function('location.hash === "#projects"')
        page.emulate_media(reduced_motion='reduce')
        page.evaluate('window.scrollTo(0,0)')
        page.screenshot(path=str(out/f'{width}.png'),full_page=True)
        page.screenshot(path=str(out/f'{width}-hero.png'))
        case=page.locator('#auto-case')
        case.screenshot(path=str(out/f'{width}-case.png'))
        feature_image=case.locator('img').bounding_box()
        wrapper=page.locator('.wrap').bounding_box()
        assert feature_image['width'] > wrapper['width'] * 0.80
        assert feature_image['width'] / feature_image['height'] > 1.6
        if width > 900:
            cards=page.locator('.secondary-case').all()
            a,b=[card.bounding_box() for card in cards]
            assert abs(a['y']-b['y']) < 2
            assert a['x']+a['width'] <= b['x']
        assert not errors,errors
        results.append({'width':width,'images':page.locator('img').count(),'overflow':False,'navigation':'passed','errors':errors})
        page.close()
    browser.close()
print(json.dumps(results,indent=2))
(out/'results.json').write_text(json.dumps(results,indent=2),encoding='utf-8')
