import "./App.css";
import { useState } from "react";
import GhiDiem from "./learn/ghiDiem.js";
export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div className="App" style={{ padding: "50px" }}>
        <button className="button-54" onClick={() => setShow(!show)}>
          Let Play
        </button>
        {show && <GhiDiem />}
      </div>
    </div>
  );
}
