import "./globals.css";

export const metadata = {
  title: "曹佳航｜工业产品设计作品集",
  description:
    "一套面向产品设计岗位的高级作品集网站，重点展示壁时人工智能桌面摆件、三维建模、产品渲染、包装设计与产品定义项目。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
