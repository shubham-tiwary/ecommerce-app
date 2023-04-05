import React from 'react'
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className="col-3">
        <div className="product-card position-relative">
          <div className="product-image">
            <img src="images/watch.jpg" alt="product image" />
          </div> 
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Multi-colored kids headphones for students
            </h5>
            <ReactStars count={5} size={24} value="4" edit={false} activeColor="#ffd700" />
            <p className="price">₹499</p>
          </div>
          <div className="action-bar"></div>
        </div>
    </div>
  )
}

export default ProductCard;