"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Box,
  CircleDot,
  Mail,
  Menu,
  Palette,
  Phone,
  ScanLine,
  X,
} from "lucide-react";

const contact = {
  phone: "13333384178",
  email: "3600376954@qq.com",
};

const navItems = [
  ["壁时项目", "#walltime-case"],
  ["设计过程", "#walltime-process"],
  ["关于我", "#about"],
  ["其他作品", "#works"],
  ["联系", "#contact"],
];

const interactionSteps = [
  ["01", "靠近", "ToF 感应识别用户进入桌面空间。"],
  ["02", "唤醒", "环形光效渐亮，以低打扰方式回应。"],
  ["03", "选择", "旋转节气模块，切换专注与陪伴模式。"],
  ["04", "回应", "AI 语音、时间信息和情绪反馈协同工作。"],
  ["05", "休息", "任务结束后进入柔和呼吸光与休眠状态。"],
];

const lightStates = [
  ["专注", "#5ed29c", "稳定青绿光环，减少视觉干扰。"],
  ["冥想", "#64cce3", "缓慢呼吸光，引导放松节奏。"],
  ["节气", "#d7a94a", "暖金环带呈现东方时间意象。"],
  ["陪伴", "#f0ece0", "低亮度暖白光，维持桌面存在感。"],
];

const cmfSwatches = [
  ["曜石黑", "#111311", "主体基座"],
  ["描金", "#c89a45", "边框与纹样"],
  ["青蓝光", "#58bed1", "状态反馈"],
  ["玉白", "#eee9db", "透光组件"],
  ["朱红", "#9e3c2f", "节气点缀"],
];

const capabilities = [
  [ScanLine, "洞察与定义", "场景观察、用户需求、竞品拆解和设计机会点提炼。"],
  [Box, "三维建模", "Rhino 硬表面建模、曲面控制、比例推敲和结构表达。"],
  [CircleDot, "渲染表达", "KeyShot 材质、灯光、产品场景、细节视角和展示板。"],
  [Palette, "CMF 与视觉", "色彩材料工艺、包装系统、品牌识别和信息版式。"],
];

