import "./walltime.css";

export const metadata = {
  title: "曹佳航｜AI+智能产品设计作品集",
  description:
    "曹佳航的产品设计作品集，聚焦 AI+智能产品、消费电子、三维建模、CMF与视觉表达，面向产品设计实习与智能硬件方向。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
