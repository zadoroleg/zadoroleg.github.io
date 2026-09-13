import svgPaths from "./svg-098kc4gptm";
import imgHeroPhotoPlaceholder from "./c8cf0b8395026dfa6a06e268b892b45a439beb25.png";
import imgPhotoPlaceholder from "./adbd9ad2f39ddc17cbe92287135da64796dd16ad.png";
import imgPhotoPlaceholder1 from "./2a4ae481749eedbdee08d4a8ab9aaf69fcfd0ba6.png";
import imgPhotoPlaceholder2 from "./e9a40c71bbe03d3bc649a12c255c8e8950ab3f5c.png";
import imgPhotoPlaceholder3 from "./959a024529135d0f6d87b6a15f511c003f4e5e23.png";
import imgPhotoPlaceholder4 from "./19e169b78be6607d917d10539cfcd5348f7dbaae.png";

function NavLinks() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[32px] items-start relative shrink-0 text-[#1b1b1b] text-[24px]" data-name="nav-links">
      <p className="relative shrink-0">Проекты</p>
      <p className="relative shrink-0">Опыт</p>
      <p className="relative shrink-0">Контакты</p>
    </div>
  );
}

function Header() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 uppercase w-full whitespace-nowrap" data-name="header">
      <NavLinks />
      <p className="font-['Inter:Medium',sans-serif] font-medium opacity-60 relative shrink-0 text-[#666] text-[14px]">Creative Digital Producer / 2026</p>
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold items-start leading-[0.9] not-italic relative shrink-0 text-[#1b1b1b] text-[144px] tracking-[-7.2px] w-full" data-name="title-wrapper">
      <p className="relative shrink-0 w-full">ОЛЕГ</p>
      <p className="relative shrink-0 w-full">ЗАДОРОЖНЫЙ</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start px-[22.362px] py-[11.181px] relative rounded-[139.765px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#1b1b1b] border-[1.398px] border-solid inset-0 pointer-events-none rounded-[139.765px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16.772px] uppercase whitespace-nowrap">спецпроекты</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start opacity-40 px-[22.362px] py-[11.181px] relative rounded-[139.765px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#1b1b1b] border-[1.398px] border-solid inset-0 pointer-events-none rounded-[139.765px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16.772px] uppercase whitespace-nowrap">Интерактив и 3D</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start opacity-40 px-[22.362px] py-[11.181px] relative rounded-[139.765px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#1b1b1b] border-[1.398px] border-solid inset-0 pointer-events-none rounded-[139.765px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16.772px] uppercase whitespace-pre">{`AI  генерации`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start opacity-40 px-[22.362px] py-[11.181px] relative rounded-[139.765px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#1b1b1b] border-[1.398px] border-solid inset-0 pointer-events-none rounded-[139.765px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16.772px] uppercase whitespace-nowrap">управление производством</p>
    </div>
  );
}

function HeroTags() {
  return (
    <div className="content-start flex flex-wrap gap-[16.771839141845703px_16.772px] items-start relative shrink-0" data-name="hero-tags">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[28.725px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="28.7246" preserveAspectRatio="none" viewBox="0 0 28.7246 28.7246" width="28.7246">
        <g id="arrow-up-right">
          <path d={svgPaths.p1a469b00} id="Vector" stroke="#1B1B1B" strokeLinecap="round" strokeWidth="3.5" />
        </g>
      </svg>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="bg-[#cfff00] content-stretch flex gap-[8px] h-[100px] items-center justify-center px-[32px] py-[18px] relative shrink-0 w-full" data-name="cta-button">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[23px] uppercase whitespace-nowrap">Написать</p>
      <ArrowUpRight />
    </div>
  );
}

function HeroRight() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[823px]" data-name="hero-right">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.15] min-w-full not-italic relative shrink-0 text-[#1b1b1b] text-[32px] tracking-[-0.64px] w-[min-content]">Креативный диджитал-продюсер</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#666] text-[16px] w-[924px] whitespace-pre-wrap">
        {`Продюсирую интерактивные веб-проекты на стыке креатива и технологий: игровые механики, 3D, `}
        <br aria-hidden />
        AI и нестандартный digital production. От идеи и бюджета до команды, технической реализации и запуска.
      </p>
      <CtaButton />
    </div>
  );
}

