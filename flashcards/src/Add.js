import Input from "./Input";
import Button from "./Button"

let uniqid = require('uniqid');

export default function Add(){
    const handleClick = () => {
        let image = document.querySelector('input[placeholder="add image URL"]').value;
        let title = document.querySelector('input[placeholder="add title"]').value;
        let newObj = { image, title, isTurn: false, id: uniqid() };
        console.log(newObj)
        localStorage.setItem(title, JSON.stringify(newObj));
        
        // updateList();
        // console.log("handle click")
      };

    return(<div className="add_div">
      <div>
        <Input placeholder="add image URL" />
        <Input placeholder="add title" />
      <Button onClick={()=>handleClick()} title="add new card"/>
      </div>
    </div>)
    }