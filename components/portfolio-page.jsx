"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Box,
  BriefcaseBusiness,
  Layers3,
  Mail,
  MoveRight,
  PenTool,
  Phone,
  Ruler,
  Sparkles,
} from "lucide-react";
import HeroCanvas from "./hero-canvas";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "walltime",
    title: "壁时",
    cn: "人工智能时间桌面摆件 / 毕业设计",
    type: "毕业设计 / 智能产品",
    year: "2026",
    image: "/assets/project-boards/walltime-board.jpg",
    secondary: "/assets/walltime-detail.png",
    focusImage: "/assets/project-boards/walltime-board.jpg",
    summary:
      "以玉璧、节气、漆金质感和低打扰交互为核心，将时间管理转化为一个有仪式感的桌面智能产品。",
    tags: ["智能陪伴", "色彩材质工艺", "交互", "产品系统"],
    caseNarrative: {
      challenge: "让时间管理产品摆脱工具感，变成能长期放在桌面上的智能陪伴器物。",
      approach: "用玉璧环形、二十四节气、中心屏幕和低打扰提醒层建立产品语义与交互秩序。",
      proof: "证明产品定义、造型语义、色彩材质工艺、界面信息层级和整套毕业设计叙事能力。",
      next: "后续可补实体样机视频、灯光动态、App 联动界面和包装开箱流程，形成完整商业展示。",
    },
    deliverables: ["用户情境", "CMF", "结构草图", "产品渲染", "过程板"],
  },
  {
    id: "modeling",
    title: "工业建模合集",
    cn: "犀牛建模 / 产品渲染",
    type: "建模 / 可视化",
    year: "2025-2026",
    image: "/assets/project-boards/modeling-board.jpg",
    focusImage: "/assets/project-boards/modeling-board.jpg",
    summary:
      "精选消费电子、小家电、结构拆解和产品形态建模内容，证明曲面控制、比例把握和渲染表达能力。",
    tags: ["犀牛建模", "产品渲染", "爆炸图", "曲面建模"],
    caseNarrative: {
      challenge: "把分散的建模练习整理成能证明基本功的作品，而不是只展示软件截图。",
      approach: "按曲面控制、硬件细节、结构拆解和渲染表达分类，统一成同一套展示板语言。",
      proof: "证明犀牛建模、比例控制、产品拆解理解、KeyShot 灯光和材质表现能力。",
      next: "后续可补线框图、建模步骤、零件命名和爆炸图动效，让建模能力更可验证。",
    },
    deliverables: ["犀牛建模", "产品渲染", "爆炸图", "细节节点"],
  },
  {
    id: "cooling",
    title: "手持散热风扇",
    cn: "手机散热器产品渲染",
    type: "产品渲染",
    year: "2026",
    image: "/assets/project-boards/cooling-board.jpg",
    focusImage: "/assets/project-boards/cooling-board.jpg",
    summary:
      "围绕夹持结构、出风层级、显示细节和产品质感，呈现一个小型数码配件的渲染与细节表达。",
    tags: ["产品渲染", "硬件配件", "细节设计"],
    caseNarrative: {
      challenge: "小型数码配件容易显得普通，需要通过结构细节和材质层次体现设计判断。",
      approach: "突出夹持方式、出风口层级、显示屏、按键和红黑对比材质，让产品功能一眼可读。",
      proof: "证明消费电子配件的细节控制、渲染质感、局部结构表达和产品图拍摄意识。",
      next: "后续可补尺寸约束、手机夹持场景、散热路径说明和核心零件拆解图。",
    },
    deliverables: ["产品渲染", "功能细节", "材质表现", "使用场景"],
  },
  {
    id: "pill",
    title: "便携式磁吸药盒",
    cn: "产品改良 / 色彩材质工艺 / 结构方案",
    type: "产品改良",
    year: "2025",
    image: "/assets/project-boards/pill-board.jpg",
    secondary: "/assets/pill-box-open.jpg",
    focusImage: "/assets/project-boards/pill-board.jpg",
    summary:
      "从日常携带和分区收纳出发，探索磁吸开启、独立药格、柔和配色材质与安全使用场景。",
    tags: ["使用场景", "结构", "色彩材质工艺"],
    caseNarrative: {
      challenge: "便携药盒要同时解决携带、分区、开启、安全和日常情绪感，不能只做收纳盒外观。",
      approach: "通过磁吸开合、独立药格、低饱和紫色、圆角结构和场景板来强调易用与亲和感。",
      proof: "证明用户痛点整理、结构改良、CMF 方案、使用流程和展示板排版能力。",
      next: "后续可补手部尺寸、人群访谈、开启力测试、药格容量和卫生清洁方案。",
    },
    deliverables: ["痛点分析", "结构方案", "CMF", "使用流程"],
  },
  {
    id: "juicer",
    title: "便携式果汁机定义",
    cn: "用户研究与产品建模",
    type: "研究 / 产品定义",
    year: "2025",
    image: "/assets/project-boards/juicer-board.jpg",
    focusImage: "/assets/project-boards/juicer-board.jpg",
    summary:
      "将家庭、办公、户外、辅食和车载等使用场景整理成产品定位、尺寸推敲和形态建模方案。",
    tags: ["用户研究", "产品定义", "样机"],
    caseNarrative: {
      challenge: "便携式果汁机项目需要从多个生活场景中找到明确定位，避免只变成外观练习。",
      approach: "先拆分家庭、办公、户外、辅食和车载场景，再推导容量、握持、清洗和形态比例。",
      proof: "证明用户研究、场景归纳、产品定义、尺寸推敲和从调研到建模的转化能力。",
      next: "后续可补竞品矩阵、用户旅程、关键尺寸、清洗动线和杯体结构爆炸图。",
    },
    deliverables: ["用户研究", "场景定义", "尺寸推敲", "产品建模"],
  },
  {
    id: "packaging",
    title: "涪陵榨菜包装",
    cn: "包装设计 / 品牌视觉系统",
    type: "包装 / 视觉系统",
    year: "2026",
    image: "/assets/project-boards/packaging-board-clean.jpg",
    focusImage: "/assets/project-boards/packaging-board-clean.jpg",
    summary:
      "以地域插画、货架识别、系列层级和现代食品品牌感为重点，完成传统食品包装的视觉更新。",
    tags: ["包装", "插画", "品牌系统"],
    caseNarrative: {
      challenge: "传统食品包装需要兼顾地域文化、货架识别和年轻化表达，不能只做单张包装图。",
      approach: "提取涪陵地域元素、口味色彩、字体层级和系列包装结构，形成统一品牌视觉系统。",
      proof: "证明品牌定位、视觉层级、插画延展、包装系列化和商业展示板组织能力。",
      next: "后续可补货架模拟、包装刀版、材质工艺、线上详情页和礼盒延展方案。",
    },
    deliverables: ["品牌定位", "包装系统", "插画元素", "系列延展"],
  },
];

