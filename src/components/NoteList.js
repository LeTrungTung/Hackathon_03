import { Button, Table } from "react-bootstrap";

function NoteList() {
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
        <tr>
          <td>1</td>
          <td>Làm Bài tập nhà</td>
          <td>Đang thực hiện</td>
          <td>
            <Button className="me-1 btn-primary" onClick={() => {}}>
              Edit
            </Button>{" "}
            <Button className="btn-danger" onClick={() => {}}>
              Delete
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
export default NoteList;
