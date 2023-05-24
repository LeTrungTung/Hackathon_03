import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function FormAddPlayer({ onPlayerSubmit }) {
  const [playerName, setPlayerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlayerSubmit(playerName);
    setPlayerName("");
  };

  return (
    <>
      <Form id="id-footer" onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter a player's name"
            aria-label="Player-name"
            aria-describedby="basic-addon2"
            type="text"
            name="name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            type="submit"
            style={{ color: "white" }}
          >
            ADD PLAYER
          </Button>
        </InputGroup>
      </Form>
    </>
  );
}

export default FormAddPlayer;
