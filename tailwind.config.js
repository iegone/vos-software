/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0073cb", // الأزرق الفاتح (للعناصر الثانوية)
          DEFAULT: "#0064B3", // الأزرق الداكن (للعناصر الأساسية مثل الأزرار)
          dark: "#054f87", // الأزرق الداكن جدا (للتسليط)
        },
        secondary: {
          light: "#ffce1b", // البرتقالي الفاتح (للعناصر الثانوية)
          DEFAULT: "#ffaf08", // البرتقالي الأساسي (للعناصر الرئيسية)
          dark: "#e28300", // البرتقالي الداكن (للتسليط)
        },
        text: {
          DEFAULT: "#FFFFFF", // اللون النصي الأساسي (الأبيض)
          secondary: "#E0E0E0", // النص الثانوي (رمادي فاتح)
        },
        background: {
          DEFAULT: "#212121", // الخلفية (أسود)
          secondary: "#2D2D2D",
          secondary2: "#3d3d3d",
        },
        accent: "#FFB74D", // لون accent مثل الذي يستخدم لتسليط بعض العناصر.
        border: "#4A4A4A", // لون الحدود (رمادي داكن)
      },
    },
  },
  plugins: [],
};
