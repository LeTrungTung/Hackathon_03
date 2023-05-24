import { useCallback, useState } from "react";
import Table from "react-bootstrap/Table";
import { FaBeer } from "react-icons/fa";

function ListPlayer({ players }) {
  console.log(11, players);
  //
  //   const [playersEdit, setPlayersEdit] = useState(players);
  //   //   const [playersEdit, setPlayersEdit] = useState([{ players: [] }]);
  //   console.log(22, playersEdit);
  //   const handleIncrement = useCallback((index) => {
  //     setPlayersEdit((prevPlayers) => {
  //       const updatedPlayers = [...prevPlayers];
  //       updatedPlayers[index].score += 1;
  //       return updatedPlayers;
  //     });
  //   }, []);
  //   console.log(33, playersEdit);

  return (
    <Table id="id-content">
      <thead></thead>
      <tbody style={{ verticalAlign: "center" }}>
        {players.map((player, index) => (
          <tr key={index}>
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
            <td style={{ textAlign: "left" }}>{player}</td>
            <td style={{ width: "50px" }}>
              <button>-</button>
            </td>
            <td style={{ width: "100px" }}>0</td>
            <td style={{ width: "50px" }}>
              <button>+</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListPlayer;
