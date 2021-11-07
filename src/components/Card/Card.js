import "./Card.css";
import React, { useState, useEffect } from "react";
import Writers from "../Writers/Writers";
import Cart from "../Cart/Cart";

const Card = () => {
  const [persons, setPerson] = useState([]);
  const [cart, setCart] = useState([]);

  //Fetching the Data
  useEffect(() => {
    fetch("./tools.JSON")
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);

  const handleAddToCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart);
  };

  return (
    <div className="mainContainer">
    
       {/* Mapping the Persons Name and Controlling Handle Cadd to Cart */}

      <div class="row row-cols-1 row-cols-md-4 g-4">
        {persons.length &&
          persons.map((person) => (
            <Writers
              person={person}
              key={person._id}
              handleAddToCart={handleAddToCart}
            />
          ))}
      </div>

      <div className="calculate">
          <Cart cart={cart} />
      </div>

    </div>
  );
};

export default Card;
