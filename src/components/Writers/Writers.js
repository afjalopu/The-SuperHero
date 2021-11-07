import React from "react";
import "./Writer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Writers = (props) => {
  console.log( props);
  const { name, age, picture, salary, company, gender } = props.person;
  const element = <FontAwesomeIcon icon={faShoppingCart} />
  
  return (
    //   Creating The Card
      <div class="col">
        <div class="card">
          <div class="card-body my-4">
            <img className="image" class="my-4" src={picture} width="100%" height="150px" alt="" /> 
            <h5 class="card-title text-primary "> {name} </h5>
            <p class="card-title text-dark"> Company : { company }</p>
            <p> Gender: {gender} </p>
            <h5 class="card-text">
             Age : {age} 
            </h5>
          </div>
          <div class="card-footer">
          <h5 class="card-title">Salary : {salary} </h5>
          <button 
            onClick={ () => props.handleAddToCart(props.person)}
          className="btn-regular" 
          > { element } Add To </button>
          </div>

           {/* Different Types of Social Media  */}
          <div className="social-media">
                  <p> <i class="fab fa-facebook facebook"></i> 
                      <i class="fab fa-instagram intagram"></i>
                      <i class="fab fa-twitter twitter"></i>
                  </p>
          </div>
        </div>
      </div> 

  );
};

export default Writers;