const otherProjects = [
  {
    number: "01",
    title: "手机散热风扇",
    subtitle: "游戏场景数码配件",
    meta: "结构表达 / 产品渲染 / CMF",
    description:
      "以横向夹持结构、独立制冷按键、档位显示和高对比红黑 CMF，强化游戏外设的功能识别与速度感。",
    images: [
      {
        src: "/assets/selected-projects/cooling-fan-overview-4k.jpg",
        alt: "手机散热风扇安装在手机背面的完整产品渲染",
        label: "整体结构",
        width: 3840,
        height: 1920,
      },
      {
        src: "/assets/selected-projects/cooling-fan-detail-4k.jpg",
        alt: "手机散热风扇制冷按键与档位显示细节渲染",
        label: "控制与 CMF 细节",
        width: 3840,
        height: 1920,
      },
    ],
  },
  {
    number: "02",
    title: "鼠标产品渲染",
    subtitle: "简洁曲面与人体工学表达",
    meta: "Rhino / KeyShot / 曲面建模",
    description:
      "通过蓝灰双色分件、连续上壳曲面、滚轮中轴和底部脚垫布局，呈现办公鼠标的造型控制与完整三视角表达。",
    images: [
      {
        src: "/assets/selected-projects/mouse-angle-left-4k.jpg",
        alt: "蓝色无线鼠标左前侧产品渲染",
        label: "左前视角",
        width: 3840,
        height: 2159,
      },
      {
        src: "/assets/selected-projects/mouse-angle-right-4k.jpg",
        alt: "蓝色无线鼠标右前侧产品渲染",
        label: "右前视角",
        width: 3840,
        height: 2159,
      },
      {
        src: "/assets/selected-projects/mouse-bottom-4k.jpg",
        alt: "蓝色无线鼠标底部结构渲染",
        label: "底部结构",
        width: 3840,
        height: 2159,
      },
    ],
  },
  {
    number: "03",
    title: "涪陵榨菜包装设计",
    subtitle: "地域文化与现代货架体验",
    meta: "品牌视觉 / 包装结构 / 系列化",
    description:
      "从青菜头、山城地貌、传统工艺与下饭场景中提炼视觉资产，建立品牌识别、陈列包装和文化衍生品系统。",
    layout: "portrait",
    images: [
      {
        src: "/assets/packaging/fuling-production-board.png",
        alt: "涪陵榨菜包装结构与应用展板",
        label: "包装结构与应用",
        width: 1054,
        height: 1492,
      },
      {
        src: "/assets/packaging/fuling-brand-board.png",
        alt: "涪陵榨菜品牌定位与视觉系统展板",
        label: "品牌定位与视觉系统",
        width: 1054,
        height: 1492,
      },
    ],
  },
  {
    number: "04",
    title: "智能药盒设计",
    subtitle: "磁吸结构与单次取药体验",
    meta: "产品改良 / 结构设计 / 使用流程",
    description:
      "通过磁吸开合、四个独立药仓、侧边单仓释放和手机背部吸附，让日常分药、取药与携带更加清晰便捷。",
    layout: "portrait",
    images: [
      {
        src: "/assets/selected-projects/smart-pill-box-board.jpg",
        alt: "便携式磁吸智能药盒完整设计展板",
        label: "完整设计展板",
        width: 3508,
        height: 4961,
      },
    ],
  },
  {
    number: "05",
    title: "游戏手柄",
    subtitle: "消费电子建模与渲染",
    meta: "Rhino / KeyShot / 硬表面建模",
    description:
      "围绕握持比例、壳体曲面、按键布局与装配边界，呈现消费电子产品的形体控制和细节完成度。",
    images: [
      {
        src: "/assets/optimized/game-console-wide-web.jpg",
        alt: "游戏手柄产品渲染",
        label: "整体产品渲染",
        width: 1600,
        height: 1440,
      },
      {
        src: "/assets/optimized/game-console-front-web.jpg",
        alt: "游戏手柄正面细节",
        label: "正面细节",
        width: 1400,
        height: 1260,
      },
    ],
  },
  {
    number: "06",
    title: "无线蓝牙耳机",
    subtitle: "小型数码产品 CMF 表达",
    meta: "产品渲染 / CMF / 细节控制",
    description:
      "通过充电仓开合、耳机收纳与圆角细节，呈现小体量消费电子的精致感和生活方式气质。",
    images: [
      {
        src: "/assets/optimized/earbuds-open-web.jpg",
        alt: "无线蓝牙耳机开盖渲染",
        label: "开盖状态",
        width: 1400,
        height: 1184,
      },
      {
        src: "/assets/earbuds-detail-web.jpg",
        alt: "无线蓝牙耳机细节",
        label: "产品细节",
        width: 1800,
        height: 1522,
      },
    ],
  },
  {
    number: "07",
    title: "便携式果汁机",
    subtitle: "透明杯体与便携搅拌结构",
    meta: "产品建模 / 透明材质 / 结构细节",
    description:
      "以透明杯体、可视刀组、圆柱电机底座和简洁状态按键构成便携搅拌方案，重点呈现透明材质与内部结构关系。",
    images: [
      {
        src: "/assets/selected-projects/portable-juicer-overview-6k.jpg",
        alt: "便携式果汁机完整产品渲染",
        label: "整体造型",
        width: 6048,
        height: 3777,
      },
      {
        src: "/assets/selected-projects/portable-juicer-detail-6k.jpg",
        alt: "便携式果汁机刀组与控制底座细节渲染",
        label: "刀组与控制细节",
        width: 6048,
        height: 3777,
      },
      {
        src: "/assets/selected-projects/portable-juicer-front-6k.png",
        alt: "便携式果汁机正面产品渲染",
        label: "正面视角",
        width: 6048,
        height: 3777,
      },
    ],
  },
];

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
};

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.84,
      touchMultiplier: 1.05,
    });
    let frame = 0;
    const tick = (time) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(tick);
    };
    const navigate = (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href");
      const target = href ? document.querySelector(href) : null;
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -72, duration: 1.06 });
    };

    document.addEventListener("click", navigate);
    frame = window.requestAnimationFrame(tick);
    return () => {
      document.removeEventListener("click", navigate);
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}

