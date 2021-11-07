import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log("Tareq", cart);
  
  let total = 0;
  let names = [];

  for (const person of cart) {
    total = total + person.age;
    names.push(person.name);
  }
    
  return (
    //   Adding Data to the Cart
    <div className="cart-div" >
      <h1 class="text-success" > Cart </h1>
      <h4 class="text-danger"> <p> Total Ordered : {props.cart.length}</p>  </h4>
      <h4 class="text-danger"> Total Sum: {total} </h4>
      <h4> Name:- {names.join(",")} </h4>
    </div>
  );
};

export default Cart;
