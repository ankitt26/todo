import React, { useState } from "react";
import Listitem from "./Listitem";
import "./CSS/form.css";
export default function Form() {
  const [value, setvalue] = useState("");
  const [input, userinput] = useState([]);

  const onChange = (event) => {
    setvalue(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    userinput((previnput) => {
      return [...previnput, value];
    });
    console.log(input);
    setvalue("");
  };

  const deletee = (id) => {
    userinput((previnput) => {
      return previnput.filter((value, index) => {
        return index !== id;
      });
    });
  };

  // to do list start///////////////////////////////////

  // to do list end ////////////////////////////////////

  return (
    <div>
      <form className="form" onSubmit={submit}>
        <input
          className="input"
          placeholder="  Type here"
          value={value}
          onChange={onChange}
        ></input>
        <button className="Btn" type="submit">
          submit
        </button>
      </form>
      <div>
        <h3 className="h3">»» Todoes here »» </h3>
        <ol className="List">
          {input.map((value, index) => {
            return (
              <Listitem key={index} name={value} id={index} func={deletee} />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
