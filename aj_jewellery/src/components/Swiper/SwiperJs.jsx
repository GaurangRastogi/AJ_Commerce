import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import Card from '../Card/Card';
import './SwiperJs.css';



register();

function SwiperJs() {
  const swiperElRef = useRef(null);
  const [items,setItems]=useState([]);

  const getUser= async()=>{

    const response=await fetch('http://localhost:3001/user/getProductItems');

    const json=await response.json();

    setItems(json);

  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
    >
    {/* map the Card item with product... of certain item */}
    {items.map((item) => (

      <swiper-slide><Card key={item._id} card={item}/></swiper-slide>

    ))}


      {/* <swiper-slide><Card/></swiper-slide>
      <swiper-slide><Card/></swiper-slide>
      <swiper-slide><Card/></swiper-slide>
      <swiper-slide><Card/></swiper-slide> */}
      
    </swiper-container>
  );
};


export default SwiperJs;