function HeroLeft() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-w-px relative" data-name="hero-left">
      <TitleWrapper />
      <HeroTags />
      <HeroRight />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1840px]" data-name="hero-section">
      <HeroLeft />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="header-content">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] tracking-[-0.16px] whitespace-nowrap">01 / Веду проекты от идеи до запуска</p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="section-header">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Line" opacity="0.15" />
        </svg>
      </div>
      <HeaderContent />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[32px] items-start leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[24px] w-[989px]">
      <p className="relative shrink-0 w-[700px]">Веду переговоры, докуметацию и составляю бюджет, отбираю проектные команды, курирую работу команды, концепт, дизайн, разработку, 3D и контент.</p>
      <p className="relative shrink-0 w-[700px]">Технический бэкграунд позволяет быстро оценить реализуемость идеи, сложность и стоимость, гарантируя запуск с соответствием высоким планкам качества.</p>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="section-01">
      <SectionHeader />
      <Frame30 />
    </div>
  );
}

function HeaderContent1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="header-content">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] tracking-[-0.16px] whitespace-nowrap">02 / Компетенции</p>
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="section-header">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1760 1" width="1760">
            <line id="Line" opacity="0.15" stroke="#1B1B1B" x2="1760" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <HeaderContent1 />
    </div>
  );
}

function CompCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px relative" data-name="comp-col-1">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[20px] tracking-[-0.2px] uppercase whitespace-nowrap">Концепция и сценарий</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#666] text-[15px] text-center w-[337px]">Исследую задачу, формирую сценарий, механику и визуальное направление.</p>
    </div>
  );
}

function CompCol1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px relative" data-name="comp-col-2">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[20px] tracking-[-0.2px] uppercase whitespace-nowrap">Продюсирование</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#666] text-[15px] text-center w-[410px]">Веду переговоры и бюджет, подбираю подрядчиков, ставлю задачи и координирую производство.</p>
    </div>
  );
}

function CompCol2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px relative" data-name="comp-col-3">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[20px] tracking-[-0.2px] uppercase whitespace-nowrap">Техническая база</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#666] text-[15px] text-center w-[min-content] whitespace-pre-wrap">
        {`Понимаю дизайн, веб-разработку, 3D, знаю особенности `}
        <br aria-hidden />
        интеграций от прототипа до запуска.
      </p>
    </div>
  );
}

function CompetenciesGrid() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start not-italic relative shrink-0 w-full" data-name="competencies-grid">
      <CompCol />
      <CompCol1 />
      <CompCol2 />
    </div>
  );
}

function HeaderContent2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="header-content">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] tracking-[-0.16px] whitespace-nowrap">Работал с командами</p>
    </div>
  );
}

function MarqueeBanner() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[normal] not-italic py-[32px] relative shrink-0 text-[#1b1b1b] text-[34px] w-full whitespace-nowrap" data-name="marquee-banner">
      <p className="relative shrink-0">Independent Media</p>
      <p className="relative shrink-0">Nectarin</p>
      <p className="relative shrink-0">E-Promo</p>
      <p className="relative shrink-0">Narrators</p>
      <p className="relative shrink-0">СОЛЬ</p>
      <p className="relative shrink-0">AGIMA</p>
      <p className="relative shrink-0">Digital Lab</p>
      <p className="relative shrink-0">adgasm</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <HeaderContent2 />
      <MarqueeBanner />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="section-02">
      <SectionHeader1 />
      <CompetenciesGrid />
      <Frame29 />
    </div>
  );
}

function HeaderContent3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="header-content">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] tracking-[-0.16px] whitespace-nowrap">03 / Избранные проекты</p>
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="section-header">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1760 1" width="1760">
            <line id="Line" opacity="0.15" stroke="#1B1B1B" x2="1760" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <HeaderContent3 />
    </div>
  );
}

function NumCol() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[100px]" data-name="num-col">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[50px] tracking-[-1.5px] whitespace-nowrap">01</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">3D</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">AI</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">ПЕРСОНАЛИЗАЦИЯ</p>
    </div>
  );
}

function TagsRow() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="tags-row">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function TitleAndTags() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title-and-tags">
      <a className="[word-break:break-word] block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[50px] tracking-[-1px] whitespace-nowrap" href="https://autovibes.mentoday.ru/?utm_source=mentoday&utm_medium=banner&utm_campaign=special&utm_content=click&utm_term=click" target="_blank">
        <p className="cursor-pointer">
          <span className="leading-[1.1]">{` `}</span>
          <span className="leading-[1.1]">ТЫ - МАШИНА ↗</span>
        </p>
      </a>
      <TagsRow />
    </div>
  );
}

function InfoCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="info-col">
      <TitleAndTags />
    </div>
  );
}

function DescCol() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[420px]" data-name="desc-col">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#1b1b1b] text-[16px]">Интерактив с персональным результатом для Auto.ru. Пользователь проходит сценарий выбора и получает перональную AI-карточку автомобиля, дополненную 3D-анимацией.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#666] text-[11px] uppercase">Моя роль</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[14px]">Продюсирование UX/UI / 3D</p>
    </div>
  );
}

function MetaLeft() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="meta-left">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#666] text-[11px] uppercase">Формат</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[14px]">Интерактивный квиз</p>
    </div>
  );
}

function MetaRight() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="meta-right">
      <Frame5 />
    </div>
  );
}

function MetaRow() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="meta-row">
      <MetaLeft />
      <MetaRight />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-w-px relative">
      <DescCol />
      <MetaRow />
    </div>
  );
}

function ImagePlaceholderContainer() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[420px]" data-name="image-placeholder-container">
      <div className="aspect-[1.5399999618530273/1] flex-[1_0_0] min-w-px pointer-events-none relative" data-name="photo-placeholder">
        <img alt="" className="absolute inset-0 max-w-none object-bottom size-full" src={imgPhotoPlaceholder} />
        <div aria-hidden className="absolute border-[rgba(27,27,27,0.4)] border-solid border-t inset-0" />
      </div>
    </div>
  );
}

function ProjectContent() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="project-content">
      <NumCol />
      <InfoCol />
      <Frame25 />
      <ImagePlaceholderContainer />
    </div>
  );
}

function Project1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="project-01">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1760 1" width="1760">
            <line id="Line" opacity="0.15" stroke="#1B1B1B" x2="1760" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ProjectContent />
    </div>
  );
}

function NumCol1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[100px]" data-name="num-col">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[50px] tracking-[-1.5px] whitespace-nowrap">02</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">интерактив</p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">WEB</p>
    </div>
  );
}

function Tag5() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">3D</p>
    </div>
  );
}

function TagsRow1() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="tags-row">
      <Tag3 />
      <Tag4 />
      <Tag5 />
    </div>
  );
}

function TitleAndTags1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title-and-tags">
      <a className="[word-break:break-word] block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[50px] tracking-[-1px] w-[561px]" href="https://quantguesser.techinsider.ru/" target="_blank">
        <p className="cursor-pointer leading-[1.1]">КВАНТОВЫЙ ПРЕДСКАЗАТЕЛЬ КАРЬЕРЫ ↗</p>
      </a>
      <TagsRow1 />
    </div>
  );
}

function InfoCol1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="info-col">
      <TitleAndTags1 />
    </div>
  );
}

function DescCol1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[420px]" data-name="desc-col">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#1b1b1b] text-[16px]">Интерактивный веб-проект с 3D-сюжетом для Росатом. Генерирует сценарии развития карьеры через образ футуристичного предсказателя</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#666] text-[11px] uppercase">Моя роль</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[14px]">Продюсирование UX/UI / DEV</p>
    </div>
  );
}

function MetaLeft1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="meta-left">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#666] text-[11px] uppercase">Формат</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[14px]">Интерактивный предсказатель</p>
    </div>
  );
}

function MetaRight1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="meta-right">
      <Frame7 />
    </div>
  );
}

function MetaRow1() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="meta-row">
      <MetaLeft1 />
      <MetaRight1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-w-px relative">
      <DescCol1 />
      <MetaRow1 />
    </div>
  );
}

function ImagePlaceholderContainer1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[420px]" data-name="image-placeholder-container">
      <div className="aspect-[1.5399999618530273/1] flex-[1_0_0] min-w-px pointer-events-none relative" data-name="photo-placeholder">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPhotoPlaceholder1} />
        <div aria-hidden className="absolute border-[rgba(27,27,27,0.4)] border-solid border-t inset-0" />
      </div>
    </div>
  );
}

function ProjectContent1() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="project-content">
      <NumCol1 />
      <InfoCol1 />
      <Frame24 />
      <ImagePlaceholderContainer1 />
    </div>
  );
}

function Project2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="project-02">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1760 1" width="1760">
            <line id="Line" opacity="0.15" stroke="#1B1B1B" x2="1760" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ProjectContent1 />
    </div>
  );
}

function NumCol2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[100px]" data-name="num-col">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[50px] tracking-[-1.5px] whitespace-nowrap">03</p>
    </div>
  );
}

