import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "../app/page";

test("renders the redesigned product design portfolio", () => {
  const { container } = render(<Page />);

  expect(screen.getAllByText(/曹佳航/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/东方未来感/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/东方未来感产品设计作品集/i)).toBeInTheDocument();
  expect(screen.getByText(/作品目录/i)).toBeInTheDocument();
  expect(screen.getByText(/像产品发布会一样/i)).toBeInTheDocument();
  expect(screen.getAllByText(/壁时/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/东方情绪疗愈桌面伴侣/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/创意来源/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/设计提炼/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/3D互动展示/i)).toBeInTheDocument();
  expect(screen.getByText(/多设备适配/i)).toBeInTheDocument();
  expect(screen.getByText("13333384178")).toBeInTheDocument();
  expect(screen.getByText("3600376954@qq.com")).toBeInTheDocument();
  expect(container.querySelectorAll("article").length).toBeGreaterThanOrEqual(20);
});
