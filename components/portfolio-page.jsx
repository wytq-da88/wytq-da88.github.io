"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  { label: "方法", href: "#process" },
  { label: "图库", href: "#gallery" },
  { label: "能力", href: "#skills" },
  { label: "联系", href: "#contact" },
];

const stats = [
  ["06", "精选项目"],
  ["24+", "整理后的作品图"],
  ["100%", "中文求职表达"],
  ["全端", "手机/平板/电脑适配"],
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
    detailImage: "/assets/walltime-detail.png",
    tone: "核心项目",
    summary:
      "围绕桌面时间管理、情绪陪伴和东方器物意象，把提醒工具转译成低打扰的桌面智能产品。",
    points: ["东方时间观", "情绪疗愈", "桌面场景", "CMF 推导"],
    story: [
      ["项目背景", "桌面提醒产品容易变成压力源，壁时尝试用更柔和的方式陪伴学习、办公和独处场景。"],
      ["设计提炼", "从玉璧、节气、光晕和桌面器物中提取圆环、透光界面、温润边界和仪式感。"],
      ["过程补强", "适合继续补草图、用户旅程、屏幕信息层级、结构爆炸图和 App 联动页面。"],
    ],
  },
  {
    id: "gamepad",
    number: "02",
    title: "游戏手柄",
    subtitle: "数码产品建模与渲染",
    category: "Rhino 建模 / KeyShot 渲染",
    year: "2025",
    image: "/assets/game-console-wide.jpg",
    detailImage: "/assets/game-console-front.jpg",
    tone: "建模强项",
    summary:
      "用完整的数码产品建模图展示硬表面比例、按键细节、曲面控制和消费电子渲染能力。",
    points: ["硬表面建模", "按键细节", "产品比例", "材质高光"],
    story: [
      ["展示价值", "手柄比普通课堂小件更容易体现曲面控制、握持比例、装配关系和产品摄影感。"],
      ["页面处理", "网站中用横向大图做视觉入口，详情区展示正面和局部细节，避免图片散乱。"],
      ["后续优化", "可以补握持姿态、按键爆炸图、CMF 色彩方案和竞品尺寸对比。"],
    ],
  },
  {
    id: "earbuds",
    number: "03",
    title: "无线蓝牙耳机",
    subtitle: "小型数码产品 CMF 表达",
    category: "产品渲染 / CMF / 细节图",
    year: "2025",
    image: "/assets/earbuds-open.jpg",
    detailImage: "/assets/earbuds-detail-web.jpg",
    tone: "视觉补强",
    summary:
      "用耳机开盖、充电仓和局部细节展示小体量产品的材质、倒角、比例和消费电子质感。",
    points: ["消费电子", "细节渲染", "圆角控制", "生活方式图"],
    story: [
      ["选择原因", "耳机项目更适合展示消费电子产品的材质、比例、细节处理和生活方式气质。"],
      ["设计重点", "通过开盖角度、耳机收纳关系、仓体倒角和细节材质强调产品完成度。"],
      ["后续优化", "可以继续补佩戴场景、CMF 版本、尺寸图和包装开箱页。"],
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
      "围绕夹持结构、出风层级、屏幕反馈和高对比 CMF，呈现游戏外设类产品的功能表达。",
    points: ["夹持结构", "风道层级", "屏幕反馈", "高对比 CMF"],
    story: [
      ["场景定位", "面向手机游戏、长时间握持和移动散热需求，产品语义清楚，功能入口容易理解。"],
      ["版式策略", "用信息卡拆解功能点，让浏览者先看懂产品用途，再看渲染和细节。"],
      ["后续优化", "可以补使用手势、装配图、散热路径和不同手机尺寸适配。"],
    ],
  },
  {
    id: "juicer",
    number: "05",
    title: "便携式果汁机",
    subtitle: "用户研究到产品定义",
    category: "用户研究 / 产品定义 / 建模",
    year: "2025",
    image: "/assets/project-boards/juicer-board.jpg",
    detailImage: "/assets/juicer-process.jpg",
    tone: "过程完整",
    summary:
      "从家庭、办公、户外、辅食和车载场景梳理需求，把调研转成容量、握持、清洗和安全启动方案。",
    points: ["用户场景", "需求拆解", "尺寸推导", "过程叙事"],
    story: [
      ["保留原因", "这个项目适合证明你不是只会渲染，也能从场景和用户需求推导产品方向。"],
      ["内容整理", "网站中突出研究、定位和模型过程，把它作为设计思考能力的补充项目。"],
      ["后续优化", "可以补竞品矩阵、用户画像、清洗流程、刀头安全结构和使用情境图。"],
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
    detailImage: "/assets/packaging-board.png",
    tone: "视觉延展",
    summary:
      "以地域插画、口味色彩、货架识别和系列层级为重点，展示包装和视觉系统能力。",
    points: ["包装系统", "地域插画", "货架识别", "系列化"],
    story: [
      ["展示价值", "包装项目能补足产品设计作品集里的视觉系统和商业落地感。"],
      ["页面处理", "用清晰的品牌卡片和大图排版替代复杂展板，让手机浏览也能看清层级。"],
      ["后续优化", "可以补包装展开图、货架模拟、口味系列和社交媒体传播图。"],
    ],
  },
];

const processSteps = [
  {
    title: "筛选",
    text: "先删掉课程感强、完成度弱、与你求职方向不匹配的内容，保留能证明产品设计能力的项目。",
  },
  {
    title: "重排",
    text: "把每个项目统一成背景、机会点、过程、模型、渲染和总结，减少散图堆叠。",
  },
  {
    title: "包装",
    text: "用清爽白底、卡片、圆角和生活方式图片，建立更像互联网大厂作品集的阅读体验。",
  },
  {
    title: "投递",
    text: "网站负责快速浏览，后续 PDF 和 PPT 复用同一套项目顺序、文字和图片比例。",
  },
];

const gallery = [
  ["/assets/game-console-front.jpg", "游戏手柄正面渲染", "数码产品建模"],
  ["/assets/earbuds-open.jpg", "无线耳机开盖图", "消费电子 CMF"],
  ["/assets/game-console-back.jpg", "游戏手柄背面结构", "按键与握持比例"],
  ["/assets/walltime-process.jpg", "壁时过程图", "毕业设计叙事"],
  ["/assets/project-boards/packaging-board-clean.jpg", "包装视觉系统", "排版与色彩"],
  ["/assets/project-boards/chair-board.jpg", "人体工学座椅", "人机尺寸"],
];

const skills = [
  [Ruler, "产品定义", "用户场景、竞品拆解、机会点提炼、产品结构逻辑。"],
  [Blocks, "三维建模", "Rhino 硬表面建模、组件关系、曲面控制和产品比例。"],
  [Camera, "渲染表达", "KeyShot 材质、灯光、场景图、细节图和展示板。"],
  [Palette, "CMF/包装", "色彩材质工艺、包装系统、品牌视觉和版式整理。"],
];

function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.requestAnimationFrame) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      lerp: 0.09,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);
    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}