function Tag6() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">АНИМАЦИЯ</p>
    </div>
  );
}

function Tag7() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">КРЕАТИВ</p>
    </div>
  );
}

function TagsRow2() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="tags-row">
      <Tag6 />
      <Tag7 />
    </div>
  );
}

function TitleAndTags2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title-and-tags">
      <a className="[word-break:break-word] block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#1b1b1b] text-[50px] tracking-[-1px] uppercase w-[min-content]" href="https://www.techinsider.ru/science/1686445-gigaspace/" target="_blank">
        <p className="cursor-pointer leading-[1.1] whitespace-pre-wrap">
          {`СОздаём `}
          <br aria-hidden />
          {`космос вместе `}
          <br aria-hidden />с GigaChat↗
        </p>
      </a>
      <TagsRow2 />
    </div>
  );
}

function InfoCol2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="info-col">
      <TitleAndTags2 />
    </div>
  );
}

function DescCol2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[420px]" data-name="desc-col">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#1b1b1b] text-[16px]">Презентация спецверсии автомобиля OMODA C7 на стыке автомобильной культуры и моды. Анимация поддерживает визуальное повествование</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#666] text-[11px] uppercase">Моя роль</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[14px]">Продюсирование 3D/ DEV</p>
    </div>
  );
}

function MetaLeft2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="meta-left">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#666] text-[11px] uppercase">Формат</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[14px]">Интерактивная карта</p>
    </div>
  );
}

function MetaRight2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="meta-right">
      <Frame9 />
    </div>
  );
}

function MetaRow2() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="meta-row">
      <MetaLeft2 />
      <MetaRight2 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-w-px relative">
      <DescCol2 />
      <MetaRow2 />
    </div>
  );
}

function ImagePlaceholderContainer2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[420px]" data-name="image-placeholder-container">
      <div className="aspect-[1.5399999618530273/1] flex-[1_0_0] min-w-px relative" data-name="photo-placeholder">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[122.47%] left-[-32.98%] max-w-none top-[-22.4%] w-[165.96%]" src={imgPhotoPlaceholder2} />
        </div>
      </div>
    </div>
  );
}

function ProjectContent2() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="project-content">
      <NumCol2 />
      <InfoCol2 />
      <Frame26 />
      <ImagePlaceholderContainer2 />
    </div>
  );
}

function Project3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="project-03">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1760 1" width="1760">
            <line id="Line" opacity="0.15" stroke="#1B1B1B" x2="1760" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ProjectContent2 />
    </div>
  );
}

function NumCol3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[100px]" data-name="num-col">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[50px] tracking-[-1.5px] whitespace-nowrap">04</p>
    </div>
  );
}

function Tag8() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">STORYTELLING</p>
    </div>
  );
}

function Tag9() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">INTERACTIVE</p>
    </div>
  );
}

function TagsRow3() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="tags-row">
      <Tag8 />
      <Tag9 />
    </div>
  );
}

function TitleAndTags3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title-and-tags">
      <a className="[word-break:break-word] block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[50px] tracking-[-1px] whitespace-nowrap" href="https://greenstories.team/?utm_source=thevoicemag&utm_medium=banner&utm_campaign=zercalodushi&utm_term=feature" target="_blank">
        <p className="cursor-pointer leading-[1.1]">СБЕР ИСТОРИИ ↗</p>
      </a>
      <TagsRow3 />
    </div>
  );
}

function InfoCol3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="info-col">
      <TitleAndTags3 />
    </div>
  );
}

function DescCol3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[420px]" data-name="desc-col">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#1b1b1b] text-[16px]">Серия интерактивных материалов о людях, идеях и ценностях Сбера.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#666] text-[11px] uppercase">Моя роль</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[14px]">Продюсирование UX/UI / DEV / AI</p>
    </div>
  );
}

function MetaLeft3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="meta-left">
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#666] text-[11px] uppercase">Формат</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[14px]">Интерактивный сторителлинг</p>
    </div>
  );
}

function MetaRight3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="meta-right">
      <Frame11 />
    </div>
  );
}

function MetaRow3() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="meta-row">
      <MetaLeft3 />
      <MetaRight3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-w-px relative">
      <DescCol3 />
      <MetaRow3 />
    </div>
  );
}

function ImagePlaceholderContainer3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[420px]" data-name="image-placeholder-container">
      <div className="aspect-[1.5399999618530273/1] flex-[1_0_0] min-w-px pointer-events-none relative" data-name="photo-placeholder">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPhotoPlaceholder3} />
        <div aria-hidden className="absolute border-[rgba(27,27,27,0.4)] border-solid border-t inset-0" />
      </div>
    </div>
  );
}

