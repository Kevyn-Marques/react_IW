import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <Banner image = "favoritos" />
    <Container>
      <h1>Filmes</h1>
      <section className="cards">
        <Card id="B_nq7VTJZds"/>
        <Card id="B_nq7VTJZds"/>
        <Card id="B_nq7VTJZds"/>
        <Card id="B_nq7VTJZds"/>
        <Card id="B_nq7VTJZds"/>
      </section>
    </Container>
    <Footer/>
    </>
);
}

export default App;
