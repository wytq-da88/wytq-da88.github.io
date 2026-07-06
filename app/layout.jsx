import "./globals.css";

export const metadata = {
  title: "曹佳航｜产品设计作品集",
  description:
    "面向产品设计岗位的个人作品集，展示壁时、数码产品建模、CMF、包装视觉、产品过程与生活方式场景表达。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
