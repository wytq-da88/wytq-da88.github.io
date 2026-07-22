import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "../app/page";

test("renders Walltime before the designer profile and other projects", () => {
  const { container } = render(<Page />);
  const pageText = container.textContent;

  expect(screen.getByRole("heading", { level: 1, name: /壁时/i })).toBeInTheDocument();
  expect(screen.getByText(/01 \/ FEATURED PROJECT/i)).toBeInTheDocument();
  expect(screen.getByText(/AI 桌面情绪陪伴产品/i)).toBeInTheDocument();
  expect(screen.getByText(/以时间、光影与情绪反馈为核心/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /查看壁时项目/i })).toHaveAttribute("href", "#walltime-case");

  const video = container.querySelector(".hero-video video");
  expect(video).not.toBeNull();
  expect(video).toHaveAttribute("autoplay");
  expect(video.muted).toBe(true);
  expect(video).toHaveAttribute("loop");
  expect(video).toHaveAttribute("playsinline");
  expect(video).not.toHaveAttribute("controls");
  expect(video).toHaveAttribute("poster", "/assets/walltime/walltime-poster.jpg");
  expect(video.querySelector("source")).toHaveAttribute("src", "/assets/walltime/walltime-hero.mp4");

  [
    "项目背景",
    "用户使用场景",
    "设计机会点",
    "产品概念",
    "外观造型推导",
    "功能与交互逻辑",
    "灯光和情绪反馈",
    "材料与颜色",
    "产品细节",
    "最终效果展示",
  ].forEach((title) => {
    expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
  });

  const walltimeIndex = pageText.indexOf("壁时");
  const finalShowcaseIndex = pageText.indexOf("最终效果展示");
  const designerIndex = pageText.indexOf("曹佳航");
  const coolingIndex = pageText.indexOf("手机散热风扇");
  const mouseIndex = pageText.indexOf("鼠标产品渲染");
  const packagingIndex = pageText.indexOf("涪陵榨菜包装设计");
  const pillBoxIndex = pageText.indexOf("智能药盒设计");
  expect(walltimeIndex).toBeGreaterThanOrEqual(0);
  expect(finalShowcaseIndex).toBeGreaterThan(walltimeIndex);
  expect(designerIndex).toBeGreaterThan(finalShowcaseIndex);
  expect(coolingIndex).toBeGreaterThan(designerIndex);
  expect(mouseIndex).toBeGreaterThan(coolingIndex);
  expect(packagingIndex).toBeGreaterThan(mouseIndex);
  expect(pillBoxIndex).toBeGreaterThan(packagingIndex);

  expect(screen.getByText(/PRODUCT DESIGNER/i)).toBeInTheDocument();
  expect(screen.getByText(/从生活里观察/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /其他精选项目/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /手机散热风扇/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /鼠标产品渲染/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /涪陵榨菜包装设计/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /智能药盒设计/i })).toBeInTheDocument();
  expect(screen.getByText(/游戏手柄/i)).toBeInTheDocument();
  expect(screen.getByText(/无线蓝牙耳机/i)).toBeInTheDocument();
  expect(screen.getByText(/便携式果汁机/i)).toBeInTheDocument();
  expect(screen.getByText("13333384178")).toBeInTheDocument();
  expect(screen.getByText("3600376954@qq.com")).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /下载简历|下载一页版简历|下载优化版简历/i }).length).toBeGreaterThanOrEqual(3);
  expect(screen.getAllByRole("link", { name: /下载简历|下载一页版简历|下载优化版简历/i }).every((link) =>
    link.getAttribute("href") === "/downloads/resume-cao-jiahang-ai-product-design.pdf"
  )).toBe(true);
  expect(screen.getByText(/AI \+ 智能产品方向/i)).toBeInTheDocument();
  expect(screen.getByText(/2026\.08 可实习/i)).toBeInTheDocument();

  const images = [...container.querySelectorAll("img")];
  expect(images.length).toBeGreaterThanOrEqual(16);
  expect(images.every((image) => image.getAttribute("decoding") === "async")).toBe(true);
  expect(container.querySelector(".background-visual img")).toHaveAttribute(
    "src",
    "/assets/walltime/walltime-background-web.jpg"
  );
  expect(container.querySelector(".background-logo img")).toHaveAttribute(
    "src",
    "/assets/walltime/walltime-logo-web.jpg"
  );
  expect(container.querySelector(".walltime-feature-board img")).toHaveAttribute(
    "src",
    "/assets/walltime/walltime-feature-board-hd.png"
  );
  expect(container.querySelector(".concept-stage img")).toHaveAttribute(
    "src",
    "/assets/walltime/walltime-concept-render-web.jpg"
  );
  expect(container.querySelector(".app-showcase img")).toHaveAttribute(
    "src",
    "/assets/walltime/walltime-app-hd.png"
  );
  expect(container.querySelector(".exploded-main img")).toHaveAttribute(
    "src",
    "/assets/walltime/walltime-exploded.png"
  );
  expect(container.querySelectorAll(".final-boards img")).toHaveLength(1);
  expect(container.querySelector(".final-boards img")).toHaveAttribute(
    "src",
    "/assets/walltime/walltime-final-board-web.jpg"
  );
  const projectTitles = [...container.querySelectorAll(".other-project h3")].map((heading) => heading.textContent);
  expect(projectTitles).toEqual([
    "手机散热风扇",
    "鼠标产品渲染",
    "涪陵榨菜包装设计",
    "智能药盒设计",
    "游戏手柄",
    "无线蓝牙耳机",
    "便携式果汁机",
  ]);
  expect(container.querySelectorAll(".other-project")).toHaveLength(7);
  expect(container.querySelectorAll(".other-project .project-image-link")).toHaveLength(15);
  expect(container.querySelector(".other-project:first-child img")).toHaveAttribute(
    "src",
    "/assets/selected-projects/cooling-fan-overview-4k.jpg"
  );
  expect(container.querySelectorAll(".other-project")[1].querySelectorAll("img")).toHaveLength(3);
  expect(container.querySelectorAll(".other-project")[3].querySelector("img")).toHaveAttribute(
    "src",
    "/assets/selected-projects/smart-pill-box-board.jpg"
  );
  expect(container.querySelectorAll(".other-project")[6].querySelectorAll("img")).toHaveLength(3);
  const navigation = screen.getByRole("navigation", { name: "主导航" });
  const menuButton = screen.getByRole("button", { name: "打开菜单" });
  expect(navigation).toBeInTheDocument();
  fireEvent.click(menuButton);
  expect(navigation).toHaveClass("is-open");
  expect(document.body.style.overflow).toBe("hidden");
  fireEvent.keyDown(window, { key: "Escape" });
  expect(navigation).not.toHaveClass("is-open");
  expect(container.querySelector(".opening-screen")).toBeNull();
  expect(container.querySelector(".studio-hero")).toBeNull();
  expect(pageText).not.toMatch(
    /Viktor|Oddy|CodeNest|Taught by Industry Professionals|价格|虚构评价|小车|小红书|PPT|PDF|Codex|Claude|ChatGPT/
  );
});
