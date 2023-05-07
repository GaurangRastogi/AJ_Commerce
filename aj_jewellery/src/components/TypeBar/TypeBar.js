import React from "react";
import "./TypeBar.css";
import Card from "../Card/Card";
import { useRef } from "react";
// import './SwiperJs.css';

function TypeBar({type,products}) {
  const swiperElRef = useRef(null);
  return (
    <div className="typeBar" id={type}>

      <h4>{type}</h4>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="3"
        navigation="true"
        pagination="true"
      >
        {/* map the Card item with product... of certain item */}
        {products.map((product, i) => (
          <swiper-slide>
            <Card key={i} card={product} buttonVal={"See Product"}/>
            <a href={`#`+product._id} style={{textDecoration:'none',color:'black'}}></a>
          </swiper-slide>
        ))}

      </swiper-container>
    </div>
  );
}

export default TypeBar;
