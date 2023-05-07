import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ card, buttonVal }) {
  const navigate=useNavigate();
  const link = "#" + card.productType;
  return (
    <div className="cardComponent">
      <div class="card">
        <img src={card.productPhoto} alt="Rings" />
        <div class="card__details">
          <span class="tag">{card.productType}</span>
          <span class="tag">{card.productMetal}</span>
          <div class="name">{card.productName}</div>
          {/* navigate to productPage/#productId */}
          {buttonVal==="See More"?
          <AnchorLink href={link} style={{ textDecoration: "none" }}>
            <button id="card_details_button" onClick={()=>navigate('/products')}>{buttonVal}</button>
          </AnchorLink>
          :<button id="card_details_button">{buttonVal}</button>}
        </div>
      </div>
    </div>
  );
}

export default Card;
