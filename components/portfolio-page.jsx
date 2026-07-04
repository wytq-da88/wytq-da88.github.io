"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Box,
  Mail,
  Monitor,
  MoveRight,
  PenTool,
  Phone,
  Ruler,
  Sparkles,
  Smartphone,
  Tablet,
} from "lucide-react";
import HeroCanvas from "./hero-canvas";

gsap.registerPlugin(ScrollTrigger);

const contact = {
  phone: "13333384178",
  email: "3600376954@qq.com",
};

const nav = [
  { label: "目录", href: "#catalog" },
  { label: "作品", href: "#work" },
  { label: "过程", href: "#process" },
  { label: "壁时", href: "#walltime" },
  { label: "3D", href: "#three" },
  { label: "联系", href: "#contact" },
];

const heroStats = [
  ["06", "核心项目"],
  ["3D", "互动展示"],
  ["PDF", "作品集叙事"],
  ["全端", "响应式适配"],
];

const projects = [
  {
    id: "walltime",
    no: "01",
    title: "壁时",
    subtitle: "东方情绪疗愈桌面伴侣",
    category: "毕业设计 / 智能产品 / AI 桌面摆件",
    year: "2026",
    image: "/assets/project-boards/walltime-board.jpg",
    detailImage: "/assets/walltime-detail.png",
    summary:
      "以玉璧、节气、漆金质感和低打扰交互为核心，把时间管理转译成一个有仪式感的桌面智能产品。",
    tags: ["东方未来感", "智能陪伴", "CMF", "交互秩序"],
    story: {
      source: "从东方时间观、桌面陪伴和学习工作焦虑切入，寻找“提醒”之外更柔和的时间管理方式。",
      refine: "提取玉璧环形、节气秩序、金属边界和透光屏幕，建立产品语义与情绪识别点。",
      process: "用场景、草图、结构层级、屏幕信息和 CMF 推导，让概念从器物意象落到可展示产品。",
      render: "最终形成黑金漆面、中心屏幕、环形光晕和桌面底座的完整视觉系统。",
    },
  },
  {
    id: "modeling",
    no: "02",
    title: "工业建模合集",
    subtitle: "Rhino + KeyShot 产品可视化",
    category: "建模 / 渲染 / 爆炸图",
    year: "2025-2026",
    image: "/assets/project-boards/modeling-board.jpg",
    summary:
      "把分散的犀牛建模、硬表面产品、组件拆解和 KeyShot 渲染整理成可验证的建模能力展示。",
    tags: ["犀牛建模", "硬表面", "爆炸图", "材质灯光"],
    story: {
      source: "从课程建模练习里筛选结构完整、比例清楚、渲染质量高的作品，避免堆截图。",
      refine: "按曲面控制、硬件细节、结构拆解和产品摄影四类能力重新组织。",
      process: "补充线框、零件关系、建模步骤和细节节点，让面试官能看懂建模逻辑。",
      render: "统一 16:10 展示板和暗色背景，强化产品形体和材料边界。",
    },
  },
  {
    id: "cooling",
    no: "03",
    title: "手持散热风扇",
    subtitle: "数码配件产品渲染",
    category: "产品渲染 / 结构细节",
    year: "2026",
    image: "/assets/project-boards/cooling-board.jpg",
    summary:
      "围绕夹持结构、出风层级、屏幕细节和红黑材质对比，呈现小型数码配件的产品表达。",
    tags: ["数码配件", "细节节点", "KeyShot", "场景渲染"],
    story: {
      source: "从手机游戏、长时间握持和设备散热场景出发，定位为桌面与移动两用配件。",
      refine: "用夹持方式、风道层级、屏幕反馈和按键位置表达产品功能。",
      process: "补充功能路径、局部结构、尺寸约束和使用场景，增强方案可信度。",
      render: "通过红黑对比、硬边倒角和局部高光强化科技配件质感。",
    },
  },
  {
    id: "pill",
    no: "04",
    title: "便携式磁吸药盒",
    subtitle: "日常健康产品改良",
    category: "产品改良 / CMF / 使用流程",
    year: "2025",
    image: "/assets/project-boards/pill-board.jpg",
    detailImage: "/assets/pill-box-open.jpg",
    summary:
      "从携带、分区、开合、安全和情绪化体验出发，探索磁吸药盒的结构与亲和色彩。",
    tags: ["用户痛点", "磁吸结构", "CMF", "便携场景"],
    story: {
      source: "针对常见药盒不易携带、分区混乱、开合体验弱和视觉冰冷的问题做改良。",
      refine: "将磁吸开合、独立药格、低饱和紫色和圆角比例组合成亲和的日用品语言。",
      process: "通过场景、结构、CMF 和使用流程把单一外观练习转成完整产品改良项目。",
      render: "用闭合、打开、局部细节和生活化场景图说明产品实际使用方式。",
    },
  },
  {
    id: "juicer",
    no: "05",
    title: "便携式果汁机",
    subtitle: "用户研究与产品定义",
    category: "研究 / 产品定义 / 建模",
    year: "2025",
    image: "/assets/project-boards/juicer-board.jpg",
    summary:
      "从家庭、办公、户外、辅食和车载等场景梳理产品定位，把调研转化为容量、握持和清洗方案。",
    tags: ["用户研究", "场景定义", "尺寸推导", "产品建模"],
    story: {
      source: "把多场景饮用需求拆成家庭、办公、户外、辅食、车载五类使用路径。",
      refine: "提炼便携、易清洗、握持稳定和安全启动四个核心机会点。",
      process: "用竞品、尺寸、草图和模型推导产品比例，避免只做外观造型。",
      render: "以过程板和模型图展示从研究到形体的转译能力。",
    },
  },
  {
    id: "packaging",
    no: "06",
    title: "涪陵榨菜包装",
    subtitle: "传统食品品牌视觉更新",
    category: "包装设计 / 品牌视觉系统",
    year: "2026",
    image: "/assets/project-boards/packaging-board-clean.jpg",
    summary:
      "以地域插画、货架识别、系列层级和现代食品品牌感为重点，完成传统食品包装的视觉更新。",
    tags: ["包装系统", "地域插画", "货架识别", "品牌延展"],
    story: {
      source: "从地域文化、消费场景和货架竞争出发，重塑传统食品年轻化表达。",
      refine: "提取涪陵地域元素、口味色彩、字体层级和插画系统作为包装识别核心。",
      process: "把单张包装扩展成系列化、货架化和详情页可延展的品牌视觉方案。",
      render: "用清晰展示板呈现主视觉、系列包装和商业应用感。",
    },
  },
];

