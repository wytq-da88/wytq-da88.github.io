import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "../app/page";

test("renders the redesigned public product design portfolio", () => {
  const { container } = render(<Page />);
  const pageText = container.textContent;

  expect(screen.getAllByText(/曹佳航/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/从生活里观察/i)).toBeInTheDocument();
  expect(screen.getAllByText(/涪陵榨菜包装设计/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/地域文化、传统工艺与现代货架体验/i)).toBeInTheDocument();
  expect(screen.getByText(/包装结构与应用系统/i)).toBeInTheDocument();
  expect(screen.getAllByText(/品牌定位与视觉系统/i).length).toBeGreaterThanOrEqual(2);
  expect(screen.getByText(/更多产品项目/i)).toBeInTheDocument();
  expect(screen.getAllByText(/壁时/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/游戏手柄/i)).toBeInTheDocument();
  expect(screen.getByText(/无线蓝牙耳机/i)).toBeInTheDocument();
  expect(screen.getByText(/手机散热风扇/i)).toBeInTheDocument();
  expect(screen.getByText(/便携式果汁机/i)).toBeInTheDocument();
  expect(screen.getAllByText(/设计能力/i).length).toBeGreaterThanOrEqual(2);
  expect(screen.getByText("13333384178")).toBeInTheDocument();
  expect(screen.getByText("3600376954@qq.com")).toBeInTheDocument();

  const images = [...container.querySelectorAll("img")];
  expect(images.length).toBeGreaterThanOrEqual(14);
  expect(images.every((image) => image.getAttribute("decoding") === "async")).toBe(true);
  expect(container.querySelectorAll(".hero-board img")).toHaveLength(2);
  expect(container.querySelector(".hero-board-left img")).toHaveAttribute(
    "src",
    "/assets/packaging/fuling-production-board-web.jpg"
  );
  expect(container.querySelector(".hero-board-right img")).toHaveAttribute(
    "src",
    "/assets/packaging/fuling-brand-board-web.jpg"
  );
  expect(container.querySelectorAll(".packaging-board img")).toHaveLength(2);
  expect(container.querySelectorAll(".packaging-board img")[0]).toHaveAttribute(
    "src",
    "/assets/packaging/fuling-production-board-web.jpg"
  );
  expect(screen.getByRole("navigation", { name: "主导航" })).toBeInTheDocument();
  expect(container.querySelectorAll("article").length).toBeGreaterThanOrEqual(14);
  expect(container.querySelector(".opening-screen")).not.toBeNull();
  expect(container.querySelector(".opening-product img")).toHaveAttribute("src", "/assets/optimized/walltime-front-web.jpg");
  expect(pageText).not.toMatch(
    /黑金|东方未来感|药盒|磁吸|小车|小红书|清爽版|旧版|正在打开|后续|下一步|PPT|PDF|给你|帮你|建议你|怎么做|投递|面试官|求职|课程截图|删掉|不适合|Codex|Claude|ChatGPT/
  );
});
