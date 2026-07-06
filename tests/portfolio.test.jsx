import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "../app/page";

test("renders a polished public-facing product design portfolio", () => {
  const { container } = render(<Page />);
  const pageText = container.textContent;

  expect(screen.getAllByText(/曹佳航/i).length).toBeGreaterThan(0);
  expect(pageText).toMatch(/曹佳航\s*产品设计作品集/);
  expect(screen.getByText(/桌面智能产品、消费电子建模、CMF、包装视觉/i)).toBeInTheDocument();
  expect(screen.getByText(/Selected Works/i)).toBeInTheDocument();
  expect(screen.getAllByText(/壁时/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/AI 桌面情绪陪伴产品/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/游戏手柄/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/无线蓝牙耳机/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/形态语言/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/视觉墙整合建模、渲染、CMF 与版式表达/i)).toBeInTheDocument();
  expect(screen.getByText(/能力结构覆盖产品定义、三维建模、渲染表达与视觉系统/i)).toBeInTheDocument();
  expect(screen.getByText("13333384178")).toBeInTheDocument();
  expect(screen.getByText("3600376954@qq.com")).toBeInTheDocument();

  const images = [...container.querySelectorAll("img")];
  expect(images.length).toBeGreaterThanOrEqual(14);
  expect(images.every((image) => image.getAttribute("decoding") === "async")).toBe(true);
  expect(container.querySelector(".hero-board-main img")).toHaveAttribute("fetchpriority", "high");
  expect(screen.getByRole("navigation", { name: "精选项目快速导航" })).toBeInTheDocument();
  expect(container.querySelectorAll("article").length).toBeGreaterThanOrEqual(18);
  expect(container.querySelector(".intro-overlay")).toBeNull();
  expect(container.querySelector(".scroll-progress")).toBeNull();
  expect(pageText).not.toMatch(
    /黑金|东方未来感|药盒|磁吸|小车|小红书|清爽版|清爽型|改成|这版|旧版|正在打开|已经换成|后续|下一步|PPT|PDF|帮|建议|应该|怎么做|投递|面试官|求职|课程截图|删掉|不适合|Codex|Claude|ChatGPT|网站负责/
  );
});
