import { useState, useEffect } from "react";

export default function Order(props) {
   console.log(props.data)

  const [orderArr, setData] = useState();

  const [total, setTotal] = useState("0");

  // const handleClick = (removeID) => {
  //   console.log(props.data)
  //   setData(
  //     props.data.map((item) => {
  //       return (
  //         <div className="list" key={item.id}>
  //           <h5 className="headline">{item.title}</h5>

  //           {item.price}$
  //           {item.isAdd && ( <button onClick={() => handleClick(item.id)}>remove</button>
  //           )}
      
  //         </div>
  //       );
  //     })
  //   );
  // };

  // useEffect(() => {
  //   console.log(props.data)
  //   let orderData =props.data
  //   const getData = async () => {
  
     
  //     setTotal(
  //       orderData.map((item) => {
  //         return (<div className="list" key={item.id}>{item.price}</div>
  //         );
  //       })
  //     );

  //     setData(
  //       orderData.map((item) => {
  //         return (
  //           <div className="list" key={item.id}>
  //             <h5 className="headline">{item.title}</h5>

  //             {item.price}$
  //             {item.isAdd && ( <button onClick={() => handleClick(item.id)}>remove</button>
  //             )}
        
  //           </div>
  //         );
  //       })
  //     );
  //   };
  //   getData();
  // }, []);

  return (<>
  <div className="page">
    {orderArr}
    </div>

    </>);
}
