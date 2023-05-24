import { Button, Form, InputGroup } from "react-bootstrap";

function FormAddPlayer() {
  return (
    <>
      <Form id="id-footer">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter a player's name"
            aria-label="Player-name"
            aria-describedby="basic-addon2"
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
