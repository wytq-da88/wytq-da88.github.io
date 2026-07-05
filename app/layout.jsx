import "./globals.css";

export const metadata = {
  title: "曹佳航｜清爽型产品设计作品集",
  description:
    "面向产品设计岗位的个人作品集网站，采用白底卡片、清晰信息层级和中文项目叙事，展示壁时、数码产品建模、CMF、包装设计与产品过程。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
