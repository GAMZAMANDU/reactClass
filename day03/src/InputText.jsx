import React from "react";
import { useState } from "react";
import "./inputText.css";

const InputText = () => {
  const [text, setText] = useState("");
  return (
    <div className="wrapper">
      <div className="wrapp">
        <input type="text" onChange={(e)=>setText(e.target.value)} />
        <button className="btn"
          onClick={() => {
            setText();
          }}
        >
          초기화
        </button>

      </div>
      <hr />
      {text && <div id="modal" className="">{text}</div>}
    </div>
  );
};

export default InputText;
