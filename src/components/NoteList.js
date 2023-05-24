import { Button, Table } from "react-bootstrap";

function NoteList(props) {
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Note Content</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody style={{ backgroundColor: "white" }}>
        {props.noteToDo &&
          props.noteToDo.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                {item.status ? "Đã hoàn thành" : "Chưa hoàn thành"}
              </td>
              <td>
                <Button
                  className="me-1 btn-primary"
                  onClick={() => props.handleAddNote("edit", item.id)}
                >
                  Edit
                </Button>{" "}
                <Button
                  className="btn-danger"
                  //   onClick={() => props.onDeleteData(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
export default NoteList;