function ProjectContent3() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="project-content">
      <NumCol3 />
      <InfoCol3 />
      <Frame27 />
      <ImagePlaceholderContainer3 />
    </div>
  );
}

function Project4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="project-04">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1760 1" width="1760">
            <line id="Line" opacity="0.15" stroke="#1B1B1B" x2="1760" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ProjectContent3 />
    </div>
  );
}

function NumCol4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[100px]" data-name="num-col">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[50px] tracking-[-1.5px] whitespace-nowrap">05</p>
    </div>
  );
}

function Tag10() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">GAME</p>
    </div>
  );
}

function Tag11() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">WEB</p>
    </div>
  );
}

function Tag12() {
  return (
    <div className="content-stretch flex items-start opacity-30 px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[11px] uppercase whitespace-nowrap">3D</p>
    </div>
  );
}

function TagsRow4() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="tags-row">
      <Tag10 />
      <Tag11 />
      <Tag12 />
    </div>
  );
}

function TitleAndTags4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="title-and-tags">
      <a className="[word-break:break-word] block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[50px] tracking-[-1px] whitespace-nowrap" href="https://www.techinsider.ru/digital-space-2030/" target="_blank">
        <p className="cursor-pointer leading-[1.1] whitespace-pre">
          {`СБЕР `}
          <br aria-hidden />
          “НАУЧНАЯ ПРЕМИЯ” ↗
        </p>
      </a>
      <TagsRow4 />
    </div>
  );
}

function InfoCol4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="info-col">
      <TitleAndTags4 />
    </div>
  );
}

function DescCol4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[420px]" data-name="desc-col">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#1b1b1b] text-[16px]">Игровой спецпроект о сезоне КХЛ с геймификацией.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#666] text-[11px] uppercase">Моя роль</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[14px]">Продюсирование UX/UI / DEV/ AUDIO</p>
    </div>
  );
}

function MetaLeft4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="meta-left">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#666] text-[11px] uppercase">Формат</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[14px]">Спецпроект</p>
    </div>
  );
}

function MetaRight4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="meta-right">
      <Frame13 />
    </div>
  );
}

function MetaRow4() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="meta-row">
      <MetaLeft4 />
      <MetaRight4 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-w-px relative">
      <DescCol4 />
      <MetaRow4 />
    </div>
  );
}

function ImagePlaceholderContainer4() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[420px]" data-name="image-placeholder-container">
      <div className="aspect-[1.5399999618530273/1] flex-[1_0_2px] min-w-px pointer-events-none relative rounded-[8px]" data-name="photo-placeholder">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgPhotoPlaceholder4} />
        <div aria-hidden className="absolute border border-[rgba(27,27,27,0.1)] border-solid inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function ProjectContent4() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="project-content">
      <NumCol4 />
      <InfoCol4 />
      <Frame28 />
      <ImagePlaceholderContainer4 />
    </div>
  );
}

function Project5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="project-05">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1760 1" width="1760">
            <line id="Line" opacity="0.15" stroke="#1B1B1B" x2="1760" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ProjectContent4 />
    </div>
  );
}

function Project() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="project-05">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1760 1" width="1760">
          <g id="project-05">
            <line id="Line" opacity="0.15" stroke="#1B1B1B" x2="1760" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="section-03">
      <SectionHeader2 />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Project5 />
      <Project />
    </div>
  );
}

function HeaderContent4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="header-content">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] tracking-[-0.16px] whitespace-nowrap">04 / Опыт</p>
    </div>
  );
}

function SectionHeader3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="section-header">
      <HeaderContent4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] opacity-50 relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">2021 - СЕЙЧАС</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[18px] whitespace-nowrap">Creative Digital Producer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#666] text-[14px] w-[min-content]">Интерактивные веб-проекты для брендов и медиа: переговоры, бюджет, команды, курирование и организация производства.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] opacity-50 relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">2019 - 2021</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[18px] whitespace-nowrap">Content Producer - Audio-Reclama.ru</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#666] text-[14px] w-[min-content] whitespace-pre-wrap">
        {`Управление производством аудио- и видеоконтента: `}
        <br aria-hidden />
        от сценария до постпродакшна.
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] opacity-50 relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">2015 - 2019</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[18px] whitespace-nowrap">Production background</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#666] text-[14px] whitespace-pre">
        {`Звуковой продакшн, запись звука `}
        <br aria-hidden />и мультимедийный контент.
      </p>
    </div>
  );
}