export default function PortfolioPage() {
  const [showIntro, setShowIntro] = useState(true);
  useSmoothScroll();

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main id="top" className="site-shell">
      {showIntro ? <OpeningAnimation /> : null}

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
          <motion.p className="section-kicker" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            Product Design Portfolio
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            曹佳航的清爽型产品设计作品集
          </motion.h1>
          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            整体改成互联网大厂和小红书式清爽作品集：白底、卡片、清晰信息层级、生活方式感和适合投递的中文项目叙事。
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
          >
            <a className="primary-action" href="#work">
              看精选作品
              <ArrowUpRight size={17} />
            </a>
            <a className="secondary-action" href="#gallery">
              看图片排版
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
            <img src="/assets/game-console-wide.jpg" alt="游戏手柄产品渲染" />
            <span>精选建模项目</span>
          </div>
          <div className="note-stack" aria-label="作品集优化方向">
            {["白底卡片", "图片统一比例", "中文项目叙事"].map((item) => (
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

      <section id="work" className="section-wrap" aria-labelledby="work-title">
        <SectionHeading
          kicker="Selected Works"
          title="6 个主项目按求职逻辑重排，入口更清楚。"
          text="每个卡片都统一图片比例、项目标签、能力点和下一步可补强内容，让作品看起来像完整 case study，而不是课程截图集合。"
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
          <strong>视觉方向</strong>
          <span>小红书式清爽卡片 + 大厂作品集信息层级</span>
        </div>
        <div>
          <LayoutGrid size={22} />
          <strong>图片策略</strong>
          <span>统一 4:3、3:2、16:9 画幅，避免大图乱裁和展板拥挤</span>
        </div>
      </section>

      <section id="process" className="section-wrap process-section" aria-labelledby="process-title">
        <SectionHeading
          kicker="Design Method"
          title="不是多放作品，而是把作品讲明白。"
          text="投递时最重要的是让面试官快速看懂你的能力：会筛选、会归纳、会建模、会渲染，也会把课程作品包装成完整项目。"
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
          title="每个项目补齐“为什么做、怎么做、还能怎么优化”。"
          text="这些文字后续可以直接迁移到 PDF 作品集和答辩 PPT，保证网站、PPT、简历里的项目表达一致。"
          id="story-title"
        />
        <div className="story-list">
          {projects.map((project) => (
            <article className="story-card" key={project.id}>
              <div className="story-image">
                <img src={project.detailImage} alt={`${project.title}详情图`} loading="lazy" />
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
          title="把图片整理成有节奏的视觉墙，而不是随机铺图。"
          text="主视觉用大图，辅助内容用卡片式小图，适合手机滑动浏览，也适合面试时快速投屏。"
          id="gallery-title"
        />
        <div className="gallery-grid">
          {gallery.map(([src, title, meta], index) => (
            <article className={index === 0 || index === 1 ? "gallery-card wide" : "gallery-card"} key={title}>
              <img src={src} alt={title} loading="lazy" />
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
          title="能力表达围绕产品设计岗位，不写成普通软件清单。"
          text="招聘方更关心你能不能把问题、形体、结构、材质和展示表达串起来。"
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
          <h2 id="contact-title">用于投递的线上作品集已经换成清爽版。</h2>
          <p>
            后续可以继续把这套顺序同步到 PDF 和 PPT：壁时作为重点项目，游戏手柄、耳机、散热风扇作为建模渲染支撑，果汁机补研究，包装项目补视觉系统。
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

function ProjectCard({ project, featured }) {
  return (
    <article className={featured ? "project-card featured" : "project-card"} id={project.id}>
      <a href="#story-title">
        <div className="project-image">
          <img src={project.image} alt={`${project.title}展示图`} loading={featured ? "eager" : "lazy"} />
          <span>{project.tone}</span>
        </div>
        <div className="project-body">
          <p className="project-number">{project.number} / {project.year}</p>
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

function OpeningAnimation() {
  return (
    <motion.div className="intro-overlay" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="intro-card"
        initial={{ y: 24, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.72 }}
      >
        <span>曹佳航作品集</span>
        <strong>清爽版正在打开</strong>
        <p>白底卡片 / 产品叙事 / 图片重排</p>
      </motion.div>
      <motion.div className="intro-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5 }} />
    </motion.div>
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
