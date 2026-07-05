export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./tests/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F7F5",
        canvas: "#FFFFFF",
        ink: "#111111",
        muted: "#666666",
        coral: "#FF6B4A",
        blush: "#FFF6F1",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 48px rgba(45,38,32,0.08)",
      },
    },
  },
  plugins: [],
};