const caseLabels = {
  challenge: "设计问题",
  approach: "解决方法",
  proof: "能力证明",
  next: "后续优化",
};

const visualWorks = [
  {
    src: "/assets/project-boards/visual-board.jpg",
    title: "色彩材质工艺与版式",
    meta: "CMF / 海报 / 品牌延展",
  },
  {
    src: "/assets/project-boards/chair-board.jpg",
    title: "人体工学座椅",
    meta: "人机尺寸 / 使用姿态",
  },
  {
    src: "/assets/walltime-process.jpg",
    title: "壁时过程页",
    meta: "过程叙事 / 结构草图",
  },
  {
    src: "/assets/project-boards/pill-board.jpg",
    title: "磁吸药盒",
    meta: "结构改良 / 使用场景",
  },
];

const capabilities = [
  {
    icon: Ruler,
    title: "工业产品设计",
    text: "产品定义、形态推导、人机尺寸、结构逻辑与展示板表达。",
  },
  {
    icon: Box,
    title: "三维建模",
    text: "犀牛硬表面建模、组件拆解、比例控制、细节推敲与爆炸图表达。",
  },
  {
    icon: Sparkles,
    title: "产品可视化",
    text: "产品渲染、色彩材质工艺表达、产品场景、灯光布置与作品集叙事。",
  },
  {
    icon: PenTool,
    title: "品牌与包装",
    text: "包装层级、品牌延展、产品海报、版式系统与汇报视觉规范。",
  },
];

const nav = [
  { label: "作品", href: "#work" },
  { label: "壁时", href: "#walltime" },
  { label: "能力", href: "#capability" },
  { label: "关于", href: "#about" },
  { label: "联系", href: "#contact" },
];

const contact = {
  phone: "13333384178",
  email: "3600376954@qq.com",
};

