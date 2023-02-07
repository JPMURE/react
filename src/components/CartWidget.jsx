import React from 'react';
import "../style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus}  from "@fortawesome/free-solid-svg-icons";



function CartWidget() {
    return (
        <div>
        <FontAwesomeIcon icon={ faCartPlus } /> 
        </div>
      );
    }

export default CartWidget