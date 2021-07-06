import Items from "./items";
import Order from "./Order";


export default function Menu(props){

    console.log(props)

    return(<div className="page">
        <Items data={props}/>
       
        </div>
    )
    }