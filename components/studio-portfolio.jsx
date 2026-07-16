"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDown,
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
  ["包装项目", "#packaging"],
  ["其他作品", "#works"],
  ["设计能力", "#capabilities"],
  ["联系", "#contact"],
];

const projects = [
  {
    number: "02",
    title: "壁时",
    subtitle: "AI 桌面情绪陪伴产品",
    meta: "智能产品 / CMF / 交互体验",
    description:
      "从东方时间意象与桌面陪伴场景出发，将柔和光效、情绪反馈与低打扰提醒融入日常器物。",
    image: "/assets/project-boards/walltime-board.jpg",
    detail: "/assets/optimized/walltime-detail-web.jpg",
    color: "coral",
  },
  {
    number: "03",
    title: "游戏手柄",
    subtitle: "消费电子建模与渲染",
    meta: "Rhino / KeyShot / 硬表面建模",
    description:
      "围绕握持比例、壳体曲面、按键布局与装配边界，建立清晰、可靠的消费电子产品形态。",
    image: "/assets/optimized/game-console-wide-web.jpg",
    detail: "/assets/optimized/game-console-front-web.jpg",
    color: "blue",
  },
  {
    number: "04",
    title: "无线蓝牙耳机",
    subtitle: "小型数码产品 CMF 表达",
    meta: "产品渲染 / CMF / 细节控制",
    description:
      "通过充电仓开合、耳机收纳与圆角细节，呈现小体量消费电子的精致感与生活方式气质。",
    image: "/assets/optimized/earbuds-open-web.jpg",
    detail: "/assets/earbuds-detail-web.jpg",
    color: "yellow",
  },
  {
    number: "05",
    title: "手机散热风扇",
    subtitle: "游戏场景数码配件",
    meta: "结构表达 / 产品渲染 / CMF",
    description:
      "以夹持结构、风道层级、状态屏和高对比材质，强化游戏外设的功能识别与速度感。",
    image: "/assets/project-boards/cooling-board.jpg",
    detail: "/assets/cooling-fan.jpg",
    color: "green",
  },
  {
    number: "06",
    title: "便携式果汁机",
    subtitle: "从使用场景到产品定义",
    meta: "用户研究 / 产品定义 / 建模",
    description:
      "从家庭、办公与户外饮用场景中提炼容量、握持、清洗和安全启动需求，并转化为完整产品方案。",
    image: "/assets/project-boards/juicer-board.jpg",
    detail: "/assets/juicer-process.jpg",
    color: "violet",
  },
];

const capabilities = [
  [ScanLine, "洞察与定义", "场景观察、用户需求、竞品拆解与设计机会点提炼。"],
  [Box, "三维建模", "Rhino 硬表面建模、曲面控制、比例推敲与结构表达。"],
  [CircleDot, "渲染表达", "KeyShot 材质、灯光、产品场景、细节视角与展示板。"],
  [Palette, "CMF 与视觉", "色彩材料工艺、包装系统、品牌识别与信息版式。"],
];

const marqueeItems = [
  "产品定义",
  "三维建模",
  "CMF",
  "包装设计",
  "KeyShot 渲染",
  "用户研究",
  "视觉叙事",
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
};

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.86,
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
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -78, duration: 1.05 });
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

