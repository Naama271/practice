import { useState } from "react";
import Card from "./Card"

export default function Cards(props) {
  const [data, setData] = useState(props.data);
  const [update, setUpdate] = useState();

  const turn = (id) => {
    let index = props.data.findIndex((x) => x.id === id);
    let isturn = data[index].isTurn;
    !isturn
      ? data[index].isTurn = true
      : data[index].isTurn = false;

    setUpdate(
      data.map((card) => {
        return !card.isTurn ? (
          <Card data={card.title} onClick={() => turn(card.id)} key={card.id} className="card flip-card" title={card.title} id={card.id}/>
        ) : (
          <Card data={card.title} onClick={() => turn(card.id)} key={card.id} className="card green flip-card" image={<img src={card.image}/>} id={card.id}/>
        );
      })
    );
  };
  return data.map((card) =>
    !card.isTurn ? (
      <Card data={card.title} onClick={() => turn(card.id)} key={card.id} className="card green " image={<img src={card.image}/>} id={card.id}/>
    ) : (
      <Card  data={card.title} onClick={() => turn(card.id)} key={card.id} className="card font80" title={card.title} id={card.id}/>
    )
  );
}
