import React from "react";
import "./Navbar.scss";

export const Navbar = () => (
  <nav className="nav">
    <a href="/" className="nav-logo">
      Home Page
    </a>
    <ul className="nav-list">
      <li className="nav-item">
        <a href="/product" className="nav-link">
          Product
        </a>
      </li>
      <li className="nav-item">
        <a href="/addProduct" className="nav-link">
          Add Product
        </a>
      </li>
      <li className="nav-item">
        <a href="/productEditing" className="nav-link">
          Product Editing
        </a>
      </li>
    </ul>
  </nav>
);
