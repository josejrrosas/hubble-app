import { Container } from "./Components/styles/Container.styled.js";
import Header from "./Components/Header.js";
import Card from "./Components/Card.js";
import Footer from './Components/Footer'
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/styles/Global.js";
import content from './content'

const theme = {
  colors:{
    header: '#ebfbff',
    body:'#fff',
    footer: '#003333',
  },

  mobile: '768px',
} 

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
      <GlobalStyles/>
        <Header />
        <Container>
          {content.map((item,index)=>(
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