export default function StudioPortfolio() {
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useSmoothScroll();

  useEffect(() => {
    const duration = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? 120 : 2200;
    const timer = window.setTimeout(() => setIntroVisible(false), duration);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main id="top" className="studio-site">
      <AnimatePresence>{introVisible ? <OpeningAnimation /> : null}</AnimatePresence>

      <header className="studio-header">
        <a className="studio-name" href="#top" aria-label="返回首页">
          <strong>曹佳航</strong>
          <span>产品设计</span>
        </a>

        <nav className={menuOpen ? "is-open" : ""} aria-label="主导航">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="studio-hero" aria-labelledby="hero-title">
        <motion.div className="hero-intro" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.75 }}>
          <p className="eyebrow">PRODUCT DESIGN PORTFOLIO · 2026</p>
          <h1 id="hero-title">
            从生活里观察，
            <span>为日常造物。</span>
          </h1>
          <p className="hero-description">
            我是曹佳航，关注智能桌面产品、消费电子、CMF 与包装视觉。作品从真实场景出发，在形态、功能与情绪之间建立清晰联系。
          </p>
          <div className="hero-links">
            <a className="dark-button" href="#packaging">
              查看重点项目 <ArrowDown size={16} />
            </a>
            <a className="text-link" href={`mailto:${contact.email}`}>
              与我联系 <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="hero-boards" aria-label="涪陵榨菜包装设计双展板">
          <motion.figure className="hero-board hero-board-left" initial={{ opacity: 0, y: 44, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -1.1 }} transition={{ delay: 0.28, duration: 0.82 }}>
            <PortfolioImage
              src="/assets/packaging/fuling-production-board-web.jpg"
              alt="涪陵榨菜包装结构、组合与衍生产品设计展板"
              eager
            />
            <figcaption>包装结构与生产应用</figcaption>
          </motion.figure>
          <motion.figure className="hero-board hero-board-right" initial={{ opacity: 0, y: 56, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 1.1 }} transition={{ delay: 0.38, duration: 0.82 }}>
            <PortfolioImage
              src="/assets/packaging/fuling-brand-board-web.jpg"
              alt="涪陵榨菜品牌定位与视觉系统设计展板"
              eager
            />
            <figcaption>品牌定位与视觉系统</figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="marquee" aria-label="设计能力">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <i>✦</i>
            </span>
          ))}
        </div>
      </section>

      <section className="statement-section" aria-labelledby="statement-title">
        <motion.div {...reveal}>
          <p className="eyebrow">DESIGN STATEMENT</p>
          <h2 id="statement-title">
            好的设计不止解决问题，
            <span>也应该留下可感知的记忆。</span>
          </h2>
        </motion.div>
        <motion.p {...reveal}>
          我的设计过程由观察、提炼、建模与呈现组成。通过文化线索、使用动作、材质触感和视觉秩序，让产品既能被理解，也能被记住。
        </motion.p>
      </section>

      <section id="packaging" className="packaging-case" aria-labelledby="packaging-title">
        <div className="case-heading">
          <motion.div {...reveal}>
            <p className="case-number">01 / FEATURED CASE</p>
            <h2 id="packaging-title">涪陵榨菜包装设计</h2>
            <p className="case-subtitle">地域文化、传统工艺与现代货架体验的品牌重塑</p>
          </motion.div>
          <motion.p className="case-brief" {...reveal}>
            项目围绕“百年匠艺、涪陵味道”展开，从青菜头、山城地貌、传统纹样与下饭场景中提炼视觉元素，建立品牌识别、口味区分、陈列包装与文化衍生品的完整系统。
          </motion.p>
        </div>

        <div className="case-facts" aria-label="项目概览">
          <div><span>项目类型</span><strong>品牌与包装</strong></div>
          <div><span>设计内容</span><strong>视觉 / 结构 / 陈列</strong></div>
          <div><span>核心关键词</span><strong>地域 · 工艺 · 系列化</strong></div>
          <div><span>完成时间</span><strong>2026</strong></div>
        </div>

        <BoardFeature
          index="A"
          title="包装结构与应用系统"
          text="以陈列盒、自立袋与衍生包装组成线下展示系统，统一品牌识别、信息层级、工艺说明与系列陈列关系。"
          src="/assets/packaging/fuling-production-board-web.jpg"
          original="/assets/packaging/fuling-production-board.png"
          alt="涪陵榨菜包装结构、刀版图、立体效果、包装组合和最终展示完整展板"
        />
        <BoardFeature
          index="B"
          title="品牌定位与视觉系统"
          text="以涪陵地域文化和榨菜工艺为叙事基础，搭建标志、品牌色、字体、插画、文化纹样与多口味产品家族。"
          src="/assets/packaging/fuling-brand-board-web.jpg"
          original="/assets/packaging/fuling-brand-board.png"
          alt="涪陵榨菜设计定位、品牌色彩、元素提取、插画和产品家族完整展板"
        />

        <div className="design-system-grid">
          <motion.article {...reveal}>
            <span>01</span>
            <h3>文化提炼</h3>
            <p>青菜头、辣椒、山城地貌与传统纹样构成识别资产，让地域文化自然进入包装。</p>
          </motion.article>
          <motion.article {...reveal}>
            <span>02</span>
            <h3>货架识别</h3>
            <p>深绿、匠艺金与米白建立主品牌气质，红、橙等口味色帮助快速区分产品。</p>
          </motion.article>
          <motion.article {...reveal}>
            <span>03</span>
            <h3>系列延展</h3>
            <p>从主包装延展至陈列盒、陶罐、徽章、杯垫与文化小物，形成完整品牌接触点。</p>
          </motion.article>
        </div>
      </section>

      <section id="works" className="works-section" aria-labelledby="works-title">
        <div className="works-heading">
          <p className="eyebrow">SELECTED WORKS</p>
          <h2 id="works-title">更多产品项目</h2>
          <p>从智能产品到消费电子，记录形态推导、建模控制与最终呈现。</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectRow project={project} reverse={index % 2 === 1} key={project.number} />
          ))}
        </div>
      </section>

      <section id="capabilities" className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="capabilities-heading">
          <p className="eyebrow">CAPABILITIES</p>
          <h2 id="capabilities-title">设计能力</h2>
        </div>
        <div className="capabilities-grid">
          {capabilities.map(([Icon, title, text], index) => (
            <motion.article key={title} {...reveal}>
              <div className="capability-icon"><Icon size={21} /></div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <p className="eyebrow">CONTACT</p>
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
          <span>曹佳航 · 产品设计作品集</span>
          <a href="#top">回到顶部 <ArrowUpRight size={15} /></a>
        </footer>
      </section>
    </main>
  );
}

function OpeningAnimation() {
  return (
    <motion.div className="opening-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      <motion.div
        className="opening-product"
        initial={{ opacity: 0, scale: 0.7, rotateY: -42 }}
        animate={{ opacity: 1, scale: [0.7, 1, 0.95], rotateY: [-42, 24, 0] }}
        transition={{ duration: 1.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <PortfolioImage src="/assets/optimized/walltime-front-web.jpg" alt="壁时产品开场动画" eager />
      </motion.div>
      <motion.div className="opening-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }}>
        <strong>曹佳航</strong>
        <span>PRODUCT DESIGN PORTFOLIO</span>
      </motion.div>
    </motion.div>
  );
}

function BoardFeature({ index, title, text, src, original, alt }) {
  return (
    <motion.article className="board-feature" {...reveal}>
      <div className="board-copy">
        <span>{index}</span>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <a href={original} target="_blank" rel="noreferrer">
          查看高清原图 <ArrowUpRight size={15} />
        </a>
      </div>
      <a className="packaging-board" href={original} target="_blank" rel="noreferrer" aria-label={`${title}高清原图`}>
        <PortfolioImage src={src} alt={alt} />
      </a>
    </motion.article>
  );
}

function ProjectRow({ project, reverse }) {
  return (
    <motion.article className={`project-row ${reverse ? "reverse" : ""} accent-${project.color}`} {...reveal}>
      <div className="project-media">
        <PortfolioImage src={project.image} alt={`${project.title}${project.subtitle}`} />
        <span>{project.meta}</span>
      </div>
      <div className="project-copy">
        <p className="project-number">{project.number}</p>
        <h3>{project.title}</h3>
        <h4>{project.subtitle}</h4>
        <p>{project.description}</p>
        <div className="project-detail">
          <PortfolioImage src={project.detail} alt={`${project.title}细节图`} />
        </div>
      </div>
    </motion.article>
  );
}

function PortfolioImage({ src, alt, eager = false }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
    />
  );
}
