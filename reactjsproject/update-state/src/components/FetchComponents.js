import React, { useState } from "react";

function FetchComponents() {
  const [result, setResult] = useState([]);
  const fetchedDataFun = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((fetcheddata) => {
        setResult(fetcheddata);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={fetchedDataFun}>Clickme</button>
      {
        // for accessing values
        result.map((value) => {
          return <li>{value.title}</li>;
        })
      }
    </div>
  );
}

export default FetchComponents;
