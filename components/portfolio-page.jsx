"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Blocks,
  Camera,
  CheckCircle2,
  LayoutGrid,
  Mail,
  Palette,
  Phone,
  Ruler,
  Sparkles,
} from "lucide-react";

const contact = {
  phone: "13333384178",
  email: "3600376954@qq.com",
};

const nav = [
  { label: "首页", href: "#top" },
  { label: "作品", href: "#work" },
  { label: "过程", href: "#process" },
  { label: "图库", href: "#gallery" },
  { label: "能力", href: "#skills" },
  { label: "联系", href: "#contact" },
];

const stats = [
  ["06", "主项目"],
  ["30+", "精选图像"],
  ["04", "能力模块"],
  ["全屏", "响应布局"],
];

const projects = [
  {
    id: "walltime",
    number: "01",
    title: "壁时",
    subtitle: "AI 桌面情绪陪伴产品",
    category: "毕业设计 / 智能产品 / CMF",
    year: "2026",
    image: "/assets/project-boards/walltime-board.jpg",
    detailImage: "/assets/optimized/walltime-detail-web.jpg",
    tone: "核心项目",
    summary:
      "以东方时间意象和桌面陪伴场景为线索，将提醒、情绪反馈和低打扰交互融合成一件安静的智能器物。",
    points: ["东方时间观", "情绪反馈", "桌面陪伴", "CMF 推导"],
    story: [
      ["设计目标", "在学习、办公和独处场景中，用柔和光效与低频提示替代强提醒，降低时间管理带来的压力感。"],
      ["形态语言", "从玉璧、节气、光晕和桌面器物中提取圆环、透光界面、温润边界与秩序感。"],
      ["体验层级", "产品外观、屏幕信息、灯光状态和桌面摆放共同建立陪伴感，让功能隐藏在更自然的日常节奏里。"],
    ],
  },
  {
    id: "gamepad",
    number: "02",
    title: "游戏手柄",
    subtitle: "消费电子建模与渲染",
    category: "Rhino 建模 / KeyShot 渲染",
    year: "2025",
    image: "/assets/optimized/game-console-wide-web.jpg",
    detailImage: "/assets/optimized/game-console-front-web.jpg",
    tone: "建模强项",
    summary:
      "围绕握持比例、按键布局和壳体曲面，呈现消费电子产品从形体控制到最终渲染的完成度。",
    points: ["硬表面建模", "按键细节", "产品比例", "材质高光"],
    story: [
      ["建模目标", "通过手柄这种高握持要求产品，展示壳体曲面、按键位置、边界倒角和装配关系的控制能力。"],
      ["细节控制", "正面、背面和局部视角共同说明摇杆、方向键、肩键与手持曲线之间的比例关系。"],
      ["画面呈现", "渲染以干净背景、真实高光和局部细节为主，让产品本身成为画面中心。"],
    ],
  },
  {
    id: "earbuds",
    number: "03",
    title: "无线蓝牙耳机",
    subtitle: "小型数码产品 CMF 表达",
    category: "产品渲染 / CMF / 细节图",
    year: "2025",
    image: "/assets/optimized/earbuds-open-web.jpg",
    detailImage: "/assets/earbuds-detail-web.jpg",
    tone: "细节表达",
    summary:
      "以充电仓开合、耳机收纳和局部倒角为重点，表达小体量消费电子的材质、比例与精致感。",
    points: ["消费电子", "细节渲染", "圆角控制", "生活方式图"],
    story: [
      ["产品气质", "耳机体量小，对圆角、接缝、开盖角度和材质反差要求更高，适合表现精细建模能力。"],
      ["CMF 处理", "白色主体、柔和阴影和局部材质变化共同建立清洁、轻巧、日常化的产品印象。"],
      ["展示节奏", "开盖大图先给出完整造型，细节页再呈现耳机、仓体和倒角关系。"],
    ],
  },
  {
    id: "cooling",
    number: "04",
    title: "手机散热风扇",
    subtitle: "游戏场景数码配件",
    category: "结构表达 / 产品渲染",
    year: "2026",
    image: "/assets/project-boards/cooling-board.jpg",
    detailImage: "/assets/cooling-fan.jpg",
    tone: "结构表达",
    summary:
      "围绕夹持结构、出风层级、状态屏和高对比 CMF，呈现游戏外设类产品的功能识别与速度感。",
    points: ["夹持结构", "风道层级", "状态屏", "高对比 CMF"],
    story: [
      ["场景定位", "面向手机游戏、长时间握持和移动散热需求，产品语义直接，功能入口清楚。"],
      ["结构线索", "夹持件、风道、背部造型和屏幕反馈共同建立散热路径与使用方式。"],
      ["视觉识别", "冷色光效与高对比材质强化游戏配件属性，使产品在小尺寸中保持辨识度。"],
    ],
  },
  {
    id: "juicer",
    number: "05",
    title: "便携式果汁机",
    subtitle: "从场景研究到产品定义",
    category: "用户研究 / 产品定义 / 建模",
    year: "2025",
    image: "/assets/project-boards/juicer-board.jpg",
    detailImage: "/assets/juicer-process.jpg",
    tone: "过程完整",
    summary:
      "从家庭、办公、户外、轻食和车载场景梳理需求，把调研转成容量、握持、清洗和安全启动方案。",
    points: ["用户场景", "需求拆解", "尺寸推导", "过程叙事"],
    story: [
      ["研究入口", "通过多场景使用需求梳理，明确便携、易清洗、容量合适和安全启动是核心设计条件。"],
      ["产品定义", "杯体比例、刀头区域、握持位置和底座控制共同服务于轻量化的即时饮用场景。"],
      ["过程表达", "调研、定位、草图和建模图形成连续路径，展示从问题到形体的推导关系。"],
    ],
  },
  {
    id: "packaging",
    number: "06",
    title: "涪陵榨菜包装",
    subtitle: "传统食品品牌视觉更新",
    category: "包装设计 / 品牌视觉系统",
    year: "2026",
    image: "/assets/project-boards/packaging-board-clean.jpg",
    detailImage: "/assets/optimized/packaging-board-web.jpg",
    tone: "视觉系统",
    summary:
      "以地域插画、口味色彩、货架识别和系列层级为重点，呈现包装设计与品牌视觉系统能力。",
    points: ["包装系统", "地域插画", "货架识别", "系列化"],
    story: [
      ["品牌线索", "从地域文化、食品属性和口味差异中建立视觉关键词，使包装具备清晰的识别入口。"],
      ["系列关系", "色彩分组、插画元素和版式层级形成统一系统，同时保留不同口味的差异。"],
      ["商业呈现", "包装主视觉、系列陈列和局部信息共同说明货架环境下的识别效率。"],
    ],
  },
];

