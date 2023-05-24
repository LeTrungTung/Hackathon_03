import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ListPlayer from "./components/ListPlayer";
import FormAddPlayer from "./components/FormAddPlayer";

function App() {
  return (
    <div className="App">
      {/* <h1>Bài nâng cao</h1> */}
      <Container>
        <Header />
      </Container>
      {/* List người chơi */}
      <Container>
        <ListPlayer />
      </Container>
      <Container>
        <FormAddPlayer />
      </Container>
    </div>
  );
}

export default App;
