import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Adding color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark'
};

// extending the theme
const theme = extendTheme({ config });

export default theme;