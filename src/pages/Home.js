import poster from "../assets/home_poster.jpg";
import { BsFillArrowRightCircleFill} from 'react-icons/bs';

import React from 'react';
import {Link} from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { useContext } from 'react';
import { ProductContext } from '..';


export function Home() {
  const {filterstate, filterdispatch} = useContext(ProductContext);
  const {categoryFilter} = filterstate;
  return (
    <div className="home-page">
      <div className="home_poster">
      <div className="home_poster_left">
      <h1>Transform Your Anime Passion into Tangible Treasures!</h1>
      <Link to="/products" className="shop-now-btn">Shop Now <BsFillArrowRightCircleFill className="right-arrow-circle"/></Link>
      <Carousel />
      </div>
      <div  className="home_poster_right">
        <div className="home_img_container"><img src={poster} alt="home_poster" /></div>
        </div>
      </div>
      <div className="home-categories">
        <h2>Our Categories</h2>
        <div className="home-category-container">
        <Link to="/products" onClick={()=>{categoryFilter.includes('Sticker')?window.scrollTo({ top: 0, behavior: 'smooth' }):filterdispatch({type:"FILTER_BY_CATEGORY",payload:'Sticker'});window.scrollTo({ top: 0, behavior: 'smooth' })}}><div className="category-card">
          <img src="https://raw.githubusercontent.com/KamiyaGaikwad/ChibiKart/master/src/assets/Naruto_and_Kurama_Naruto_Sticker.jpg" alt="sticker" />   
          <div class="overlay">
            <h3>Sticker</h3>
            <p>Unleash the Ninja Way: Stickers that Channel the Spirit of Naruto!</p>
          </div>
        </div></Link>
        <Link to="/products" onClick={()=>{categoryFilter.includes('Oversized T-Shirt')?window.scrollTo({ top: 0, behavior: 'smooth' }):filterdispatch({type:"FILTER_BY_CATEGORY",payload:'Oversized T-Shirt'});window.scrollTo({ top: 0, behavior: 'smooth' })}}><div className="category-card">
        <img src="https://raw.githubusercontent.com/KamiyaGaikwad/ChibiKart/master/src/assets/Sukuna's_Curse_Jujutsu_Kaisen_Oversized_T-Shirt.jpg" alt="oversized-tshirt" />
        <div class="overlay">
        <h3>Oversized-Tshirt</h3>
        <p>Discover the Cursed Energy: Oversized Tees Inspired by Jujutsu Kaisen's Powerful Characters!</p>
        </div>
        </div></Link>
        <Link to="/products" onClick={()=>{categoryFilter.includes('Figurine')?window.scrollTo({ top: 0, behavior: 'smooth' }):filterdispatch({type:"FILTER_BY_CATEGORY",payload:'Figurine'});window.scrollTo({ top: 0, behavior: 'smooth' })}}><div className="category-card">
        <img src="https://raw.githubusercontent.com/KamiyaGaikwad/ChibiKart/master/src/assets/dio.jpg" alt="figurine" />
        <div class="overlay">
        <h3>Figurine</h3>
        <p>Pose in Bizarre Style: Collectible Figurines from JoJo's Bizarre Adventure that Defy Convention!</p>
        </div>
        </div></Link>
        </div>
      </div>
    </div>
  );
}
