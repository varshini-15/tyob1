var fruits = ["apple", "orange", "mango", "apple"];
for (var i = 0; i < fruits.length; i++) {
  for (var j = i + 1; j < fruits.length; j++) {
    if (fruits[i] === fruits[j]) {
      fruits.splice(j, 1);
    }
  }
}
console.log(fruits);

async function getData() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then(async (response) => {
      const data = await response.json();

      console.log(data);

      return data;
    })
    .catch((error) => {
      return error;
    });
}
var data1 = getData();
data1.map((val) => {
  return (document.getElementById("div1").innerHTML = `<p>${val.name}</p>`);
});
