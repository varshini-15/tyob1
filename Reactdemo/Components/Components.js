console.log('Components');

// Class Components - statefull components
    // before 16.8
    // render method is mandatory
    // should extends React.Component
    // can have userdefined tags - (collection of tags)


class Data extends React.Component{
    render(){
        return (
            <div>
                <h1> Class Component </h1>
                <p> Render method is mandatory</p>
            </div>
        )
    }
}
ReactDOM.render(<Data />,document.getElementById('container')) 
// (<Data></Data>)


//Functional Components - Stateless components
//before 16.8
//there were no life cycle methods
function FuncCompo(){
   
        return (
            <div>
            <h1>Functional Component</h1>
            </div>
        )
    
}
// ReactDOM.render(<FuncCompo />,document.getElementById('root')) 
ReactDOM.render(<div><Data /><FuncCompo /></div>,document.getElementById('container'))

