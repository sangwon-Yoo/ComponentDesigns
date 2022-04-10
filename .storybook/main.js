module.exports = {
  /* ++ component 폴더 아래로 수정 */
  "stories": [
    "../src/component/**/*.stories.mdx",
    "../src/component/**/*.stories.@(js|jsx|ts|tsx)"
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