export default function WalltimePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroVideoRef = useRef(null);
  useSmoothScroll();

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    video.muted = true;
    if (!navigator.userAgent.includes("jsdom")) {
      const playback = video.play();
      playback?.catch?.(() => undefined);
    }
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <main id="top" className="walltime-site">
      <header className="walltime-header">
        <a className="walltime-logo" href="#top" aria-label="返回壁时首页">
          <span>壁时</span>
          <i>WALLTIME</i>
        </a>

        <nav className={menuOpen ? "is-open" : ""} aria-label="主导航">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="walltime-menu"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="walltime-hero" aria-labelledby="walltime-title">
        <div className="hero-video" aria-hidden="true">
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/walltime/walltime-poster.jpg"
          >
            <source src="/assets/walltime/walltime-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-video-shade" />
        <div className="hero-grid-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <svg className="hero-glow" viewBox="0 0 900 320" aria-hidden="true">
          <defs>
            <filter id="glow-blur">
              <feGaussianBlur stdDeviation="25" />
            </filter>
          </defs>
          <ellipse cx="450" cy="120" rx="340" ry="68" fill="rgba(34,138,108,.42)" filter="url(#glow-blur)" />
        </svg>

        <div className="hero-content">
          <motion.aside
            className="liquid-card"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{ delay: 0.18, duration: 0.72 }}
          >
            <span>[ 2026 ]</span>
            <h2>
              东方时间意象
              <em>融入智能陪伴</em>
            </h2>
            <p>24 节气、全息时间窗与情绪灯光，共同构成低打扰桌面体验。</p>
          </motion.aside>

          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="hero-eyebrow">01 / FEATURED PROJECT</p>
            <h1 id="walltime-title">
              壁时<span>.</span>
            </h1>
            <h2>AI 桌面情绪陪伴产品</h2>
            <p className="hero-lead">
              以时间、光影与情绪反馈为核心，
              <br />
              探索智能产品如何自然地融入桌面生活。
            </p>
            <a className="primary-cta" href="#walltime-case">
              查看壁时项目 <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>

        <a className="scroll-cue" href="#walltime-case">
          <span>向下探索</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section id="walltime-case" className="case-intro" aria-labelledby="case-title">
        <motion.div className="case-title-block" {...reveal}>
          <p className="section-label">WALLTIME / CASE STUDY</p>
          <h2 id="case-title">让时间从提醒工具，变成安静的桌面陪伴。</h2>
        </motion.div>
        <motion.p className="case-intro-copy" {...reveal}>
          壁时以玉璧为形态原型，把 24 节气、全息时间信息、AI 情绪反馈与低打扰灯光整合进桌面器物。它不追求高频打断，而是在专注、冥想、休息和独处时提供恰到好处的回应。
        </motion.p>
        <div className="case-meta">
          <div><span>项目类型</span><strong>智能产品设计</strong></div>
          <div><span>设计内容</span><strong>研究 / 造型 / CMF / 交互</strong></div>
          <div><span>核心技术</span><strong>AI / ToF / RGB LED</strong></div>
          <div><span>完成时间</span><strong>2026</strong></div>
        </div>
      </section>

      <section id="walltime-process" className="walltime-process" aria-label="壁时完整设计过程">
        <NarrativeBand
          number="01"
          eyebrow="PROJECT BACKGROUND"
          title="项目背景"
          text="深夜学习、居家办公与长期屏幕使用，使时间焦虑和情绪疲惫叠加。传统计时器强调效率，却很少回应专注过程中的情绪变化。"
        >
          <div className="background-story">
            <div className="background-visual">
              <PortfolioImage src="/assets/walltime/walltime-background-web.jpg" alt="壁时核心功能、适用场景与使用方式展板" />
            </div>
            <figure className="background-logo">
              <PortfolioImage src="/assets/walltime/walltime-logo-web.jpg" alt="壁时智愈之境品牌标志" />
              <figcaption>
                <span>品牌标识</span>
                玉璧、山水与时间轨迹共同构成“壁时”的东方识别。
              </figcaption>
            </figure>
          </div>
        </NarrativeBand>

        <NarrativeBand
          number="02"
          eyebrow="USAGE SCENARIOS"
          title="用户使用场景"
          text="产品面向深度创作者、知识工作者和学生群体，覆盖书桌起稿、深夜办公、冥想休息、睡前陪伴与居家创作等节奏。"
          dark
        >
          <div className="scenario-grid">
            {[
              ["深夜办公", "保持时间感知，降低屏幕切换频率。"],
              ["专注创作", "以环形光效提示阶段，不打断思路。"],
              ["冥想休息", "通过呼吸光和低频语音引导恢复。"],
              ["睡前陪伴", "暖色低亮状态提供安静的存在感。"],
            ].map(([title, text]) => (
              <article key={title}>
                <span />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </NarrativeBand>

        <NarrativeBand
          number="03"
          eyebrow="DESIGN OPPORTUNITY"
          title="设计机会点"
          text="把时间信息、状态反馈和文化意象放进同一件产品，用柔和的视觉与交互替代手机弹窗式提醒。"
        >
          <div className="opportunity-list">
            <div><strong>低打扰</strong><span>信息可见，但不争夺注意力。</span></div>
            <div><strong>情绪回应</strong><span>让灯光、声音与节奏共同表达状态。</span></div>
            <div><strong>文化识别</strong><span>让节气与玉璧意象成为产品逻辑，而非表面装饰。</span></div>
          </div>
        </NarrativeBand>

        <NarrativeBand
          number="04"
          eyebrow="PRODUCT CONCEPT"
          title="产品概念"
          text="“以时间为环，以陪伴为心。”外环承载 24 节气模块，中孔形成全息信息窗口，底座完成感知、投影、供电与情绪灯光。"
          dark
        >
          <div className="concept-stage">
            <PortfolioImage src="/assets/walltime/walltime-concept-render-web.jpg" alt="壁时桌面情绪陪伴产品概念渲染" />
            <div className="concept-orbit orbit-one" />
            <div className="concept-orbit orbit-two" />
          </div>
        </NarrativeBand>

        <NarrativeBand
          number="05"
          eyebrow="FORM DEVELOPMENT"
          title="外观造型推导"
          text="形态从玉璧的圆环秩序出发，逐步加入中央时间窗、模块化节气环、描金边框和悬浮发光底座。"
        >
          <div className="form-grid">
            <figure>
              <PortfolioImage src="/assets/optimized/walltime-front-web.jpg" alt="壁时正面造型" />
              <figcaption>圆环比例与中央时间窗</figcaption>
            </figure>
            <figure>
              <PortfolioImage src="/assets/optimized/walltime-detail-web.jpg" alt="壁时侧面与细节造型" />
              <figcaption>悬浮关系与底座层级</figcaption>
            </figure>
            <figure>
              <PortfolioImage src="/assets/walltime-process.jpg" alt="壁时造型设计过程" />
              <figcaption>文化提炼与造型演化</figcaption>
            </figure>
          </div>
        </NarrativeBand>

        <NarrativeBand
          number="06"
          eyebrow="FUNCTION & INTERACTION"
          title="功能与交互逻辑"
          text="产品本体完成靠近、唤醒、旋转与语音等高频操作，手机 App 承担节气信息、场景灯光、提醒日程和个性化设置。"
          dark
        >
          <div className="interaction-flow">
            {interactionSteps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <figure className="app-showcase">
            <PortfolioImage src="/assets/walltime/walltime-app-web.jpg" alt="壁时手机 App 启动页、首页、节气、场景控制与提醒日程界面" />
            <figcaption>
              <span>APP INTERFACE</span>
              从设备状态到节气解读、灯光控制与日程提醒，形成产品与手机端的完整体验闭环。
            </figcaption>
          </figure>
        </NarrativeBand>

        <NarrativeBand
          number="07"
          eyebrow="LIGHT & EMOTION"
          title="灯光和情绪反馈"
          text="灯光不是装饰，而是产品的第二界面。颜色、亮度和呼吸速度共同表达专注、冥想、节气与陪伴状态。"
        >
          <div className="light-grid">
            {lightStates.map(([title, color, text]) => (
              <article key={title}>
                <i style={{ "--state-color": color }} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </NarrativeBand>

        <NarrativeBand
          number="08"
          eyebrow="CMF"
          title="材料与颜色"
          text="以曜石黑和描金建立安静、克制的产品基调，用青蓝光表现科技反馈，玉白透光件平衡硬朗结构。"
          dark
        >
          <div className="cmf-grid">
            {cmfSwatches.map(([name, color, use]) => (
              <article key={name}>
                <i style={{ "--swatch": color }} />
                <div><strong>{name}</strong><span>{use}</span></div>
              </article>
            ))}
          </div>
        </NarrativeBand>

        <NarrativeBand
          number="09"
          eyebrow="PRODUCT DETAILS"
          title="产品细节"
          text="爆炸结构展示节气外环、中央显示模组、悬浮连接件与底座内部系统，明确产品从视觉造型到工程装配的层级关系。"
        >
          <div className="detail-layout">
            <div className="detail-main exploded-main">
              <PortfolioImage src="/assets/walltime/walltime-exploded.png" alt="壁时产品爆炸结构图" />
            </div>
            <div className="detail-notes">
              {["24 节气模块化外环", "中央圆形显示模组", "悬浮连接与支撑结构", "感应、供电与灯光底座"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </NarrativeBand>

        <NarrativeBand
          number="10"
          eyebrow="FINAL SHOWCASE"
          title="最终效果展示"
          text="最终方案将东方文化表达、桌面交互、技术系统与情绪陪伴整合为完整产品，并延展至 App 联动和多场景使用。"
          dark
        >
          <div className="final-boards">
            <BoardLink
              src="/assets/walltime/walltime-final-board-web.jpg"
              original="/assets/walltime/walltime-final-board.png"
              alt="壁时产品设计最终效果完整展板"
              label="壁时最终设计展板"
            />
          </div>
        </NarrativeBand>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <motion.div className="about-heading" {...reveal}>
          <p className="section-label">ABOUT THE DESIGNER</p>
          <h2 id="about-title">曹佳航</h2>
          <h3>PRODUCT DESIGNER</h3>
          <p className="about-statement">
            从生活里观察，
            <em>为日常造物。</em>
          </p>
        </motion.div>
        <motion.div className="about-copy" {...reveal}>
          <p>
            我关注智能桌面产品、消费电子、CMF 与包装视觉。设计从真实场景和使用动作出发，通过研究、形态推导、三维建模与视觉叙事，让产品逻辑和情绪体验同时成立。
          </p>
          <div className="about-capabilities">
            {capabilities.map(([Icon, title, text]) => (
              <article key={title}>
                <Icon size={20} />
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="works" className="other-works" aria-labelledby="works-title">
        <div className="works-heading">
          <p className="section-label">SELECTED WORKS</p>
          <h2 id="works-title">其他精选项目</h2>
          <p>壁时之后，继续展示消费电子、鼠标建模、包装系统、健康产品与生活小家电。</p>
        </div>
        <div className="other-project-list">
          {otherProjects.map((project, index) => (
            <OtherProject project={project} reverse={index % 2 === 1} key={project.number} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <p className="section-label">CONTACT</p>
        <h2 id="contact-title">让下一个想法，成为看得见的产品。</h2>
        <div className="contact-links">
          <a href={`tel:${contact.phone}`}>
            <Phone size={18} />
            <span>电话</span>
            <strong>{contact.phone}</strong>
          </a>
          <a href={`mailto:${contact.email}`}>
            <Mail size={18} />
            <span>邮箱</span>
            <strong>{contact.email}</strong>
          </a>
        </div>
        <footer>
          <span>曹佳航 · 产品设计作品集 · 2026</span>
          <a href="#top">回到壁时 <ArrowUpRight size={15} /></a>
        </footer>
      </section>
    </main>
  );
}

function NarrativeBand({ number, eyebrow, title, text, dark = false, children }) {
  return (
    <section className={`narrative-band ${dark ? "is-dark" : ""}`} aria-labelledby={`step-${number}`}>
      <motion.div className="narrative-heading" {...reveal}>
        <div>
          <span>{number}</span>
          <p>{eyebrow}</p>
        </div>
        <h2 id={`step-${number}`}>{title}</h2>
        <p>{text}</p>
      </motion.div>
      <motion.div className="narrative-content" {...reveal}>
        {children}
      </motion.div>
    </section>
  );
}

function BoardLink({ src, original, alt, label }) {
  return (
    <a href={original} target="_blank" rel="noreferrer" aria-label={`${label}高清原图`}>
      <PortfolioImage src={src} alt={alt} />
      <span>{label}<ArrowUpRight size={15} /></span>
    </a>
  );
}

function OtherProject({ project, reverse }) {
  const [primaryImage, ...supportImages] = project.images;

  return (
    <motion.article
      className={`other-project ${reverse ? "reverse" : ""} ${project.layout ? `project-${project.layout}` : ""}`}
      {...reveal}
    >
      <div className="other-project-media">
        <ProjectImageLink image={primaryImage} title={project.title} />
        <span>{project.meta}</span>
      </div>
      <div className="other-project-copy">
        <p>{project.number}</p>
        <h3>{project.title}</h3>
        <h4>{project.subtitle}</h4>
        <p>{project.description}</p>
      </div>
      {supportImages.length > 0 && (
        <div className={`other-project-gallery gallery-count-${supportImages.length}`}>
          {supportImages.map((image) => (
            <ProjectImageLink image={image} title={project.title} key={image.src} />
          ))}
        </div>
      )}
    </motion.article>
  );
}

function ProjectImageLink({ image, title }) {
  return (
    <a
      className="project-image-link"
      href={image.src}
      target="_blank"
      rel="noreferrer"
      aria-label={`查看${title}${image.label}高清原图`}
      style={{ maxWidth: `${image.width}px` }}
    >
      <PortfolioImage {...image} />
      <span>{image.label}<ArrowUpRight size={15} /></span>
    </a>
  );
}

function PortfolioImage({ src, alt, width, height }) {
  return <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />;
}
