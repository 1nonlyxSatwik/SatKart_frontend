import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {

  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="productdisplay">

      {/* LEFT SIDE */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="productdisplay-right">

        <h1>{product.name}</h1>

        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <p className="new">${product.new_price}</p>
          <p className="old">${product.old_price}</p>
        </div>

        <p className="productdisplay-right-description">
          A lightweight, premium knit top with a relaxed fit and all-day comfort. Designed for movement.
        </p>

        {/* SIZE SELECT */}
        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={selectedSize === size ? "size-option active" : "size-option"}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button className="nike-add-btn" onClick={() => addToCart(product.id)}>
          Add to Bag
        </button>

        <p className="meta"><span>Category:</span> Women, T-Shirt</p>
        <p className="meta"><span>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
