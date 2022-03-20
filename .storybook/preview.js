export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  //++ storybook sb-main-padded 클래스 padding 제거
  layout: 'fullscreen',
}