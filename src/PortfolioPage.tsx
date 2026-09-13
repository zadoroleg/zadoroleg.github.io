import { useState } from "react";
import svgPaths from "@/imports/CreativeProducerProjectMockup/svg-098kc4gptm";
import imgHero from "@/imports/CreativeProducerProjectMockup/c8cf0b8395026dfa6a06e268b892b45a439beb25.png";
import imgProject1 from "@/imports/CreativeProducerProjectMockup/adbd9ad2f39ddc17cbe92287135da64796dd16ad.png";
import imgProject2 from "@/imports/CreativeProducerProjectMockup/2a4ae481749eedbdee08d4a8ab9aaf69fcfd0ba6.png";
import imgProject3 from "@/imports/CreativeProducerProjectMockup/e9a40c71bbe03d3bc649a12c255c8e8950ab3f5c.png";
import imgProject4 from "@/imports/CreativeProducerProjectMockup/959a024529135d0f6d87b6a15f511c003f4e5e23.png";
import imgProject5 from "@/imports/CreativeProducerProjectMockup/19e169b78be6607d917d10539cfcd5348f7dbaae.png";

const FONT_SEMI = "font-['Inter:Semi_Bold',_Inter,_sans-serif] font-semibold";
const FONT_BOLD = "font-['Inter:Bold',_Inter,_sans-serif] font-bold";
const FONT_EXTRABOLD = "font-['Inter:Extra_Bold',_Inter,_sans-serif] font-extrabold";
const FONT_MEDIUM = "font-['Inter:Medium',_Inter,_sans-serif] font-medium";
const FONT_REGULAR = "font-['Inter:Regular',_Inter,_sans-serif] font-normal";

function Tag({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center px-[22px] py-[11px] rounded-full border border-[#1b1b1b] shrink-0 ${active ? "" : "opacity-40"}`}
    >
      <span className={`${FONT_SEMI} text-[#1b1b1b] text-[14px] sm:text-[16px] uppercase leading-none`}>
        {label}
      </span>
    </div>
  );
}

function SmallTag({ label }: { label: string }) {
  return (
    <div className="flex items-center opacity-30 px-3 py-1.5 rounded-full border border-[#1b1b1b] shrink-0">
      <span className={`${FONT_SEMI} text-[#1b1b1b] text-[11px] uppercase leading-none`}>{label}</span>
    </div>
  );
}

function Divider() {
  return <div className="w-full h-px bg-[#1b1b1b] opacity-15" />;
}

function SectionLabel({ num, label }: { num?: string; label: string }) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <Divider />
      <span className={`${FONT_SEMI} text-[#1b1b1b] text-[16px] tracking-[-0.16px]`}>
        {num ? `${num} / ${label}` : label}
      </span>
    </div>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className={`${FONT_SEMI} text-[#666] text-[11px] uppercase opacity-50 leading-none`}>{label}</span>
      <span className={`${FONT_MEDIUM} text-[#1b1b1b] text-[14px] leading-normal`}>{value}</span>
    </div>
  );
}

interface ProjectProps {
  num: string;
  title: string;
  href: string;
  tags: string[];
  desc: string;
  role: string;
  format: string;
  img: string;
  imgClass?: string;
}