const walltimeSteps = [
  {
    step: "01",
    title: "用户情境",
    text: "把时间焦虑、桌面陪伴和学习工作提醒放在同一个场景里，目标不是制造强提醒，而是让时间管理更柔和、更有仪式感。",
  },
  {
    step: "02",
    title: "造型语义",
    text: "以玉璧的环形秩序作为主视觉，用中心屏幕承载时间和节气信息，外圈负责情绪与文化识别，形成强记忆点。",
  },
  {
    step: "03",
    title: "交互层级",
    text: "把信息分成时间、节气、提醒和陪伴四层，控制亮度、信息密度与显示节奏，避免桌面产品过度打扰。",
  },
  {
    step: "04",
    title: "色彩材质工艺",
    text: "黑金漆面、透光细节、金属边界和深色底座共同建立产品高级感，同时服务于东方时间器物的气质表达。",
  },
];

const proofPoints = [
  ["产品定义", "从用户场景、功能边界、交互层级到产品气质形成完整闭环。"],
  ["建模渲染", "用正视图、细节图、过程图和展示板证明形体控制与可视化能力。"],
  ["作品集叙事", "把毕业设计从单张效果图扩展成可面试讲述的核心项目。"],
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

function useLenisAndGsap() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      lerp: 0.09,
      smoothWheel: true,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const animated = gsap.utils.toArray("[data-depth]");
    animated.forEach((node) => {
      gsap.to(node, {
        yPercent: Number(node.dataset.depth || 8),
        ease: "none",
        scrollTrigger: {
          trigger: node,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}

export default function PortfolioPage() {
  useLenisAndGsap();
  const [activeProject, setActiveProject] = useState(projects[0]);
  const { scrollYProgress } = useScroll();
  const heroLift = useTransform(scrollYProgress, [0, 0.28], [0, -72]);
  const heroFade = useTransform(scrollYProgress, [0, 0.24], [1, 0.38]);
  const featured = useMemo(() => projects.slice(0, 5), []);

  return (
    <div className="min-h-screen overflow-hidden bg-carbon text-paper">
      <OpeningSequence />
      <header className="fixed inset-x-0 top-0 z-50 grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-white/10 bg-carbon/80 px-5 backdrop-blur-xl md:px-14">
        <a className="grid h-11 w-11 place-items-center border border-white/15 text-xs font-semibold" href="#top" aria-label="曹佳航作品集首页">
          曹
        </a>
        <nav className="hidden justify-center gap-7 text-sm text-paper/70 md:flex" aria-label="主导航">
          {nav.map((item) => (
            <a className="transition hover:text-copper" key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="grid h-11 w-11 place-items-center border border-white/15 text-paper/75 transition hover:text-copper" href={`mailto:${contact.email}`} aria-label="发送邮件给曹佳航">
          <Mail size={18} />
        </a>
      </header>

      <main id="top">
        <section className="hero-grid relative grid min-h-[96vh] items-center gap-12 overflow-hidden px-5 pb-52 pt-32 md:px-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-80" aria-hidden="true">
            <HeroCanvas />
          </div>
          <motion.div className="relative z-10 max-w-[780px]" style={{ opacity: heroFade }}>
            <p className="eyebrow">工业产品设计师</p>
            <h1 className="max-w-[780px] text-[clamp(4rem,11vw,10.8rem)] font-medium leading-[0.88] text-paper">曹佳航</h1>
            <p className="mt-8 max-w-[590px] text-[clamp(1.05rem,1.55vw,1.35rem)] leading-relaxed text-paper/70">
              一套精选产品设计作品集，聚焦智能产品、三维建模、色彩材质工艺、包装设计与产品可视化。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button primary" href="#work">
                精选项目
                <MoveRight size={18} />
              </a>
              <a className="button ghost" href="#walltime">
                查看壁时案例
                <ArrowUpRight size={17} />
              </a>
              <a className="button ghost" href="#contact">
                获取联系方式
                <Phone size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div className="relative z-10" style={{ y: heroLift }}>
            <div className="relative min-h-[280px] overflow-hidden border border-white/15 bg-graphite/88 shadow-soft backdrop-blur-[2px] md:min-h-[540px]">
              <img
                className="absolute inset-x-[8%] bottom-[5%] mx-auto max-h-[78%] w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                src="/assets/walltime-front.png"
                alt="壁时人工智能桌面时间摆件正面渲染图"
              />
            </div>
            <div className="absolute bottom-6 right-6 hidden w-[min(330px,calc(100%-48px))] border border-white/15 bg-carbon/75 p-4 backdrop-blur-xl md:block">
              <span className="block text-xs text-copper">重点项目</span>
              <strong className="mt-2 block text-sm leading-snug text-paper">壁时 · 人工智能时间桌面摆件</strong>
            </div>
          </motion.div>

          <div className="absolute inset-x-5 bottom-6 hidden border-t border-white/15 md:inset-x-14 md:grid md:grid-cols-5">
            {featured.map((project) => (
              <a className="min-h-[64px] border-r border-white/10 pt-3 text-sm" key={project.id} href="#work">
                <span className="block text-xs text-paper/45">{project.year}</span>
                <strong className="mt-1 block max-w-[170px] leading-tight text-paper/80">{project.title}</strong>
              </a>
            ))}
          </div>
        </section>

        <section id="work" className="section-wrap" aria-labelledby="work-title">
          <SectionTitle
            id="work-title"
            kicker="精选项目"
            title="精选六个能证明能力的项目，而不是课程作业合集。"
            text="网站保留最有求职价值的内容：壁时作为核心项目，建模与渲染证明基本功，研究、包装和视觉作品补齐产品设计能力面。"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                className="project-card group border border-white/15 bg-graphite/72 p-3"
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.18) }}
              >
                <a href={project.id === "walltime" ? "#walltime" : "#project-focus"}>
                  <div className="project-media relative overflow-hidden bg-carbon">
                    <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" src={project.image} alt={`${project.title} 项目预览`} />
                    <span className="absolute left-4 top-4 border border-white/15 bg-carbon/75 px-2.5 py-1 text-xs text-paper/70 backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between gap-4 text-xs text-paper/45">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-3 text-[clamp(1.25rem,1.65vw,1.75rem)] font-medium text-paper">{project.title}</h3>
                  <p className="mt-2 text-paper/55">{project.cn}</p>
                  <p className="project-summary mt-4 text-sm leading-relaxed text-paper/55">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.deliverables.slice(0, 3).map((item) => (
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-paper/50" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-wrap bg-paper/[0.028]" aria-labelledby="project-packaging-title">
          <SectionTitle
            id="project-packaging-title"
            kicker="作品完善"
            title="六个项目都补上能被面试官追问的设计逻辑。"
            text="每个作品不只展示结果图，而是明确它解决什么问题、用了什么方法、能证明什么能力，以及后续还能补哪些材料。"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article className="packaging-card border border-white/15 bg-graphite/70 p-5" key={project.id}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs text-copper">{String(index + 1).padStart(2, "0")} / {project.type}</span>
                    <h3 className="mt-3 text-2xl font-medium text-paper">{project.title}</h3>
                  </div>
                  <span className="text-xs text-paper/35">{project.year}</span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-paper/62">{project.caseNarrative.proof}</p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.deliverables.map((item) => (
                    <span className="border border-white/10 bg-carbon/40 px-3 py-2 text-xs text-paper/58" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="walltime" className="section-wrap bg-paper/[0.035]" aria-labelledby="walltime-title">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="top-28 self-start lg:sticky">
              <p className="eyebrow">毕业设计 / 核心案例</p>
              <h2 id="walltime-title" className="display-title">壁时：把时间管理转化为有东方气质的桌面智能产品。</h2>
              <p className="mt-7 max-w-[620px] text-lg leading-relaxed text-paper/68">
                以玉璧环形、漆金色彩材质工艺、二十四节气模块和低打扰智能陪伴层为核心，让毕业设计成为面试时最有记忆点的主项目。
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["25", "展示页"],
                  ["24", "节气模块"],
                  ["智能", "陪伴层"],
                ].map(([value, label]) => (
                  <div className="border-t border-white/15 pt-4" key={label}>
                    <dt className="text-[clamp(1.8rem,3vw,3rem)] leading-none text-paper">{value}</dt>
                    <dd className="mt-2 text-xs text-paper/45">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid gap-5">
              <img data-depth="-6" className="border border-white/15 bg-graphite" src="/assets/walltime-detail.png" alt="壁时细节渲染图" />
              <img data-depth="5" className="border border-white/15 bg-graphite" src="/assets/walltime-process.jpg" alt="壁时设计过程展示图" />
            </div>
          </div>
        </section>

        <section className="section-wrap border-y border-white/10 bg-carbon/55" aria-labelledby="case-depth-title">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="top-28 self-start lg:sticky">
              <p className="eyebrow">案例深度</p>
              <h2 id="case-depth-title" className="display-title">把壁时讲成一个完整产品，而不是一张漂亮渲染图。</h2>
              <p className="mt-7 max-w-[620px] text-lg leading-relaxed text-paper/68">
                面试官看的不是单独效果图，而是你如何发现问题、定义机会、组织功能、控制造型和完成视觉表达。这里把壁时拆成更容易讲清楚的设计链路。
              </p>
              <div className="mt-8 grid gap-3">
                {proofPoints.map(([title, text]) => (
                  <div className="border-l border-copper/55 bg-paper/[0.045] p-4" key={title}>
                    <h3 className="text-base font-medium text-paper">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/58">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5">
              <div className="case-hero overflow-hidden border border-white/15 bg-graphite/80 p-3">
                <img className="h-full w-full object-cover" src="/assets/project-boards/walltime-board.jpg" alt="壁时核心项目展示板" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {walltimeSteps.map((item) => (
                  <article className="case-step border border-white/15 bg-graphite/75 p-5" key={item.step}>
                    <span className="text-sm font-semibold text-copper">{item.step}</span>
                    <h3 className="mt-8 text-2xl font-medium text-paper">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-paper/62">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="project-focus" className="section-wrap" aria-labelledby="focus-title">
          <SectionTitle
            id="focus-title"
            kicker="项目体系"
            title="不同项目角色，统一成一套高级视觉系统。"
            text="作品集不做单一模板重复，而是把智能产品、硬表面建模、数码配件、产品定义和包装设计组织成清晰的能力矩阵。"
          />
          <div className="grid gap-5 lg:grid-cols-[330px_1fr]">
            <div className="grid content-start gap-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  className={`min-h-[76px] border p-4 text-left transition ${activeProject.id === project.id ? "border-copper/70 bg-paper/[0.08] text-paper" : "border-white/15 bg-graphite/80 text-paper/75"}`}
                  type="button"
                  onClick={() => setActiveProject(project)}
                >
                  <span className="mb-2 block text-xs text-paper/45">{project.type}</span>
                  {project.title}
                </button>
              ))}
            </div>
            <motion.article
              className="grid min-h-[520px] items-center gap-8 border border-white/15 bg-graphite/80 p-5 md:grid-cols-[1.16fr_0.84fr] md:p-8"
              key={activeProject.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-carbon">
                <img className="h-full w-full object-cover" src={activeProject.focusImage || activeProject.secondary || activeProject.image} alt={`${activeProject.title} 选中项目视图`} />
              </div>
              <div>
                <p className="eyebrow">{activeProject.year}</p>
                <h3 className="text-[clamp(2rem,4vw,4.2rem)] font-medium leading-none text-paper">{activeProject.title}</h3>
                <p className="mt-5 leading-relaxed text-paper/68">{activeProject.summary}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-paper/70" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="case-detail-grid mt-8 grid gap-3 sm:grid-cols-2">
                  {Object.entries(activeProject.caseNarrative).map(([key, value]) => (
                    <div className="case-note border border-white/12 bg-carbon/45 p-4" key={key}>
                      <span className="text-xs text-copper">{caseLabels[key]}</span>
                      <p className="mt-3 text-sm leading-relaxed text-paper/62">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <p className="text-xs text-paper/42">建议展示材料</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.deliverables.map((item) => (
                      <span className="border border-white/12 bg-paper/[0.045] px-3 py-1.5 text-xs text-paper/62" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="section-wrap" aria-labelledby="visual-title">
          <SectionTitle
            id="visual-title"
            kicker="精选视觉"
            title="用少量视觉作品补充能力，不把网站做成杂图相册。"
            text="这一部分只作为辅助展示，用来补充色彩材质工艺、人体工学、海报版式和过程板表达，避免作品集变成没有重点的图片堆叠。"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {visualWorks.map((item, index) => (
              <article className="group border border-white/15 bg-graphite/75 p-3" key={item.src}>
                <div className="project-media overflow-hidden bg-carbon">
                  <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" src={item.src} alt={`${item.title} 预览图`} />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-medium text-paper">{item.title}</h3>
                    <p className="mt-1 text-xs text-paper/45">{item.meta}</p>
                  </div>
                  <span className="text-xs text-copper">{String(index + 1).padStart(2, "0")}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="capability" className="section-wrap" aria-labelledby="capability-title">
          <SectionTitle
            id="capability-title"
            kicker="能力结构"
            title="面向产品设计岗位的作品集，而不是课程归档。"
            text="页面重点强调企业会看的能力组合：产品思维、形态控制、建模基本功、视觉沟通和清晰汇报。"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article className="min-h-[260px] border border-white/15 bg-graphite/75 p-6" key={title}>
                <Icon className="text-copper" size={24} />
                <h3 className="mt-14 text-xl font-medium text-paper">{title}</h3>
                <p className="mt-4 leading-relaxed text-paper/65">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-wrap grid gap-10 border-t border-white/15 lg:grid-cols-[0.9fr_0.78fr]" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">关于</p>
            <h2 id="about-title" className="display-title">专注智能产品、消费硬件和作品集叙事的产品设计学生。</h2>
          </div>
          <div className="self-end">
            <p className="text-lg leading-relaxed text-paper/68">
              当前作品集方向面向消费电子、智能家居、家电、出行和产品设计团队，重点展示形态审美、结构理解和落地表达能力。
            </p>
            <div className="mt-7 grid gap-3">
              <div className="grid grid-cols-[24px_1fr] gap-3 border-t border-white/15 pt-4 text-paper/70">
                <BriefcaseBusiness className="text-sage" size={20} />
                <span>适用于工业产品设计实习、校招和初级产品设计岗位投递。</span>
              </div>
              <div className="grid grid-cols-[24px_1fr] gap-3 border-t border-white/15 pt-4 text-paper/70">
                <Layers3 className="text-sage" size={20} />
                <span>工具能力：犀牛建模、产品渲染、图像处理、矢量绘图、界面设计，以及网页作品集搭建。</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section min-h-[62vh] px-5 py-24 md:px-14 md:py-36" aria-labelledby="contact-title">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.76fr]">
            <div>
              <p className="eyebrow">联系</p>
              <h2 id="contact-title" className="max-w-[1080px] text-[clamp(2.4rem,7vw,6.6rem)] font-medium leading-none text-paper">
                可用于作品集评审、面试沟通和项目介绍。
              </h2>
              <p className="mt-7 max-w-[620px] text-lg leading-relaxed text-paper/66">
                当前作品集面向工业产品设计、消费硬件、智能产品和产品可视化方向，可直接用于求职投递与面试沟通。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button primary" href={`mailto:${contact.email}`}>
                  发送邮件
                  <Mail size={18} />
                </a>
                <a className="button ghost" href={`tel:${contact.phone}`}>
                  电话联系
                  <Phone size={17} />
                </a>
              </div>
            </div>
            <div className="grid self-end gap-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a className="contact-card group border border-white/15 bg-carbon/62 p-5 backdrop-blur-xl" href={href} key={label}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-11 w-11 place-items-center border border-white/15 text-copper">
                      <Icon size={18} />
                    </div>
                    <ArrowUpRight className="text-paper/35 transition group-hover:text-copper" size={18} />
                  </div>
                  <p className="mt-8 text-sm text-paper/45">{label}</p>
                  <strong className="mt-2 block break-all text-xl font-medium text-paper">{value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function OpeningSequence() {
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      "matchMedia" in window &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exitTimer = window.setTimeout(() => setPhase("exiting"), prefersReducedMotion ? 260 : 2100);
    const removeTimer = window.setTimeout(() => setPhase("hidden"), prefersReducedMotion ? 520 : 2900);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (phase === "hidden") {
      return undefined;
    }

    const original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = original;
    };
  }, [phase]);

  if (phase === "hidden") {
    return null;
  }

  return (
    <motion.div
      className="intro-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exiting" ? 0 : 1 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <motion.div
        className="intro-product"
        initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/assets/walltime-front.png" alt="" />
      </motion.div>
      <div className="intro-copy">
        <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }}>
          曹佳航
        </motion.span>
        <motion.strong initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.34 }}>
          工业产品设计作品集
        </motion.strong>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.62, delay: 0.54 }}>
          智能产品 / 三维建模 / 色彩材质工艺 / 产品可视化
        </motion.p>
      </div>
      <motion.div className="intro-progress" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2.05, delay: 0.18, ease: "easeInOut" }} />
    </motion.div>
  );
}

function SectionTitle({ id, kicker, title, text }) {
  return (
    <div className="mb-12 grid gap-7 lg:grid-cols-[0.92fr_0.72fr] lg:gap-24">
      <div>
        <p className="eyebrow">{kicker}</p>
        <h2 className="display-title" id={id}>
          {title}
        </h2>
      </div>
      <p className="self-end text-lg leading-relaxed text-paper/68">{text}</p>
    </div>
  );
}

export { projects };
