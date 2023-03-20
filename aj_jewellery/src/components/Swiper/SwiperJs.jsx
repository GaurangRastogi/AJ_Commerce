import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Card from '../Card/Card';
import './SwiperJs.css';



register();

function SwiperJs() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      // const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      // console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
    >
      <swiper-slide><Card/></swiper-slide>
      <swiper-slide><Card/></swiper-slide>
      <swiper-slide><Card/></swiper-slide>
      <swiper-slide><Card/></swiper-slide>
      <swiper-slide><Card/></swiper-slide>
      
    </swiper-container>
  );
};


export default SwiperJs;