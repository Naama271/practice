import Card from './Card'
import Button from './Button'
import {useEffect, useState} from 'react'
import Input from './Input'

export default function List(props){

     const [isEdit , setIsEdit] = useState(false)

    const deleteCard=()=>{
        localStorage.removeItem(props.data);

  }

  useEffect(() => {
    console.log(
     "[term]: I run on initial render AND after every rerender IF term has changed since last render"
    );
  }, [props.data]);


  const editCard=(ID, title)=>{
    // localStorage.removeItem(props.data);
  
    setIsEdit(true)
    console.log(ID, title)
    // let image = document.querySelector('input[placeholder="update image URL"]').value;
    // // let newTitle = document.querySelector('input[placeholder="update title"]').value;
    // let newObj = { image, title, isTurn: false};
    // console.log(newObj)
    // localStorage.setItem(title, JSON.stringify(newObj));
}

const save=(ID, title)=>{

    setIsEdit(false)
    console.log(ID, title)

        let image = document.querySelector('input[placeholder="update image URL"]').value;
    // let newTitle = document.querySelector('input[placeholder="update title"]').value;
    let newObj = { image, title, isTurn: false, id:ID};
    console.log(newObj)
    localStorage.setItem(title, JSON.stringify(newObj));
}

   console.log(props)
    return props.data.map((card) =>
   <div className="width100">
      <Card data={card.title} key={card.id} className="list" image={card.image} id={card.id} title={card.title}/>
      <Button onClick={()=>deleteCard()} title="delete"/>
      <Button onClick={()=>editCard(card.id, card.title)} title="edit"/><br />
      { isEdit &&     <Button onClick={()=>save(card.id, card.title)} title="SAVE"/>}
      { isEdit && <Input placeholder="update image URL" />}
   </div>
  );

}