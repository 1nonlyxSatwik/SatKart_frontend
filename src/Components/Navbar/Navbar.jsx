import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className="navbar">
      
      {/* LOGO */}
      <Link to="/" onClick={() => setMenu("shop")} className="nav-logo">
        <img src={logo} alt="" />
        <p>SatKart</p>
      </Link>

      {/* MOBILE DROPDOWN */}
      <img
        onClick={dropdown_toggle}
        className="nav-dropdown"
        src={nav_dropdown}
        alt=""
      />

      {/* MENU ITEMS */}
      <ul ref={menuRef} className="nav-menu">
        <li
          className={menu === "shop" ? "active" : ""}
          onClick={() => setMenu("shop")}
        >
          <Link to="/">Shop</Link>
        </li>

        <li
          className={menu === "mens" ? "active" : ""}
          onClick={() => setMenu("mens")}
        >
          <Link to="/mens">Men</Link>
        </li>

        <li
          className={menu === "womens" ? "active" : ""}
          onClick={() => setMenu("womens")}
        >
          <Link to="/womens">Women</Link>
        </li>

        <li
          className={menu === "kids" ? "active" : ""}
          onClick={() => setMenu("kids")}
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      {/* LOGIN + CART */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
