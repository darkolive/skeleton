import { join } from "path";
import type { Config } from "tailwindcss";
import { skeleton } from "@skeletonlabs/tw-plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "calc(var(--base-font-size) * 0.75)",
        sm: "calc(var(--base-font-size) * 0.875)",
        base: "var(--base-font-size)",
        lg: "calc(var(--base-font-size) * 1.125)",
        xl: "calc(var(--base-font-size) * 1.25)",
        "2xl": "calc(var(--base-font-size) * 1.5)",
        "3xl": "calc(var(--base-font-size) * 1.875)",
        "4xl": "calc(var(--base-font-size) * 2.25)", // Scaled up by 50%
      },
      // Extend other theme properties as needed
    },
  },
  plugins: [
    skeleton({
      themes: {
        preset: [
          "skeleton",
          "wintry",
          "modern",
          "rocket",
          "sahara",
          "seafoam",
          "vintage",
          "crimson",
          "hamlindigo",
          "gold-nouveau",
        ],
      },
    }),
    // Include other plugins as needed
  ],
};

export default config;
