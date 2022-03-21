import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from "@react-theming/storybook-addon/dist/preview";
import { myBlogTheme } from '../src/styles/themes';

addDecorator(withThemes(ThemeProvider, [myBlogTheme]));

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