const processSteps = [
  {
    step: "01",
    title: "创意来源",
    text: "先说明灵感从哪里来：文化意象、用户场景、竞品问题或生活观察，让作品不是凭空造型。",
  },
  {
    step: "02",
    title: "设计提炼",
    text: "把意象转成可执行的造型关键词、功能机会点、结构关系和 CMF 方向。",
  },
  {
    step: "03",
    title: "草图推导",
    text: "展示形体比例、交互路径、拆件关系和细节节点，让过程能被面试官追问。",
  },
  {
    step: "04",
    title: "建模验证",
    text: "用 Rhino、KeyShot 和必要的爆炸图说明建模能力、零件逻辑和材质控制。",
  },
  {
    step: "05",
    title: "场景渲染",
    text: "用产品环境图、使用图和细节图证明方案可以被理解、被使用、被展示。",
  },
  {
    step: "06",
    title: "项目总结",
    text: "最后收束为设计价值、能力证明和后续可优化方向，避免项目只停留在好看。",
  },
];

const walltimeDeepDive = [
  ["项目背景", "桌面时间管理产品常常偏工具化，用户会抗拒高频提醒。壁时把提醒转成柔和陪伴。"],
  ["产品语义", "玉璧环形对应东方时间秩序，中心屏幕承载节气、时间和轻提醒信息。"],
  ["CMF 方向", "黑金漆面、金属边界、透光屏幕和深色底座共同建立高级器物感。"],
  ["交互策略", "信息分层为时间、节气、提醒、陪伴四层，控制亮度和节奏，减少桌面打扰。"],
];

const visualWorks = [
  {
    src: "/assets/project-boards/visual-board.jpg",
    title: "CMF 与版式精选",
    meta: "色彩材质工艺 / 海报 / 品牌延展",
  },
  {
    src: "/assets/project-boards/chair-board.jpg",
    title: "人体工学座椅",
    meta: "人机尺寸 / 使用姿态 / 结构表达",
  },
  {
    src: "/assets/walltime-process.jpg",
    title: "壁时过程页",
    meta: "过程叙事 / 结构草图 / 展板组织",
  },
  {
    src: "/assets/project-boards/pill-board.jpg",
    title: "磁吸药盒",
    meta: "产品改良 / 使用场景 / CMF",
  },
];

