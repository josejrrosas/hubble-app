import { Container } from "./Components/styles/Container.styled.js";
import Header from "./Components/Header.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/styles/Global.js";

const theme = {
  colors:{
    header: '#ebfbff',
    body:'#fff',
    footer: '#003333',
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
      <GlobalStyles/>
        <Header />
        <Container>
          <h1>Hello world</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
