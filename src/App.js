import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ListPlayer from "./components/ListPlayer";
import FormAddPlayer from "./components/FormAddPlayer";
import { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);
  // const [listPlayer, setListPlayer] = useState([]);
  // const [dataItem, setDataItem] = useState({
  //   name: "",
  //   id: "",
  //   score: 0,
  // });

  const handlePlayerSubmit = (playerName) => {
    setPlayers([...players, playerName]);
  };

  return (
    <div className="App">
      {/* <h1>Bài nâng cao</h1> */}
      <Container>
        <Header />
      </Container>
      {/* List người chơi */}
      <Container>
        <ListPlayer players={players} />
      </Container>
      <Container>
        <FormAddPlayer onPlayerSubmit={handlePlayerSubmit} />
      </Container>
    </div>
  );
}

export default App;
