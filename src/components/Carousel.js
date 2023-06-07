import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import React, { useState } from 'react';
import { useContext } from "react";
import { ProductContext } from "..";
import { ProductCard } from "./ProductCard";


export const Carousel = () => {
  const {state:{trending}} = useContext(ProductContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? trending.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    const totalCards = trending.length;
    setCurrentIndex((prevIndex) => (prevIndex === totalCards - 1 ? 0 : prevIndex + 1));
  };

  const trendingTwo = trending.filter(item => item._id === trending[currentIndex]._id || item._id === trending[(currentIndex + 1) % trending.length]._id);


  return (
    <div>
      <div>
      <div className='carousel-header'>
        <h3>Popular Merch</h3>
        <div>
          <button onClick={handlePrev}><MdKeyboardArrowLeft /></button>
          <button onClick={handleNext}><MdKeyboardArrowRight /></button></div>
        </div>
        <div className="carousel-cards-conatiner">
          {trendingTwo.map((product)=><ProductCard product={product} />)}
        </div>
      </div>
    </div>
  );
};
