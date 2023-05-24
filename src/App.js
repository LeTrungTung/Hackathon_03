import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Navbar,
  Table,
} from "react-bootstrap";
import AddToDo from "./components/AddToDo";
import NoteList from "./components/NoteList";
import { useState } from "react";

function App() {
  const [noteToDo, setNoteToDo] = useState([]);
  const [dataItem, setDataItem] = useState({
    name: "",
    status: "",
    id: "",
  });

  const handleAddNote = (data, action) => {
    if (action === "edit") {
      const dataedit = noteToDo.find((item) => item.id === id);
      setDataItem(dataedit);
    }

    // Khi add mới (Không có id )
    if (!data.id) {
      data.id = noteToDo.length
        ? noteToDo[noteToDo.length - 1].id + 1
        : 1;
      if (noteToDo.length) {
        return setNoteToDo([...noteToDo, data]);
      }
      setNoteToDo([data]);
    } else {
      // Khi edit có id
      const newData = noteToDo.map((item) => {
        if (item.id === data.id) {
          return { ...item, ...data };
        }
        return item;
      });

      setNoteToDo(newData);
    }
  };

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light">
          <Container>
            <Navbar.Brand href="#">Note App</Navbar.Brand>
          </Container>
        </Navbar>
        <hr />
      </Container>

      <AddToDo
        handleAdd={handleAddNote}
        // Truyền data cho form
        dataItem={dataItem}
      />

      <br />

      <hr />
      <Container>
        <NoteList />
      </Container>
    </>

    // <div className="App">

    // </div>
  );
}

export default App;
