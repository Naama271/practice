import { useState } from "react"
import axios from 'axios'

export default  function Form(){
    const [name, setName] = useState('')
    const [login, setLogin]= useState('')
    const [image, setImage]= useState('')
    const [card, setCard]= useState('')
    
    let arr=[]

    async function onSubmit(e){
        
        e.preventDefault();
        // const name = e.target.value;
        // console.log(name)
        const {data} = await axios.get(`https://api.github.com/users/${name}`)
          console.log(data)
        //   arr.push(data)
        setLogin(data.login)
        setImage(data.avatar_url)

        setCard(<div className="card">
        {login}<img src={image}></img>
        </div>)
    
         
    // setCard(
    //         arr.map(() => {
    //           return (<div className="card">
    //           {login}<img src={image}></img>
    //           </div>
    //           );
    //         })
    //       );
        
    }


    return(<>
        <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button type="submit">search</button>
        </form>
        {card}
        </>
    );

}