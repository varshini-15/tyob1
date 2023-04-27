const element = <h2>Elements using JSX </h2>;
console.log(element);
ReactDOM.render(element, document.getElementById("container"));

var arr = ["a", "b", "c", "d"];
let values = arr.map((val) => {
  return (
    <ol>
      <li>{val}</li>
    </ol>
  );

  //not like arr[ind]
});
ReactDOM.render(values, document.getElementById("container"));

async function getData() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then(async (response) => {
      console.log(response);
      const data = await response.json();
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getData();

const url = getData();
const urlarr = Object.keys(url);
console.log(`urlarr ${urlarr}`);
// console.log(url);
const data = urlarr.map((val) => {
  return <p>{val}</p>;
});
ReactDOM.render(urlarr, document.getElementById("container"));
