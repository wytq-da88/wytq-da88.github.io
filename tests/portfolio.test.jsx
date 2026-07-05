import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "../app/page";

test("renders the fresh product design portfolio", () => {
  const { container } = render(<Page />);
  const pageText = container.textContent;

  expect(screen.getAllByText(/曹佳航/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/清爽型产品设计作品集/i)).toBeInTheDocument();
  expect(screen.getByText(/互联网大厂和小红书式清爽作品集/i)).toBeInTheDocument();
  expect(screen.getByText(/Selected Works/i)).toBeInTheDocument();
  expect(screen.getAllByText(/壁时/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/AI 桌面情绪陪伴产品/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/游戏手柄/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/无线蓝牙耳机/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/设计提炼/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/把图片整理成有节奏的视觉墙/i)).toBeInTheDocument();
  expect(screen.getByText(/能力表达围绕产品设计岗位/i)).toBeInTheDocument();
  expect(screen.getByText("13333384178")).toBeInTheDocument();
  expect(screen.getByText("3600376954@qq.com")).toBeInTheDocument();
  expect(container.querySelectorAll("article").length).toBeGreaterThanOrEqual(18);
  expect(pageText).not.toMatch(/黑金|东方未来感|药盒|替换掉|小车/);
});
