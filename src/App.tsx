import { Button } from "./components/Button/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
