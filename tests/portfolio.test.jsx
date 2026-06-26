import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "../app/page";

test("renders a multi-project product design portfolio", () => {
  render(<Page />);

  expect(screen.getAllByText(/曹佳航/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/壁时/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/精选项目/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/作品完善/i)).toBeInTheDocument();
  expect(screen.getByText(/六个项目都补上能被面试官追问的设计逻辑/i)).toBeInTheDocument();
  expect(screen.getAllByText(/能力证明/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/案例深度/i)).toBeInTheDocument();
  expect(screen.getByText(/工业产品设计作品集/i)).toBeInTheDocument();
  expect(screen.getByText("13333384178")).toBeInTheDocument();
  expect(screen.getByText("3600376954@qq.com")).toBeInTheDocument();
  expect(screen.getAllByRole("article").length).toBeGreaterThanOrEqual(5);
});
