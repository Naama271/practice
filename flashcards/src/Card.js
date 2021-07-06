import Button from "./Button";

 export default function Card(props){



return(<>

    <div data={props.data} onClick={props.onClick} key={props.id} className={props.className}>
    
    {props.image} {props.title}
    
   </div>  
   
   </>
)

}