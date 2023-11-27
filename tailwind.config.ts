import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 可以自由配置项目中可能重复使用的样式
      colors: {
        primary: {
          500: '#00B981',
          600: '#059669',
        }
      }
    },
  },
  plugins: [],
}
export default config
