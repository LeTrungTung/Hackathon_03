import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

function AddToDo(props) {
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    // Truyền dữ liệu cho app
    props.handleAddNote({ ...formData });

    //   Xóa dữ liệu trong form
    setFormData({});
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setFormData(props.dataItem);
  }, [props.dataItem]);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingTextarea2">
          <Form.Control
            placeholder="Take a note..."
            as="textarea"
            id="id-note"
            name="name"
            value={formData?.name}
            onChange={handleOnChange}
            style={{
              height: "100px",
              width: "300px",
              margin: "0 auto",
            }}
          />
        </FloatingLabel>
        <Button
          variant="warning"
          id="btn-plus"
          type="submit"
          onClick={() => props.handleAdd(text, "Đang thực hiện")}
        >
          +
        </Button>
      </Form>
    </>
  );
}
export default AddToDo;
