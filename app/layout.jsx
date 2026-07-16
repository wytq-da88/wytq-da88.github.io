import "./walltime.css";

export const metadata = {
  title: "壁时｜曹佳航产品设计作品集",
  description:
    "以壁时 AI 桌面情绪陪伴产品为首个完整案例，展示曹佳航在智能产品、消费电子、CMF、包装视觉与用户研究方面的设计作品。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
