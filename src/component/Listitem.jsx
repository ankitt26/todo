import React from "react";
import "./Listitem.css";
export default function Listitem(props) {
  return (
    <div>
      <li className="li">
        {props.name}
        <button
          className="Btn-Del"
          onClick={() => {
            props.func(props.id);
          }}
        >
          Done
        </button>
      </li>
    </div>
  );
}
