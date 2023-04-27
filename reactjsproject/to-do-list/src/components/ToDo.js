import React, { useState } from "react";
import "./style.css";
function ToDo() {
  const [checked, setChecked] = useState([]);
  var work = ["Eating", "Studying", "Walking", "Sleeping", "Helping"];

  const handleChange = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  return (
    <div className="table">
      <h2>To Do List</h2>
      {work.map((data, ind) => {
        return (
          <div key={ind}>
            <table className="table">
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name={ind}
                    value={data}
                    onClick={handleChange}
                  ></input>
                </td>
                <td>
                  <p className={isChecked(data)}>{data}</p>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
      <input type="text"></input>
      <button type="button">Add Items</button>
    </div>
  );
}

export default ToDo;

{
  /* <tr>
          <td>
            <input type="checkbox" onChange={handleChange}></input>
          </td>
          <td>
            <label>Studying</label>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" onChange={handleChange}></input>
          </td>
          <td>
            <label>Walking</label>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" onChange={handleChange}></input>
          </td>
          <td>
            <label>Shopping</label>
          </td>
        </tr> */
}
