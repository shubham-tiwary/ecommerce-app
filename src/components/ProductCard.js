import React from 'react'

const ProductCard = () => {
  return (
    <div className="col-3">
        <div className="product-card">
          <div className="product-image">
            <img src="images/watch.jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title"></h5>
          </div>
        </div>
    </div>
  )
}

export default ProductCard;