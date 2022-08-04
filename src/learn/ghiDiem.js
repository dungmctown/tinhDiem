import { useState } from "react";

function App() {
  const [play1, setPlay1] = useState(0);
  const [play2, setPlay2] = useState(0);
  const [play3, setPlay3] = useState(0);
  const [play4, setPlay4] = useState(0);
  const [namePlayer1, setNamePlayer1] = useState("");
  const [namePlayer2, setNamePlayer2] = useState("");
  const [namePlayer3, setNamePlayer3] = useState("");
  const [namePlayer4, setNamePlayer4] = useState("");
  const [point, setPoint] = useState("");
  switch (Number(point) + 1) {
    case play1:
      alert(`play ${namePlayer1} win`);
      setPlay1(0);
      setPlay2(0);
      setPlay3(0);
      setPlay4(0);
      break;
    case play2:
      alert(`play ${namePlayer2} win`);
      setPlay1(0);
      setPlay2(0);
      setPlay3(0);
      setPlay4(0);
      break;
    case play3:
      alert(`play ${namePlayer3} win`);
      setPlay1(0);
      setPlay2(0);
      setPlay3(0);
      setPlay4(0);
      break;
    case play4:
      alert(`play ${namePlayer4} win`);
      setPlay1(0);
      setPlay2(0);
      setPlay3(0);
      setPlay4(0);
      break;

    default:
      break;
  }
  return (
    <div className="main">
      <div className="input">
        <input
          type="text"
          placeholder="Enter a point to Win"
          value={point}
          onChange={(e) => setPoint(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter A Player1 Name"
          value={namePlayer1}
          defaultValue="41"
          onChange={(e) => {
            setNamePlayer1(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter A Player2 Name"
          value={namePlayer2}
          onChange={(e) => {
            setNamePlayer2(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter A Player3 Name"
          value={namePlayer3}
          onChange={(e) => {
            setNamePlayer3(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter A Player4 Name"
          value={namePlayer4}
          onChange={(e) => {
            setNamePlayer4(e.target.value);
          }}
        />
      </div>
      <div className="player">
        <p style={{ fontFamily: "sans-serif" }}>{namePlayer1}</p>
        <h1>{play1}</h1>
        <button
          onClick={() => {
            setPlay1(play1 - 1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            setPlay1(play1 + 1);
          }}
        >
          +1
        </button>
      </div>
      <div className="player">
        <p>{namePlayer2}</p>
        <h1>{play2}</h1>
        <button
          onClick={() => {
            setPlay2(play2 - 1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            setPlay2(play2 + 1);
          }}
        >
          +1
        </button>
      </div>
      <div className="player">
        <p>{namePlayer3}</p>
        <h1>{play3}</h1>
        <button
          onClick={() => {
            setPlay3(play3 - 1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            setPlay3(play3 + 1);
          }}
        >
          +1
        </button>
      </div>
      <div className="player">
        <p>{namePlayer4}</p>
        <h1>{play4}</h1>
        <button
          onClick={() => {
            setPlay4(play4 - 1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            setPlay4(play4 + 1);
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
}
export default App;
