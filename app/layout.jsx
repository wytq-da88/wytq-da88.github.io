import "./globals.css";

export const metadata = {
  title: "曹佳航｜东方未来感产品设计作品集",
  description:
    "面向产品设计岗位的个人作品集网站，展示壁时 AI 桌面摆件、工业建模、CMF、包装设计、产品过程叙事与 3D 互动展示。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
