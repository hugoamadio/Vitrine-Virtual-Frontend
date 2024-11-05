import GlobalStyled from "./config/GlobalStyled";
import DefaultTheme from "./config/theme/DefaultTheme";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <DefaultTheme>
      <GlobalStyled />
      <AppRoutes />
    </DefaultTheme>
  );
}

export default App;
