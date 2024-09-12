import Container from "./Components/Container";
import Banner from "./Components/home/Banner";
import Contact from "./Components/home/Contact";
import Fetured from "./Components/home/Fetured";

function App() {
  return (
    <main>
      <Container>
        <Banner />
        <Fetured />
        <Contact />
      </Container>
    </main>
  );
}

export default App;
