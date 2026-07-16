import "./studio.css";

export const metadata = {
  title: "曹佳航｜产品设计师作品集",
  description:
    "曹佳航个人产品设计作品集，展示涪陵榨菜包装、壁时、消费电子建模、CMF 与用户场景研究。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
