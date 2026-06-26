export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./tests/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#0A0A09",
        graphite: "#11110F",
        paper: "#E8DFCF",
        copper: "#C59B63",
        sage: "#7F947F",
        mist: "#8AA8C4",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "PingFang SC", "Microsoft YaHei", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 26px 90px rgba(0,0,0,0.32)",
      },
    },
  },
  plugins: [],
};