function ExperienceGrid() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start not-italic relative shrink-0 w-full" data-name="experience-grid">
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="section-04">
      <SectionHeader3 />
      <ExperienceGrid />
    </div>
  );
}

function HeaderContent5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="header-content">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] tracking-[-0.16px] whitespace-nowrap">05 / Профиль</p>
    </div>
  );
}

function SectionHeader4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="section-header">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1760 1" width="1760">
            <line id="Line" opacity="0.15" stroke="#1B1B1B" x2="1760" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <HeaderContent5 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[16px] whitespace-nowrap">Инструменты</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#666] text-[14px] w-[min-content]">
        WebGL / 3D / Adobe Pack CC /<br aria-hidden />
        Dev / AI контент
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[16px] whitespace-nowrap">Языки</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#666] text-[14px] w-[min-content] whitespace-pre-wrap">
        {`Английский - B2 `}
        <br aria-hidden />
        Греческий - B1
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[16px] whitespace-nowrap">Образование</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#666] text-[14px] w-[min-content] whitespace-pre-wrap">
        {`ННГУ им. Н. И. Лобачевского, 2015. `}
        <br aria-hidden />
        Специализация: Государственное и муниципальное управление
      </p>
    </div>
  );
}

function ProfileGrid() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start not-italic relative shrink-0 w-full" data-name="profile-grid">
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="section-05">
      <SectionHeader4 />
      <ProfileGrid />
    </div>
  );
}

function HeaderContent6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="header-content">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] tracking-[-0.16px] whitespace-nowrap">06 / Контакты</p>
    </div>
  );
}

function SectionHeader5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="section-header">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1760 1" width="1760">
            <line id="Line" opacity="0.15" stroke="#1B1B1B" x2="1760" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <HeaderContent6 />
    </div>
  );
}

function Highlight() {
  return (
    <div className="bg-[#cfff00] content-stretch flex h-[93px] items-start relative rounded-[4px] shrink-0 w-[528px]" data-name="highlight">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.1] not-italic relative shrink-0 text-[#1b1b1b] text-[73px] tracking-[-2.19px] whitespace-pre">
        {`Открыт к роли `}
        <br aria-hidden />
        {`креативного `}
        <br aria-hidden />
        диджитал-продюсера.
      </p>
    </div>
  );
}

function HighlighterTextWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1298px]" data-name="highlighter-text-wrapper">
      <Highlight />
    </div>
  );
}

function FooterHeadingColumn() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-26px] relative shrink-0 w-[1251px]" data-name="footer-heading-column">
      <HighlighterTextWrapper />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#555] text-[11px] uppercase">Telegram</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1b1b1b] text-[24px] tracking-[-0.24px]">{`@olegcastom `}</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#555] text-[11px] uppercase">Email</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[16px]">olegcastom@gmail.com</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-50 relative shrink-0 text-[#555] text-[11px] uppercase">Телефон</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1b1b1b] text-[16px]">+7 (910) 145-06-40</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start pt-[12px] relative shrink-0 w-full" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] underline whitespace-nowrap">Vimeo ↗</p>
    </div>
  );
}

function ContactsList() {
  return (
    <div className="content-stretch flex flex-col gap-[37px] h-[260px] items-start relative shrink-0 w-[460px]" data-name="contacts-list">
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function FooterMainContent() {
  return (
    <div className="content-stretch flex h-[260px] items-start relative shrink-0 w-full" data-name="footer-main-content">
      <div className="absolute bg-[#cfff00] h-[68px] left-[8px] top-[86px] w-[446px]" />
      <div className="absolute bg-[#cfff00] h-[104px] left-0 top-[156px] w-[825px]" />
      <FooterHeadingColumn />
      <ContactsList />
    </div>
  );
}

function Section5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="section-06">
      <SectionHeader5 />
      <FooterMainContent />
    </div>
  );
}

export default function CreativeProducerProjectMockup() {
  return (
    <div className="bg-[#f5f5f3] content-stretch flex flex-col gap-[40px] items-start pb-[80px] pt-[40px] px-[80px] relative size-full" data-name="creative-producer-project-mockup">
      <Header />
      <HeroSection />
      <div className="absolute h-[657px] left-[1297px] rounded-[12px] top-[137px] w-[543px]" data-name="hero-photo-placeholder">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgHeroPhotoPlaceholder} />
      </div>
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}