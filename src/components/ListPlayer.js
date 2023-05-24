import Table from "react-bootstrap/Table";
import { FaBeer } from "react-icons/fa";

function ListPlayer() {
  return (
    <Table id="id-content">
      <thead></thead>
      <tbody style={{ verticalAlign: "center" }}>
        <tr>
          <td
            style={{
              width: "50px",
              fontWeight: 700,
              verticalAlign: "center",
            }}
          >
            X
          </td>
          <td
            style={{
              width: "50px",
              fontWeight: 700,
              fontSize: "30px",
            }}
          >
            *
          </td>
          <td style={{ textAlign: "left" }}>name</td>
          <td style={{ width: "50px" }}>-</td>
          <td style={{ width: "100px" }}>mark</td>
          <td style={{ width: "50px" }}>+</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ListPlayer;
