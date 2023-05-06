import React from 'react'
import './Card.css';
import ProductImage from '../../images/product1.jpg';

function Card({card}) {
  return (
    <div className="cardComponent">
        <div class="card">
            <img src={card.productPhoto} alt="Rings"/>

            <div class="card__details">
                <span class="tag">{card.productType}</span>

                <span class="tag">{card.productMetal}</span>

                <div class="name">{card.productName}</div>
                
                {/* navigate to productPage/#productId */}
                <button id="card_details_button">See Product</button>
            </div>
        </div>
    </div>
  )
}

export default Card;