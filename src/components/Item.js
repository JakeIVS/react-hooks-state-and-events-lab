import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  const cartClass = inCart ? 'in-cart' : ''
  function toggleCart() {
    setCart(inCart=>!inCart)
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{inCart ? 'Remove From Cart' : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