const processSteps = [
  {
    title: "观察",
    text: "从真实使用场景出发，记录行为、环境、情绪和器物之间的关系。",
  },
  {
    title: "提炼",
    text: "把文化意象、功能需求和产品语义整理成清晰的造型方向。",
  },
  {
    title: "建模",
    text: "通过比例、曲面、结构边界和细节关系，让概念落成可感知的产品形态。",
  },
  {
    title: "呈现",
    text: "用渲染、版式、场景图和细节图建立完整的观看节奏。",
  },
];

const gallery = [
  ["/assets/optimized/game-console-front-web.jpg", "游戏手柄正面渲染", "数码产品建模"],
  ["/assets/optimized/earbuds-open-web.jpg", "无线耳机开盖图", "消费电子 CMF"],
  ["/assets/optimized/game-console-back-web.jpg", "游戏手柄背面结构", "按键与握持比例"],
  ["/assets/walltime-process.jpg", "壁时过程图", "毕业设计叙事"],
  ["/assets/project-boards/packaging-board-clean.jpg", "包装视觉系统", "排版与色彩"],
  ["/assets/project-boards/chair-board.jpg", "人体工学座椅", "人机尺寸"],
];

const skills = [
  [Ruler, "产品定义", "用户场景、竞品拆解、机会点提炼、产品结构逻辑。"],
  [Blocks, "三维建模", "Rhino 硬表面建模、组件关系、曲面控制和产品比例。"],
  [Camera, "渲染表达", "KeyShot 材质、灯光、场景图、细节图和展示板。"],
  [Palette, "CMF/包装", "色彩材料工艺、包装系统、品牌视觉和版式整理。"],
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.requestAnimationFrame) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return undefined;

    const lenis = new Lenis({
      duration: 1.18,
      smoothWheel: true,
      touchMultiplier: 1.12,
      wheelMultiplier: 0.86,
      lerp: 0.075,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    const handleAnchorClick = (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -92, duration: 1.08 });
    };

    document.addEventListener("click", handleAnchorClick);
    rafId = window.requestAnimationFrame(raf);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}

