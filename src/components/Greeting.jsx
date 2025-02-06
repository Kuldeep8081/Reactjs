
const Greeting=(props)=>{
    return (
        <div>
            {props.day==="morning"?( <h1>Good Morning</h1>):props.day==="afternoon"? (<h1>Good afternoon</h1>):(<h1>Not Matched!</h1>)}
        </div>
    )
}

export default Greeting;