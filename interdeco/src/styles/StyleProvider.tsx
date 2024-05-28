import { FC, memo, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Theme } from "./Theme";

interface StyleProviderPropTypes {
  children: ReactNode;
}

const StyleProvider: FC<StyleProviderPropTypes> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default memo(StyleProvider);
