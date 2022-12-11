import React from "react";
import "./CSS/Header.css";

export default function Header(props) {
  return (
    <div>
      <header className="header">
        {props.header}
        <span className="love">💕</span>
      </header>
    </div>
  );
}