export default function PortfolioPage() {
  const [introVisible, setIntroVisible] = useState(true);
  useSmoothScroll();

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main id="top" className="site-shell">
      <AnimatePresence>{introVisible ? <OpeningAnimation /> : null}</AnimatePresence>

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="返回首页">
          曹
        </a>
        <nav aria-label="主导航">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          联系
          <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <motion.p className="section-kicker" {...fadeUp}>
            Product Design Portfolio
          </motion.p>
          <motion.h1 id="hero-title" {...fadeUp} transition={{ delay: 0.08 }}>
            曹佳航
            <span>产品设计作品集</span>
          </motion.h1>
          <motion.p className="hero-lead" {...fadeUp} transition={{ delay: 0.16 }}>
            作品围绕桌面智能产品、消费电子建模、CMF、包装视觉与生活方式场景展开，记录从观察、提炼到最终呈现的设计路径。
          </motion.p>
          <motion.div className="hero-actions" {...fadeUp} transition={{ delay: 0.24 }}>
            <a className="primary-action" href="#work">
              查看作品
              <ArrowUpRight size={17} />
            </a>
            <a className="secondary-action" href="#gallery">
              浏览图库
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-board"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.72 }}
        >
          <div className="hero-board-main">
            <PortfolioImage
              src="/assets/optimized/game-console-wide-web.jpg"
              alt="游戏手柄产品渲染"
              eager
              priority="high"
            />
            <span>消费电子建模</span>
          </div>
          <div className="note-stack" aria-label="作品集视觉标签">
            {["建模渲染", "CMF 推导", "生活方式场景"].map((item) => (
              <div key={item}>
                <CheckCircle2 size={16} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="stats-row">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <nav className="project-quick-nav" aria-label="精选项目快速导航">
        {projects.map((project) => (
          <a key={project.id} href={`#${project.id}`}>
            <span>{project.number}</span>
            {project.title}
          </a>
        ))}
      </nav>

      <section id="work" className="section-wrap" aria-labelledby="work-title">
        <SectionHeading
          kicker="Selected Works"
          title="从智能桌面产品到消费电子，呈现清晰的产品设计表达。"
          text="每个项目围绕设计目标、形态语言、建模渲染和视觉呈现展开，让作品在不同设备上都保持明确的阅读节奏。"
          id="work-title"
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="feature-strip" aria-label="作品集视觉方向">
        <div>
          <Sparkles size={22} />
          <strong>作品气质</strong>
          <span>明亮留白、柔和色彩、产品图像优先</span>
        </div>
        <div>
          <LayoutGrid size={22} />
          <strong>浏览体验</strong>
          <span>大图先行、卡片分组、手机和平板自然适配</span>
        </div>
      </section>

      <section id="process" className="section-wrap process-section" aria-labelledby="process-title">
        <SectionHeading
          kicker="Design Process"
          title="设计过程从观察开始，在形态和体验里落地。"
          text="项目以场景洞察、文化提炼、三维建模和视觉呈现串联，形成从想法到产品形象的完整路径。"
          id="process-title"
        />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap story-section" aria-labelledby="story-title">
        <SectionHeading
          kicker="Project Detail"
          title="项目细节呈现从概念到渲染的设计过程。"
          text="详情内容以设计目标、形态语言和呈现重点展开，突出每个作品的判断、推导和最终完成度。"
          id="story-title"
        />
        <div className="story-list">
          {projects.map((project) => (
            <article className="story-card" id={`case-${project.id}`} key={project.id}>
              <div className="story-image">
                <PortfolioImage src={project.detailImage} alt={`${project.title}详情图`} />
              </div>
              <div className="story-content">
                <p className="project-number">{project.number}</p>
                <h3>{project.title}</h3>
                <p className="story-summary">{project.summary}</p>
                <div className="story-points">
                  {project.story.map(([label, text]) => (
                    <div key={label}>
                      <strong>{label}</strong>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="section-wrap gallery-section" aria-labelledby="gallery-title">
        <SectionHeading
          kicker="Gallery"
          title="视觉墙整合建模、渲染、CMF 与版式表达。"
          text="主视觉使用大图建立第一印象，辅助内容以清晰比例补充产品细节，让浏览过程更轻、更快、更集中。"
          id="gallery-title"
        />
        <div className="gallery-grid">
          {gallery.map(([src, title, meta], index) => (
            <article className={index === 0 || index === 1 ? "gallery-card wide" : "gallery-card"} key={title}>
              <PortfolioImage src={src} alt={title} />
              <div>
                <h3>{title}</h3>
                <p>{meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-wrap" aria-labelledby="skills-title">
        <SectionHeading
          kicker="Skills"
          title="能力结构覆盖产品定义、三维建模、渲染表达与视觉系统。"
          text="作品中的能力并列呈现：既有产品逻辑，也有形态控制、材质呈现和图文组织。"
          id="skills-title"
        />
        <div className="skills-grid">
          {skills.map(([Icon, title, text]) => (
            <article className="skill-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">以产品形态回应场景，以视觉表达呈现想法。</h2>
          <p>
            作品方向集中在生活方式产品、消费电子、工业建模、CMF、包装视觉和用户场景研究。
          </p>
        </div>
        <div className="contact-cards">
          <a href={`tel:${contact.phone}`}>
            <Phone size={22} />
            <span>电话</span>
            <strong>{contact.phone}</strong>
          </a>
          <a href={`mailto:${contact.email}`}>
            <Mail size={22} />
            <span>邮箱</span>
            <strong>{contact.email}</strong>
          </a>
        </div>
      </section>
    </main>
  );
}

function OpeningAnimation() {
  return (
    <motion.div
      className="intro-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div className="intro-stage">
        <motion.div
          className="intro-orbit"
          initial={{ opacity: 0, rotateX: 8, rotateY: -68, scale: 0.74 }}
          animate={{
            opacity: 1,
            rotateX: [8, -3, 0],
            rotateY: [-68, 18, 0],
            scale: [0.74, 1.05, 1],
          }}
          transition={{ duration: 1.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="intro-halo" />
          <img
            src="/assets/optimized/walltime-front-web.jpg"
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width="1200"
            height="1200"
          />
        </motion.div>

        <motion.div
          className="intro-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.84, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>壁时</span>
          <strong>AI 桌面情绪陪伴产品</strong>
          <i />
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <article className={featured ? "project-card featured" : "project-card"} id={project.id}>
      <a href={`#case-${project.id}`}>
        <div className="project-image">
          <PortfolioImage src={project.image} alt={`${project.title}展示图`} eager={featured} />
          <span>{project.tone}</span>
        </div>
        <div className="project-body">
          <p className="project-number">
            {project.number} / {project.year}
          </p>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-summary">{project.summary}</p>
          <div className="project-tags">
            {project.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}

function PortfolioImage({ src, alt, eager = false, priority = "auto" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority}
      width="1600"
      height="1200"
    />
  );
}

function SectionHeading({ kicker, title, text, id }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