const responsivePreviews = [
  {
    icon: Smartphone,
    title: "手机浏览",
    src: "/assets/responsive/mobile-home.jpg",
    text: "首屏、项目卡和联系区改为单列阅读，按钮全宽排列，长标题在小屏上保持可读。",
  },
  {
    icon: Tablet,
    title: "平板浏览",
    src: "/assets/responsive/tablet-work.jpg",
    text: "项目墙和作品过程区使用两列节奏，适合横竖屏平板展示作品图和项目叙事。",
  },
  {
    icon: Monitor,
    title: "电脑浏览",
    src: "/assets/responsive/desktop-case.jpg",
    text: "桌面端保留大标题、大图和分栏案例结构，强化 Apple 产品页式的沉浸阅读。",
  },
];

const capabilities = [
  {
    icon: Ruler,
    title: "工业产品设计",
    text: "产品定义、形态推导、人机尺寸、结构逻辑与作品集展板表达。",
  },
  {
    icon: Box,
    title: "三维建模",
    text: "Rhino 硬表面建模、组件拆解、比例控制、细节推敲与爆炸图表达。",
  },
  {
    icon: Sparkles,
    title: "产品可视化",
    text: "KeyShot 渲染、CMF 表达、场景搭建、灯光布置与产品叙事。",
  },
  {
    icon: PenTool,
    title: "品牌与包装",
    text: "包装层级、品牌延展、视觉系统、产品海报与汇报版式规范。",
  },
];

const contactItems = [
  {
    icon: Phone,
    label: "电话",
    value: contact.phone,
    href: `tel:${contact.phone}`,
  },
  {
    icon: Mail,
    label: "邮箱",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
];

function useSmoothScrollReveal() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.12,
      smoothWheel: true,
      lerp: 0.08,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const animations = gsap.utils.toArray(".reveal").map((element) =>
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 44 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
          },
        },
      ),
    );

    return () => {
      cancelAnimationFrame(rafId);
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);
}

