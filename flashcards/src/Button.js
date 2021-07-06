export default function Button(props){
    console.log(props.onClick)
    
        return(
            <button onClick={props.onClick} data={props.data} id={props.id}>{props.title}</button>
        )
    }