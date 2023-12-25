import React from "react";
import "./Product.css";
import starIcon from "../images/icons/star.png";
import { useAuth } from "../context/GlobalState";

const Product = ({ id, image, price, rating, title }) => {
  const { dispatch } = useAuth();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        price: price,
        title: title,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} alt="starIcon" />
            </p>
          ))}
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
