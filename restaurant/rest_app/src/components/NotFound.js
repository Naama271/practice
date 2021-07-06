import { useHistory } from "react-router"

export default function NotFound(){
     let history= useHistory()

    // console.log(history.goBack())

    return(<>
    <div className="page green_text">
        "the page is not found"      <button className="green_text" onClick={()=>history.goBack()}>go back </button>  </div>
         
    </>)
}