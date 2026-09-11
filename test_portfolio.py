from pathlib import Path
from html.parser import HTMLParser
import unittest

ROOT = Path(__file__).parent

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = set()
        self.links = []
        self.images = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.add(a['id'])
        if tag == 'a':
            self.links.append(a.get('href', ''))
        if tag == 'img':
            self.images.append(a)

class PortfolioTest(unittest.TestCase):
    def test_resume_is_navigable_and_project_images_are_local(self):
        path = ROOT / 'index.html'
        self.assertTrue(path.exists(), 'Personal resume page is missing')
        text = path.read_text(encoding='utf-8')
        p = Page(text)

        for required in [
            'Олег', 'Задорожный', 'Авто.ру', 'Росатом', 'OMODA', 'Сбер',
            'Кинопоиск', 'ЕМИАС', 'Реновация Москвы', 'Independent Media',
            'viewport', '@media', 'portrait'
        ]:
            self.assertIn(required, text)

        for href in p.links:
            if href.startswith('#'):
                self.assertIn(href[1:], p.ids)

        self.assertEqual(len(p.images), 5)
        for img in p.images:
            self.assertTrue(img.get('alt'))
            self.assertTrue((ROOT / img['src']).is_file(), img['src'])

        self.assertIn('https://t.me/olegcastom', p.links)

    def test_four_column_producer_revision(self):
        text = (ROOT / 'index.html').read_text(encoding='utf-8')

        for removed in [
            'Рассматриваю работу в агентской команде',
            'Обсудить работу',
            'Названия брендов обозначают',
            'featured-case',
            'case-story',
            'secondary-case',
            'class="pr"'
        ]:
            self.assertNotIn(removed, text, removed)

        for required in [
            'Написать мне',
            'Сооснователь',
            'projects4',
            'project4',
            'project-auto',
            'project-rosatom',
            'project-omoda',
            'project-sber',
            'project-kinopoisk',
            'grid-template-columns:repeat(4,minmax(0,1fr))'
        ]:
            self.assertIn(required, text, required)

        self.assertEqual(text.count('class="project4"'), 5)
        self.assertEqual(text.count('class="project4-media"'), 5)

if __name__ == '__main__':
    unittest.main()
