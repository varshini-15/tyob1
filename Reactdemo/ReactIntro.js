console.log('Reactjs');

let h1 = React.createElement("h1",{className : "data"},"The First Reactjs Page")
ReactDOM.render(h1,document.getElementById('container'))

let ul = React.createElement(
    "ul",
    null,
    React.createElement("li",null,"Ram"), // from third arg it takes arguments
    React.createElement("li",null,"Shyam"),
    React.createElement("li",null,"Ravi")
    
);

ReactDOM.render(ul,document.getElementById('container'))


// iterating array in list in html page
var arr = ['a','b','c','d']

let values = arr.map((val,ind)=>{
    return React.createElement("li",{key : ind},val);
});
const allElements = React.createElement("div",null,h1,ul,values)
ReactDOM.render(allElements, document.getElementById('container'));

const element = <h2>Elements using JSX </h2>
ReactDOM.render(elements, document.getElementById('container'));

