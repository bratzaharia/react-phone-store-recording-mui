import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div style={{ border: ".3px solid #000", textAlign: "center" }}>
      <div>Titlu: {title}</div>

      <img src={img} style={{ width: "40%" }} />
      <div>Pret: &euro; {price}</div>
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <span>Count: &euro; {count}</span>{" "}
        <button onClick={() => increment(id)}>+</button>
      </div>
      <button onClick={() => removeItem(id)}>
        <DeleteIcon />
      </button>
      <div>Total: &euro; {total}</div>
    </div>
  );
}
