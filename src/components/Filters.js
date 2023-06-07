import {TbCurrencyRupee} from 'react-icons/tb';
import { useContext } from 'react';
import { ProductContext } from '..';
import {VscPerson} from 'react-icons/vsc';
import {BiSticker} from 'react-icons/bi';
import {FaTshirt} from 'react-icons/fa';

export function Filters() {
  const {filterstate, filterdispatch} = useContext(ProductContext);
  const {categoryFilter,animeFilter,priceRange} = filterstate;
  console.log("state",filterstate)
  return (
    <div className="filters-container">
      <div className="filters-header">
        <h3>Filters</h3>
        <button className="clear-btn" onClick={()=>filterdispatch({type:'RESET_FILTERS'})}>Clear</button>
      </div>
      <div className="slider-container">
        <h3 className="slider-container-h3">Price</h3>
        <label className="slider-label">
          <div><span><TbCurrencyRupee className="rupee-icon"/>800</span><span><TbCurrencyRupee className="rupee-icon"/>5000</span><span><TbCurrencyRupee className="rupee-icon"/>9000</span></div>
          <input type="range" min="800" max="9000" value={priceRange} onChange={(e)=>filterdispatch({type:"FILTER_BY_PRICE_RANGE",payload:e.target.value})}/>
        </label>
      </div>
      <div className="category-container">
        <h3>Category</h3>
        <label className="category-label">
          <input type="checkbox" checked={categoryFilter.includes('Oversized T-Shirt')} value='Oversized T-Shirt' onChange={(e)=>filterdispatch({type:"FILTER_BY_CATEGORY",payload:e.target.value})} />
          {/* <FaTshirt />*/}Oversized T-Shirt
        </label>
        <label className="category-label">
          <input type="checkbox" checked={categoryFilter.includes('Sticker')} value='Sticker' onChange={(e)=>filterdispatch({type:"FILTER_BY_CATEGORY",payload:e.target.value})} />
          {/* <BiSticker /> */}Sticker
        </label>
        <label className="category-label">
          <input type="checkbox" checked={categoryFilter.includes('Figurine')} value='Figurine' onChange={(e)=>filterdispatch({type:"FILTER_BY_CATEGORY",payload:e.target.value})} />
          {/* <VscPerson/> */}Figurine
        </label>
      </div>
      <div className="anime-container">
        <h3>Anime</h3>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes('Naruto')} value='Naruto' onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          Naruto
        </label>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes('Jujutsu Kaisen')} value='Jujutsu Kaisen' onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          Jujutsu Kaisen
        </label>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes('Attack on Titan')} value='Attack on Titan' onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          Attack on Titan
        </label>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes('Death Note')} value='Death Note' onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          Death Note
        </label>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes('Demon Slayer')} value='Demon Slayer' onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          Demon Slayer
        </label>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes("JoJo's Bizarre Adventure")} value="JoJo's Bizarre Adventure" onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          JoJo's Bizarre Adventure
        </label>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes('Yuri on Ice')} value="Yuri on Ice" onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          Yuri on Ice
        </label>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes('Spy X Family')} value="Spy X Family" onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          Spy X Family
        </label>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes('Wonder Egg Priority')} value="Wonder Egg Priority" onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          Wonder Egg Priority
        </label>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes('Tokyo Revengers')} value="Tokyo Revengers" onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          Tokyo Revengers
        </label>
        <label className="anime-label">
          <input type="checkbox"  checked={animeFilter.includes('SK8 the Infinity')} value="SK8 the Infinity" onChange={(e)=>filterdispatch({type:"FILTER_BY_ANIME",payload:e.target.value})} />
          SK8 the Infinity
        </label>
      </div>
      <div className="rating-container">
        <h3>Rating</h3>
        <label className="category-label">
          <input type="radio" name="rating" value="4" onChange={(e)=>filterdispatch({type:'FILTER_BY_RATING',payload:Number(e.target.value)})} />
          4 stars and above
        </label>
        <label className="category-label">
          <input type="radio" name="rating" value="3" onChange={(e)=>filterdispatch({type:'FILTER_BY_RATING',payload:Number(e.target.value)})} />
          3 stars and above
        </label>
        <label className="category-label">
          <input type="radio" name="rating" value="2" onChange={(e)=>filterdispatch({type:'FILTER_BY_RATING',payload:Number(e.target.value)})} />
          2 stars and above
        </label>
        <label className="category-label">
          <input type="radio" name="rating" value="1" onChange={(e)=>filterdispatch({type:'FILTER_BY_RATING',payload:Number(e.target.value)})} />
          1 star and above
        </label>
      </div>
      <div className="sortBy-container">
        <h3>Sort By</h3>
        <label className="category-label">
          <input type="radio" name="sortBy" onChange={()=>filterdispatch({type:'SORT_BY_PRICE',payload:'LTH'})} />
          Price - Low to High
        </label>
        <label className="category-label">
          <input type="radio" name="sortBy" onChange={()=>filterdispatch({type:'SORT_BY_PRICE',payload:'HTL'})} />
          Price - High to Low
        </label>
      </div>
    </div>
  );
}