function Project({ num, title, href, tags, desc, role, format, img, imgClass = "object-cover" }: ProjectProps) {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Divider />
      {/* Desktop layout */}
      <div className="hidden lg:flex gap-16 items-start w-full">
        {/* Number */}
        <div className="shrink-0 w-[100px]">
          <span className={`${FONT_SEMI} text-[#1b1b1b] text-[50px] tracking-[-1.5px] leading-none`}>{num}</span>
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          <a href={href} target="_blank" rel="noopener noreferrer"
            className={`${FONT_SEMI} text-[#1b1b1b] text-[50px] tracking-[-1px] leading-[1.1] hover:opacity-70 transition-opacity`}>
            {title}
          </a>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => <SmallTag key={t} label={t} />)}
          </div>
        </div>
        {/* Desc + meta */}
        <div className="flex flex-col gap-16 shrink-0 w-[360px] xl:w-[420px]">
          <p className={`${FONT_REGULAR} text-[#1b1b1b] text-[16px] leading-[1.5]`}>{desc}</p>
          <div className="flex gap-10">
            <MetaBlock label="Моя роль" value={role} />
            <MetaBlock label="Формат" value={format} />
          </div>
        </div>
        {/* Image */}
        <div className="shrink-0 w-[320px] xl:w-[420px] overflow-hidden rounded-lg">
          <div className="relative w-full" style={{ paddingBottom: "64.9%" }}>
            <img src={img} alt={title} className={`absolute inset-0 w-full h-full ${imgClass}`} />
          </div>
        </div>
      </div>

      {/* Tablet layout */}
      <div className="hidden sm:flex lg:hidden flex-col gap-6 w-full">
        <div className="flex items-start gap-6">
          <span className={`${FONT_SEMI} text-[#1b1b1b] text-[40px] tracking-[-1px] leading-none shrink-0`}>{num}</span>
          <div className="flex flex-col gap-3 flex-1 min-w-0">
            <a href={href} target="_blank" rel="noopener noreferrer"
              className={`${FONT_SEMI} text-[#1b1b1b] text-[36px] tracking-[-0.8px] leading-[1.1] hover:opacity-70 transition-opacity`}>
              {title}
            </a>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => <SmallTag key={t} label={t} />)}
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <div className="flex-1 min-w-0">
            <p className={`${FONT_REGULAR} text-[#1b1b1b] text-[15px] leading-[1.5]`}>{desc}</p>
            <div className="flex gap-8 mt-6">
              <MetaBlock label="Моя роль" value={role} />
              <MetaBlock label="Формат" value={format} />
            </div>
          </div>
          <div className="shrink-0 w-[240px] overflow-hidden rounded-lg">
            <div className="relative w-full" style={{ paddingBottom: "64.9%" }}>
              <img src={img} alt={title} className={`absolute inset-0 w-full h-full ${imgClass}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex sm:hidden flex-col gap-5 w-full">
        <div className="flex items-start gap-4">
          <span className={`${FONT_SEMI} text-[#1b1b1b] text-[32px] tracking-[-1px] leading-none shrink-0`}>{num}</span>
          <a href={href} target="_blank" rel="noopener noreferrer"
            className={`${FONT_SEMI} text-[#1b1b1b] text-[28px] tracking-[-0.6px] leading-[1.15]`}>
            {title}
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => <SmallTag key={t} label={t} />)}
        </div>
        <div className="w-full overflow-hidden rounded-lg">
          <div className="relative w-full" style={{ paddingBottom: "64.9%" }}>
            <img src={img} alt={title} className={`absolute inset-0 w-full h-full ${imgClass}`} />
          </div>
        </div>
        <p className={`${FONT_REGULAR} text-[#1b1b1b] text-[15px] leading-[1.5]`}>{desc}</p>
        <div className="flex gap-8">
          <MetaBlock label="Моя роль" value={role} />
          <MetaBlock label="Формат" value={format} />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Проекты", "Опыт", "Контакты"];

  return (
    <div className={`${FONT_REGULAR} bg-[#f5f5f3] text-[#1b1b1b] w-full`}>
      <div className="max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-20 pt-8 sm:pt-10 pb-16 sm:pb-20 flex flex-col gap-10 sm:gap-12 lg:gap-10">

        {/* ── Header ── */}
        <header className="flex items-center justify-between uppercase w-full">
          {/* Desktop nav */}
          <nav className="hidden sm:flex gap-6 lg:gap-8">
            {navLinks.map((l) => (
              <span key={l} className={`${FONT_SEMI} text-[#1b1b1b] text-[18px] lg:text-[24px] cursor-pointer hover:opacity-60 transition-opacity`}>{l}</span>
            ))}
          </nav>
          {/* Mobile burger */}
          <button
            className="sm:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span className={`block w-6 h-[2px] bg-[#1b1b1b] transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#1b1b1b] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#1b1b1b] transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>

          <span className={`${FONT_MEDIUM} text-[#666] text-[12px] sm:text-[14px] opacity-60 normal-case`}>
            Creative Digital Producer / 2026
          </span>
        </header>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <nav className="sm:hidden flex flex-col gap-5 py-2">
            {navLinks.map((l) => (
              <span key={l} className={`${FONT_SEMI} text-[#1b1b1b] text-[28px] uppercase cursor-pointer`} onClick={() => setMenuOpen(false)}>{l}</span>
            ))}
          </nav>
        )}

        {/* ── Hero ── */}
        {/* xl+ = side-by-side; below xl = stacked (photo inline) */}
        <section className="flex flex-col xl:flex-row xl:items-start gap-8 xl:gap-16 w-full">
          {/* Left: title + tags + description */}
          <div className="flex flex-col gap-10 xl:gap-16 flex-1 min-w-0">
            {/* Title — scales purely with vw up to xl, then fixed */}
            <h1 className={`${FONT_EXTRABOLD} text-[#1b1b1b] leading-[0.9] tracking-[-0.05em]
              text-[19vw] sm:text-[17vw] md:text-[15vw] lg:text-[13vw] xl:text-[clamp(80px,8.5vw,144px)]
              w-full`}>
              <span className="block">ОЛЕГ</span>
              <span className="block">ЗАДОРОЖНЫЙ</span>
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 xl:gap-4">
              <Tag label="спецпроекты" active />
              <Tag label="Интерактив и 3D" />
              <Tag label="AI генерации" />
              <Tag label="управление производством" />
            </div>

            {/* Hero photo — visible below xl, inline */}
            <div className="xl:hidden w-full overflow-hidden rounded-xl">
              <div className="relative w-full" style={{ paddingBottom: "65%" }}>
                <img src={imgHero} alt="Олег Задорожный" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* Description block */}
            <div className="flex flex-col gap-8 xl:max-w-[820px]">
              <h2 className={`${FONT_BOLD} text-[#1b1b1b] text-[22px] sm:text-[26px] lg:text-[32px] tracking-[-0.02em] leading-[1.15]`}>
                Креативный диджитал-продюсер
              </h2>
              <p className={`${FONT_REGULAR} text-[#666] text-[15px] sm:text-[16px] leading-[1.5]`}>
                Продюсирую интерактивные веб-проекты на стыке креатива и технологий: игровые механики, 3D,{" "}
                AI и нестандартный digital production. От идеи и бюджета до команды, технической реализации и запуска.
              </p>
              <a
                href="mailto:olegcastom@gmail.com"
                className="bg-[#cfff00] flex items-center justify-center gap-2 h-[80px] sm:h-[100px] w-full hover:brightness-95 transition-all"
              >
                <span className={`${FONT_BOLD} text-[#1b1b1b] text-[20px] sm:text-[23px] uppercase`}>Написать</span>
                <svg width="28" height="28" fill="none" viewBox="0 0 28.72 28.72">
                  <path d={svgPaths.p1a469b00} stroke="#1B1B1B" strokeLinecap="round" strokeWidth="3.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hero photo — xl+ only, column on the right */}
          <div className="hidden xl:block shrink-0 w-[clamp(380px,28vw,543px)] rounded-xl overflow-hidden self-start">
            <div className="relative w-full" style={{ paddingBottom: "121%" }}>
              <img src={imgHero} alt="Олег Задорожный" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* ── Section 01 — About ── */}
        <section className="flex flex-col gap-8 lg:gap-10 w-full">
          <SectionLabel num="01" label="Веду проекты от идеи до запуска" />
          <div className={`${FONT_SEMI} text-[#1b1b1b] text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.5] flex flex-col gap-6 lg:gap-8 max-w-[700px]`}>
            <p>Веду переговоры, документацию и составляю бюджет, отбираю проектные команды, курирую работу команды, концепт, дизайн, разработку, 3D и контент.</p>
            <p>Технический бэкграунд позволяет быстро оценить реализуемость идеи, сложность и стоимость, гарантируя запуск с соответствием высоким планкам качества.</p>
          </div>
        </section>

        {/* ── Section 02 — Competencies ── */}
        <section className="flex flex-col gap-8 lg:gap-10 w-full">
          <SectionLabel num="02" label="Компетенции" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-20 w-full">
            {[
              {
                title: "Концепция и сценарий",
                desc: "Исследую задачу, формирую сценарий, механику и визуальное направление.",
              },
              {
                title: "Продюсирование",
                desc: "Веду переговоры и бюджет, подбираю подрядчиков, ставлю задачи и координирую производство.",
              },
              {
                title: "Техническая база",
                desc: "Понимаю дизайн, веб-разработку, 3D, знаю особенности интеграций от прототипа до запуска.",
              },
            ].map((c) => (
              <div key={c.title} className="flex flex-col gap-4 sm:items-center sm:text-center">
                <span className={`${FONT_BOLD} text-[#1b1b1b] text-[16px] sm:text-[18px] lg:text-[20px] tracking-[-0.02em] uppercase leading-normal`}>
                  {c.title}
                </span>
                <p className={`${FONT_REGULAR} text-[#666] text-[14px] sm:text-[15px] leading-[1.5]`}>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="flex flex-col gap-4 w-full mt-2">
            <span className={`${FONT_SEMI} text-[#1b1b1b] text-[16px] tracking-[-0.16px]`}>Работал с командами</span>
            <div className={`${FONT_BOLD} text-[#1b1b1b] text-[20px] sm:text-[26px] lg:text-[34px] py-6 lg:py-8 flex flex-wrap gap-x-8 gap-y-3 lg:justify-between`}>
              {["Independent Media", "Nectarin", "E-Promo", "Narrators", "СОЛЬ", "AGIMA", "Digital Lab", "adgasm"].map((p) => (
                <span key={p} className="shrink-0">{p}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 03 — Projects ── */}
        <section className="flex flex-col gap-8 lg:gap-10 w-full">
          <SectionLabel num="03" label="Избранные проекты" />
          <div className="flex flex-col gap-10 lg:gap-16 w-full">
            <Project
              num="01"
              title="ТЫ - МАШИНА ↗"
              href="https://autovibes.mentoday.ru/?utm_source=mentoday&utm_medium=banner&utm_campaign=special&utm_content=click&utm_term=click"
              tags={["3D", "AI", "ПЕРСОНАЛИЗАЦИЯ"]}
              desc="Интерактив с персональным результатом для Auto.ru. Пользователь проходит сценарий выбора и получает персональную AI-карточку автомобиля, дополненную 3D-анимацией."
              role="Продюсирование UX/UI / 3D"
              format="Интерактивный квиз"
              img={imgProject1}
              imgClass="object-bottom"
            />
            <Project
              num="02"
              title={"КВАНТОВЫЙ\nПРЕДСКАЗАТЕЛЬ\nКАРЬЕРЫ ↗"}
              href="https://hh.ru"
              tags={["интерактив", "WEB", "3D"]}
              desc="Игровой инструмент с 3D-механиками для hh.ru с элементами гейминга, формирующими уникальный образ будущего карьеры пользователя."
              role="Продюсирование UX/UI / 3D / VFX"
              format="Интерактивный тест-предсказатель"
              img={imgProject2}
            />
            <Project
              num="03"
              title={"СОЗДАЁМ\nКОСМОС ВМЕСТЕ\nС GIGACHAT ↗"}
              href="https://sber.ru"
              tags={["интерактив", "AI"]}
              desc="Продюсирую спецпроект от лица СБЕРА С GigaChat GT на тему: Россия создаёт свой космос. В основе интерактив где каждый пользователь задаёт вопрос нейросети."
              role="Продюсирование проекта"
              format="Интерактив нейро-опрос"
              img={imgProject3}
            />
            <Project
              num="04"
              title="СБЕР ИСТОРИИ ↗"
              href="https://sber.ru"
              tags={["WEB", "AI"]}
              desc="Серия и спецпроекты материалов о людях и делах, сделанных с Сбером. Даём платформу лучшим историям предпринимательства."
              role="Продюсирование UX/UI / 3D / AI"
              format="Интерактивная публикация"
              img={imgProject4}
            />
            <Project
              num="05"
              title={'СБЕР\n"НАУЧНАЯ ПРЕМИЯ" ↗'}
              href="https://www.techinsider.ru/digital-space-2030/"
              tags={["GAME", "WEB", "3D"]}
              desc="Игровой спецпроект о сезоне КХЛ с геймификацией."
              role="Продюсирование UX/UI / DEV/ AUDIO"
              format="Спецпроект"
              img={imgProject5}
            />
          </div>
          <Divider />
        </section>

        {/* ── Section 04 — Experience ── */}
        <section className="flex flex-col gap-8 lg:gap-10 w-full">
          <SectionLabel num="04" label="Опыт" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-20 w-full">
            {[
              {
                period: "2021 — СЕЙЧАС",
                title: "Creative Digital Producer",
                desc: "Интерактивные веб-проекты для брендов и медиа: переговоры, бюджет, команды, курирование и организация производства.",
              },
              {
                period: "2019 — 2021",
                title: "Content Producer — Audio-Reclama.ru",
                desc: "Управление производством аудио- и видеоконтента: от сценария до постпродакшна.",
              },
              {
                period: "2015 — 2019",
                title: "Production background",
                desc: "Звуковой продакшн, запись звука и мультимедийный контент.",
              },
            ].map((e) => (
              <div key={e.title} className="flex flex-col gap-3">
                <span className={`${FONT_SEMI} text-[#666] text-[12px] uppercase opacity-50 leading-none`}>{e.period}</span>
                <span className={`${FONT_BOLD} text-[#1b1b1b] text-[16px] sm:text-[17px] lg:text-[18px] leading-normal`}>{e.title}</span>
                <p className={`${FONT_REGULAR} text-[#666] text-[14px] leading-[1.5]`}>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 05 — Profile ── */}
        <section className="flex flex-col gap-8 lg:gap-10 w-full">
          <SectionLabel num="05" label="Профиль" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-20 w-full">
            {[
              {
                title: "Инструменты",
                desc: "WebGL / 3D / Adobe Pack CC /\nDev / AI контент",
              },
              {
                title: "Языки",
                desc: "Английский — B2\nГреческий — B1",
              },
              {
                title: "Образование",
                desc: "ННГУ им. Н. И. Лобачевского, 2015.\nСпециализация: Государственное и муниципальное управление",
              },
            ].map((p) => (
              <div key={p.title} className="flex flex-col gap-3">
                <span className={`${FONT_BOLD} text-[#1b1b1b] text-[15px] lg:text-[16px] leading-normal`}>{p.title}</span>
                <p className={`${FONT_REGULAR} text-[#666] text-[14px] leading-[1.5] whitespace-pre-line`}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 06 — Contacts ── */}
        <section className="flex flex-col gap-8 lg:gap-10 w-full">
          <SectionLabel num="06" label="Контакты" />

          {/* Highlighted heading */}
          <div className="relative w-full">
            <h2 className={`${FONT_SEMI} text-[#1b1b1b] leading-[1.1] tracking-[-0.03em]
              text-[11vw] sm:text-[8vw] lg:text-[clamp(48px,5vw,73px)]`}>
              <span className="relative inline">
                <span className="absolute inset-x-0 -inset-y-1 bg-[#cfff00] -z-0" />
                <span className="relative z-10">Открыт к роли</span>
              </span>
              <br />
              <span className="relative inline">
                <span className="absolute inset-x-0 -inset-y-1 bg-[#cfff00] -z-0" />
                <span className="relative z-10">креативного</span>
              </span>
              <br />
              <span className="relative inline">
                <span className="absolute inset-x-0 -inset-y-1 bg-[#cfff00] -z-0" />
                <span className="relative z-10">диджитал-продюсера.</span>
              </span>
            </h2>
          </div>

          {/* Contacts grid */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 pt-2">
            <div className="flex flex-col gap-2">
              <span className={`${FONT_SEMI} text-[#555] text-[11px] uppercase opacity-50 leading-none`}>Telegram</span>
              <a href="https://t.me/olegcastom" target="_blank" rel="noopener noreferrer"
                className={`${FONT_BOLD} text-[#1b1b1b] text-[20px] sm:text-[22px] lg:text-[24px] tracking-[-0.02em] hover:opacity-70 transition-opacity`}>
                @olegcastom
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className={`${FONT_SEMI} text-[#555] text-[11px] uppercase opacity-50 leading-none`}>Email</span>
              <a href="mailto:olegcastom@gmail.com"
                className={`${FONT_MEDIUM} text-[#1b1b1b] text-[14px] sm:text-[16px] hover:opacity-70 transition-opacity`}>
                olegcastom@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className={`${FONT_SEMI} text-[#555] text-[11px] uppercase opacity-50 leading-none`}>Телефон</span>
              <a href="tel:+79101450640"
                className={`${FONT_MEDIUM} text-[#1b1b1b] text-[14px] sm:text-[16px] hover:opacity-70 transition-opacity`}>
                +7 (910) 145-06-40
              </a>
            </div>
            <div className="flex flex-col gap-2 justify-end">
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer"
                className={`${FONT_SEMI} text-[#1b1b1b] text-[14px] underline hover:opacity-70 transition-opacity`}>
                Vimeo ↗
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
