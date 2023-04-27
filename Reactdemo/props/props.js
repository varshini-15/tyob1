class ComponentA extends React.Component{
    state = {
        myArray : ["Ganga","Varshini","Meera","Lavanya"],
        name:"varshini"
    }
    render(){
        return(<>
                    <div>
                This is Component A using state
               
            </div>
            <h1>{this.state.name}</h1>
            <button onClick={()=>{
                this.setState({
                    name:"Meera"
                })
            }}>Change</button>   
             <ComponentB propsArray = {this.state.myArray} name={this.state.name}/>                                                                             
            </>

        )
    }
}
class ComponentB extends React.Component{
    
    render(){
        return(<>
        <div>
                This is Component B using state
                {this.props.propsArray.map((val)=>{
                    return <h1>{val}</h1>
                })}

            </div>
            <h1>{this.props.name}</h1>
            </>
            
        )
    }
    
}

ReactDOM.render(<ComponentA/>,document.getElementById('container'))

// class ComponentA extends React.Component{
    
//         myArray = ["Ganga","Varshini","Meera","Lavanya"]
    
//     render(){
//         return(
//             <div>
//                 This is Component A
//                 <ComponentB propsArray = {this.myArray}/>
//             </div>
//         )
//     }
// }
// class ComponentB extends React.Component{
    
//     render(){
//         return(
//             <div>
//                 This is Component B
//                 {this.props.propsArray.map((val)=>{
//                     return <h1>{val}</h1>
//                 })}
//             </div>
//         )
//     }
    
// }

// ReactDOM.render(<ComponentA/>,document.getElementById('container'))
