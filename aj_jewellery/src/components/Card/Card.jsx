import React from 'react'
import './Card.css';
import ProductImage from '../../images/product1.jpg';

function Card() {
  return (
    <div className="cardComponent">
        <div class="card">
            <img src={ProductImage} alt="Rings"/>

            <div class="card__details">
                <span class="tag">Ring</span>

                <span class="tag">Gold</span>

                <div class="name">Ladies Ring</div>
                <button id="card_details_button">See Product</button>
            </div>
        </div>
    </div>
  )
}

export default Card;