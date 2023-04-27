class FetchData extends React.Component{
    state = {
        data : "Manoj",
    };
    fetchedDataFun(){
        this.setState({
        data : "Murali"
    })
    
    }
    render(){
        
        return (
            <div>
                <button
                    onClick={() => {
                        this.fetchedDataFun();
                    }}>Clickme</button>

                     {<h2>{this.state.data}</h2>}

            </div>
        )
        
    }


}
ReactDOM.render(<FetchData/>,document.getElementById('container'))

// async function getData(){
//     await fetch("https://jsonplaceholder.typicode.com/posts")  
//     .then(async (response) => {
//         console.log(response);
//         const data = await response.json();//b4 json method
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     })
// }
// getData();
