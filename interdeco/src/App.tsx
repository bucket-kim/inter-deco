import R3F from "./R3F/R3F";
import UI from "./UI/UI";
import StyleProvider from "./styles/StyleProvider";

function App() {
  return (
    <StyleProvider>
      <UI />
      <R3F />
    </StyleProvider>
  );
}

export default App;
