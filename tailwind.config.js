const plugin = require("tailwindcss/plugin");
const postcss = require("postcss");
const postcssJs = require("postcss-js");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./utilities/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      sm: "40rem",
      md: "52rem",
      lg: "64rem",
    },
    animation: {
      "spin-slow": "spin 12s linear infinite",
    },
    colors: {
      "night-blue-900": "#290340",
      "night-blue-850": "#3A054A",
      "night-blue-800": "#410752",
      "night-blue-700": "#4F0A5B",
      "night-blue-600": "#5D1063",
      "night-blue-500": "#671368",
      "night-blue-400": "#7C327C",

      "grey-900": "#191919",
      "grey-800": "#3D3D3D",
      "grey-700": "#5C5C5C",
      "grey-600": "#707070",
      "grey-500": "#989898",
      "grey-400": "#B8B8B8",
      "grey-350": "#CCCCCC",
      "grey-300": "#DBDBDB",
      "grey-200": "#EBEBEB",
      "grey-100": "#F3F3F3",
      "grey-50": "#F9F9F9",

      "lime-green-700": "#ADCC00",
      "lime-green-600": "#BCE400",
      "lime-green-500": "#C9F708",

      "anthracite-grey-800": "#333D47",
      "anthracite-grey-700": "#424F5C",
      "anthracite-grey-600": "#516272",
      "anthracite-grey-500": "#5E7183",

      "azure-blue": "#0D17F5",

      "peach-blossom": "#F2BAB0",

      "coral-red-900": "#C82322",
      "coral-red-800": "#D72F2E",
      "coral-red-700": "#E43636",
      "coral-red-600": "#F7403C",
      "coral-red-400": "#FF5957",
      "coral-red-300": "#F3797A",
      "coral-red-200": "#F99F9F",
      "coral-red-100": "#FFD0D6",

      "aqua-blue-500": "#00CEEB",
      "aqua-blue-400": "#00D7EE",
      "aqua-blue-300": "#00E0F3",
      "aqua-blue-200": "#0DEDF7",

      "rainforest-green-900": "#005D00",
      "rainforest-green-800": "#007C00",
      "rainforest-green-600": "#009E00",
      "rainforest-green-500": "#00AD00",

      black: "#000000",
      white: "#FFFFFF",
      "theme-background": "var(--theme--background-color)",
      "theme-color": "var(--theme--text-color)",
      "theme-color-secondary": "var(--theme--text-color--secondary)",
    },
    borderRadius: {
      none: "0",
      inputField: "4px",
      full: "9999px",
    },
    spacing: {
      0: "0",
      "3xs": "0.25rem",
      "2xs": "0.5rem",
      xs: "0.75rem",
      s: "1rem",
      m: "1.5rem",
      l: "2rem",
      xl: "2.5rem",
      "2xl": "3rem",
      "3xl": "4rem",
      "4xl": "5rem",
      "5xl": "6rem",
      "6xl": "8rem",

      /* One-up pairs */
      "3xs-2xs": "clamp(0.25rem, 0.162rem + 0.3756vw, 0.5rem)",
      "2xs-xs": "clamp(0.5rem, 0.412rem + 0.3756vw, 0.75rem)",
      "xs-s": "clamp(0.75rem, 0.662rem + 0.3756vw, 1rem)",
      "s-m": "clamp(1rem, 0.8239rem + 0.7512vw, 1.5rem)",
      "m-l": "clamp(1.5rem, 1.3239rem + 0.7512vw, 2rem)",
      "l-xl": "clamp(2rem, 1.8239rem + 0.7512vw, 2.5rem)",
      "xl-2xl": "clamp(2.5rem, 2.3239rem + 0.7512vw, 3rem)",
      "2xl-3xl": "clamp(3rem, 2.6479rem + 1.5023vw, 4rem)",
      "3xl-4xl": "clamp(4rem, 3.6479rem + 1.5023vw, 5rem)",
      "4xl-5xl": "clamp(5rem, 4.6479rem + 1.5023vw, 6rem)",
      "5xl-6xl": "clamp(6rem, 5.2958rem + 3.0047vw, 8rem)",

      /* Custom pairs */
      "l-2xl": "clamp(2rem, 1.6479rem + 1.5023vw, 3rem)",
      "xl-3xl": "clamp(2.5rem, 1.9718rem + 2.2535vw, 4rem)",
      "2xl-4xl": "clamp(3rem, 2.2958rem + 3.0047vw, 5rem)",
      "2xl-5xl": "clamp(3rem, 1.9437rem + 4.507vw, 6rem)",
      "3xl-6xl": "clamp(4rem, 2.5915rem + 6.0094vw, 8rem)",
    },
    fontSize: {
      "step-0": "1rem",
      "step-1": "clamp(1.2rem, 1.1531rem + 0.2vw, 1.3331rem)",
      "step-2": "clamp(1.44rem, 1.3214rem + 0.5061vw, 1.7769rem)",
      "step-3": "clamp(1.7281rem, 1.5026rem + 0.9624vw, 2.3688rem)",
      "step-4": "clamp(2.0738rem, 1.6921rem + 1.6282vw, 3.1575rem)",
      "step-5": "clamp(2.4881rem, 1.8823rem + 2.585vw, 4.2088rem)",
    },
    fontFamily: {
      sans: ["Arial", "sans-serif"],
      headline: [
        '"NHM Wallop Headline"',
        '"Inter"',
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ],
      text: [
        '"NHM Wallop Text"',
        '"Inter"',
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ],
    },
    fontWeight: {
      semibold: "600",
      medium: "500",
      regular: "400",
    },
    rotate: {
      90: "90deg",
      180: "180deg",
    },
    width: {
      auto: "auto",
      content: "max-content",
      full: "100%",
    },
    maxWidth: {
      page: "1344px",
    },
    minWidth: {
      full: "100%",
    },
    height: {
      auto: "auto",
      content: "max-content",
      full: "100%",
    },
    backgroundColor: ({ theme }) => theme("colors"),
    borderColor: ({ theme }) => theme("colors"),
    textColor: ({ theme }) => theme("colors"),
    gap: ({ theme }) => theme("spacing"),
    margin: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    padding: ({ theme }) => theme("spacing"),
    zIndex: {
      auto: "auto",
      0: "0",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
    },
  },
  variantOrder: [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "empty",
    "read-only",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
  ],
  plugins: [
    plugin(function ({ addComponents, config }) {
      let result = "";

      const currentConfig = config();

      const groups = [
        { key: "screens", prefix: "media" },
        { key: "colors", prefix: "color" },
        { key: "borderRadius", prefix: "rounded" },
        { key: "spacing", prefix: "space" },
        { key: "fontSize", prefix: "text" },
        { key: "fontFamily", prefix: "font" },
        { key: "fontWeight", prefix: "font" },
        { key: "transitions", prefix: "transition" },
        { key: "width", prefix: "w" },
        { key: "height", prefix: "h" },
        { key: "opacity", prefix: "opacity" },
      ];

      groups.forEach(({ key, prefix }) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach((key) => {
          result += `--${prefix}-${key}: ${group[key]};`;
        });
      });

      addComponents({
        ":root": postcssJs.objectify(postcss.parse(result)),
      });
    }),

    plugin(function ({ addUtilities, config }) {
      const currentConfig = config();
      const customUtilities = [
        { key: "spacing", prefix: "flow-space", property: "--flow-space" },
        { key: "spacing", prefix: "region-space", property: "--region-space" },
        { key: "spacing", prefix: "gutter", property: "--gutter" },
      ];

      customUtilities.forEach(({ key, prefix, property }) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach((key) => {
          addUtilities({
            [`.${prefix}-${key}`]: postcssJs.objectify(
              postcss.parse(`${property}: ${group[key]}`)
            ),
          });
        });
      });
    }),
  ],
};
