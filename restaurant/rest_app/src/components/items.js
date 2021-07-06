import { useState, useEffect } from "react";
import Order from "./Order";
import arr from "../arr.js";

export default function Items(props) {
  console.log(props.data);

  const [data, setData] = useState([]);
  const [orderData, setOrder] = useState();
  const [total, setTotal] = useState();
  const [amount, setAmount] = useState();
  const orderArr = [];

  const romoveClick = (ID) => {
    let index = orderArr.findIndex((x) => x.id === ID);
    orderArr.splice(index, 1);

    setTotal(orderArr.reduce((n, { price }, { count }) => n + price, 0));

    setOrder(
      orderArr.map((item) => {
        return (
          <div className="item" key={item.id}>
            <h4>order</h4>
            <h5 className="headline">{item.title}</h5>
            <img src={item.image}></img>
            <br />
            {item.price}$
            {!item.isAdd && (
              <button onClick={() => romoveClick(item.id)}>remove</button>
            )}
            {item.count > 1 && <p>{item.count}</p>}
          </div>
        );
      })
    );
  };

  const handleClick = (addID) => {
    const islisted = orderArr.filter((item) => item.id === addID);
    const addeditem = arr.filter((item) => item.id === addID);

    islisted.length === 0 ? (addeditem[0].count = 1) : console.log("is listed");
    islisted.length === 0 ? orderArr.push(addeditem[0]) : addeditem[0].count++;

    setTotal(orderArr.reduce((n, { price }) => n + price, 0));
    setAmount(orderArr.reduce((n, { count }) => n + count, 0));
    console.log(amount);
    console.log(total);

    setOrder(
      orderArr.map((item) => {
        return (
          <div className="item" key={item.id}>
            <h4>order</h4>
            <h5 className="headline">{item.title}</h5>
            <img src={item.image}></img>
            <br />
            {item.price}$
            {!item.isAdd && (
              <button onClick={() => romoveClick(item.id)}>remove</button>
            )}
            {item.count > 1 && <p>{item.count}</p>}
          </div>
        );
      })
    );
  };

  useEffect(() => {
    const getData = async () => {
      console.log(arr);
      setData(
        arr.map((item) => {
          return (
            <div className="box" key={item.id}>
              <h5 className="headline">{item.title}</h5>
              <img src={item.image}></img>
              <br />
              {item.price}$
              {!item.isAdd && (
                <button onClick={() => handleClick(item.id)}>add</button>
              )}
              {item.isAdd && <p>added</p>}
            </div>
          );
        })
      );
    };
    getData();
  }, []);

  return (
    <>
      {data}
      <div className="order">
        {orderData}
        <p>total:{total}</p>
        items:{amount}
        <Order data={props.data} />
      </div>
    </>
  );
}