export default function PortfolioPage() {
  const [introVisible, setIntroVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  const heroShift = useTransform(scrollYProgress, [0, 0.28], [0, -110]);
  const heroFade = useTransform(scrollYProgress, [0, 0.22], [1, 0.25]);

  useSmoothScrollReveal();

  useEffect(() => {
    const timer = setTimeout(() => setIntroVisible(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-carbon text-paper">
      {introVisible ? <OpeningAnimation /> : null}

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-carbon/74 px-4 py-3 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4">
          <a className="grid h-11 w-11 place-items-center border border-white/15 text-xs font-semibold" href="#top" aria-label="曹佳航作品集首页">
            曹
          </a>
          <nav className="hidden justify-center gap-4 text-sm text-paper/70 sm:flex md:gap-7" aria-label="主导航">
            {nav.map((item) => (
              <a className="transition hover:text-copper" key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button ghost hidden sm:inline-flex" href="#contact">
            联系我
            <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <section className="hero-grid relative grid min-h-screen items-center gap-12 overflow-hidden px-5 pb-28 pt-32 md:px-14 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div className="relative z-10 max-w-[760px]" style={{ y: heroShift, opacity: heroFade }}>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Eastern Future Product Design
          </motion.p>
          <motion.h1
            className="display-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            东方未来感产品设计作品集
          </motion.h1>
          <motion.p
            className="mt-8 max-w-[620px] text-[clamp(1.02rem,1.55vw,1.35rem)] leading-relaxed text-paper/70"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
          >
            面向工业产品设计岗位，把壁时、产品建模、CMF、包装和用户研究重新包装成“创意来源 - 设计提炼 - 建模渲染 - 场景展示”的求职叙事。
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            <a className="button primary" href="#catalog">
              查看目录
              <MoveRight size={18} />
            </a>
            <a className="button ghost" href="#walltime">
              重点项目：壁时
            </a>
          </motion.div>
          <motion.div
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
          >
            {heroStats.map(([value, label]) => (
              <div className="stat-tile" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="hero-product-stage relative min-h-[470px] overflow-hidden lg:min-h-[680px]">
          <HeroCanvas />
          <div className="hero-product-copy">
            <span>WallTime</span>
            <strong>AI 桌面摆件 · 3D 互动展示</strong>
          </div>
          <div className="hero-orbit one" />
          <div className="hero-orbit two" />
        </div>
      </section>

      <section id="catalog" className="section-wrap catalog-section" aria-labelledby="catalog-title">
        <SectionTitle
          id="catalog-title"
          kicker="作品目录"
          title="像产品发布会一样，让每个项目先被快速理解。"
          text="参考作品集的目录逻辑，但不照搬内容：先建立清晰项目入口，再把每个项目拆成创意来源、设计提炼、过程和最终展示。"
        />
        <div className="catalog-grid">
          {projects.map((project) => (
            <a className="catalog-card reveal" href={`#${project.id}`} key={project.id}>
              <span>{project.no}</span>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <em>{project.category}</em>
            </a>
          ))}
        </div>
      </section>

      <section id="work" className="section-wrap" aria-labelledby="work-title">
        <SectionTitle
          id="work-title"
          kicker="Selected Projects"
          title="保留 6 个能证明能力的项目，而不是把所有作业堆上去。"
          text="项目卡统一比例、统一信息层级，先让招聘方看到你会做产品定义、建模渲染、CMF、包装和过程表达。"
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card reveal ${index === 0 ? "featured" : ""}`} id={project.id} key={project.id}>
              <a href="#project-focus" aria-label={`查看${project.title}项目详情`}>
                <div className="project-media overflow-hidden bg-graphite">
                  <img src={project.image} alt={`${project.title}项目展示板`} loading={index === 0 ? "eager" : "lazy"} />
                </div>
                <div className="p-5 md:p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-copper">{project.no} / {project.year}</p>
                      <h3 className="mt-2 text-[clamp(1.5rem,2.6vw,2.6rem)] font-medium leading-none">{project.title}</h3>
                      <p className="mt-2 text-sm text-paper/50">{project.subtitle}</p>
                    </div>
                    <ArrowUpRight className="mt-1 shrink-0 text-copper" size={20} />
                  </div>
                  <p className="project-summary text-sm leading-relaxed text-paper/64">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-paper/62" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section-wrap process-section" aria-labelledby="process-title">
        <SectionTitle
          id="process-title"
          kicker="Design Process"
          title="每个项目都按作品集逻辑补齐过程，不只放一张效果图。"
          text="这套结构直接服务求职面试：面试官能看到你怎么发现问题、怎么提炼设计、怎么建模验证、怎么输出最终方案。"
        />
        <div className="process-timeline">
          {processSteps.map((item) => (
            <article className="process-card reveal" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="walltime" className="section-wrap walltime-section" aria-labelledby="walltime-title">
        <div className="case-layout">
          <div className="case-copy reveal">
            <p className="eyebrow">Hero Case / 壁时</p>
            <h2 id="walltime-title" className="section-title">
              东方情绪疗愈桌面伴侣，把时间管理做成可以被感知的器物。
            </h2>
            <p className="mt-6 text-base leading-8 text-paper/68">
              这是网站的核心项目。它需要承担你的毕业设计、智能产品定义、东方文化转译、CMF 和交互叙事能力，因此页面用更长的滚动节奏呈现。
            </p>
            <div className="mt-8 grid gap-3">
              {walltimeDeepDive.map(([title, text]) => (
                <div className="case-note" key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="case-visual reveal">
            <img src="/assets/walltime-detail.png" alt="壁时产品细节展示" />
          </div>
        </div>
      </section>

      <section id="project-focus" className="section-wrap" aria-labelledby="focus-title">
        <SectionTitle
          id="focus-title"
          kicker="Project Story"
          title="六个项目都补上能被面试官追问的设计逻辑。"
          text="每个项目从创意来源、设计提炼、过程验证到最终呈现统一叙事，后续做 PDF 和 PPT 时可以直接复用。"
        />
        <div className="story-grid">
          {projects.map((project) => (
            <article className="story-card reveal" key={project.id}>
              <div className="story-card-head">
                <span>{project.no}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
              <div className="story-lines">
                {Object.entries(project.story).map(([key, value]) => (
                  <div key={key}>
                    <strong>{storyLabels[key]}</strong>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="three" className="section-wrap three-section" aria-labelledby="three-title">
        <div className="three-copy reveal">
          <p className="eyebrow">3D Interactive Display</p>
          <h2 id="three-title" className="section-title">
            3D互动展示不是装饰，而是证明产品设计能进入网页体验。
          </h2>
          <p>
            当前用 React Three Fiber / Drei 做壁时的抽象产品旋转展示。后续 Rhino、KeyShot 或 Blender 模型导出 `.glb` 后，可以替换为真实模型，加入材质切换、爆炸图和结构标注。
          </p>
        </div>
        <div className="three-stage reveal">
          <HeroCanvas />
          <div className="three-feature-list">
            {["360° 产品旋转", "CMF 材质切换", "爆炸图滚动动画"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="responsive" className="section-wrap responsive-section" aria-labelledby="responsive-title">
        <SectionTitle
          id="responsive-title"
          kicker="多设备适配"
          title="手机、平板、电脑打开都保持产品官网级阅读节奏。"
          text="页面按不同屏幕控制标题尺寸、项目网格、按钮宽度和图片比例，让作品集在投递链接、面试投屏和手机转发时都能稳定展示。"
        />
        <div className="device-grid">
          {responsivePreviews.map(({ icon: Icon, title, src, text }) => (
            <article className="device-card reveal" key={title}>
              <div className="device-card-head">
                <div className="device-icon">
                  <Icon size={19} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
              <div className="device-frame">
                <img src={src} alt={`${title}效果预览`} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap" aria-labelledby="visual-title">
        <SectionTitle
          id="visual-title"
          kicker="Visual Evidence"
          title="用精选视觉图证明建模、渲染、CMF 和版式能力。"
          text="这一组保留为网站视觉墙，后续 PDF/PPT 可继续筛选成 6-10 张强图。"
        />
        <div className="visual-grid">
          {visualWorks.map((work) => (
            <article className="visual-card reveal" key={work.title}>
              <img src={work.src} alt={work.title} loading="lazy" />
              <div>
                <h3>{work.title}</h3>
                <p>{work.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="capability" className="section-wrap" aria-labelledby="capability-title">
        <SectionTitle
          id="capability-title"
          kicker="Skills"
          title="能力表达围绕产品设计岗位，而不是软件清单。"
          text="软件只是工具，网站重点展示你如何完成产品定义、建模验证、材质表达和作品集叙事。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article className="reveal border border-white/10 bg-white/[0.035] p-6" key={title}>
              <Icon className="text-copper" size={26} />
              <h3 className="mt-7 text-xl font-medium">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-paper/62">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-wrap grid gap-10 border-t border-white/15 lg:grid-cols-[0.9fr_0.78fr]" aria-labelledby="about-title">
        <div className="reveal">
          <p className="eyebrow">About Me</p>
          <h2 id="about-title" className="section-title">
            曹佳航，产品设计专业学生，正在把课程作业升级成求职级作品集。
          </h2>
        </div>
        <div className="reveal text-base leading-8 text-paper/68">
          <p>
            目前作品方向集中在工业产品设计、智能产品、Rhino 建模、KeyShot 渲染、CMF、包装和 AI 辅助设计。网站先完成线上展示，后续可以继续导出求职 PDF 和可编辑 PPT。
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Rhino", "KeyShot", "CMF", "产品建模", "包装设计", "AI辅助设计"].map((item) => (
              <span className="border border-white/10 px-4 py-3 text-sm text-paper/70" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section min-h-[62vh] px-5 py-24 md:px-14 md:py-36" aria-labelledby="contact-title">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <div className="reveal">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">
              作品集已整理为可投递网页，下一步可以继续做 PDF 和答辩 PPT。
            </h2>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-paper/68">
              如果用于投递小米、华为、联想、比亚迪、理想、大疆、海尔、美的等产品设计岗位，建议继续补壁时实物视频、爆炸图、App 联动和包装开箱页。
            </p>
          </div>
          <div className="grid gap-4">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a className="contact-card reveal" href={href} key={label}>
                <Icon size={22} />
                <span>{label}</span>
                <strong>{value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const storyLabels = {
  source: "创意来源",
  refine: "设计提炼",
  process: "过程验证",
  render: "最终呈现",
};

function OpeningAnimation() {
  return (
    <motion.div className="intro-overlay" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="intro-product" initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.1 }}>
        <img src="/assets/walltime-front.png" alt="壁时产品开场展示" />
      </motion.div>
      <motion.div className="intro-copy" initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.85 }}>
        <span>曹佳航 · Product Design Portfolio</span>
        <strong>东方未来感</strong>
        <p>产品过程 / CMF / 3D 互动展示</p>
      </motion.div>
      <motion.div className="intro-progress" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2.35, ease: "easeInOut" }} />
    </motion.div>
  );
}

function SectionTitle({ id, kicker, title, text }) {
  return (
    <div className="reveal mb-12 max-w-[920px]">
      <p className="eyebrow">{kicker}</p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {text ? <p className="mt-5 max-w-[760px] text-base leading-8 text-paper/64">{text}</p> : null}
    </div>
  );
}
