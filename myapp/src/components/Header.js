import React from "react";
import logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import { auth } from "../firebase";

const Header = () => {
  const { user, basket } = useAuth();

  const handleAuthantication = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="header-logo" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthantication}>
            <span className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} alt="shoppingCart" />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
