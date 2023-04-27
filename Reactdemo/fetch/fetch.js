class FetchData extends React.Component{
    state = {
        data : [],
    };
    fetchedDataFun(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            return res.json();
        })
        .then((fetchedData)=>{
            this.setState({
                data : fetchedData
            })
            
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render(){
        
        return (
            <div>
                <button
                    onClick={() => {
                        this.fetchedDataFun();
                    }}>Clickme</button>

                     { // for accessing values
                        this.state.data.map((value) => {
                          return (
                        <table border="1px">

                            <tr>
                                <td>{value.userId}</td>
                                <td>{value.title}</td>
                            </tr>
                        </table>
                         );

                    })};

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
