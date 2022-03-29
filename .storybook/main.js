module.exports = {
  /* ++ components 폴더 아래로 수정 */
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    //"storybook-addon-styled-component-theme/dist/preset",
    "@react-theming/storybook-addon",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}