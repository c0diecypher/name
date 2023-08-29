import "./main.css";
import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const Products = () => {
  const products = productsData.map((product) => {
    return (
      <div className="item">
        <div key={product.id}>
          <img src={"./img/" + product.img} />
          <h4>{product.price}₽</h4>
          <p element={`/products/${product.id}`}>{product.name}</p>
          <li className="add-item">
            <Link to={`/products/${product.id}`}>
              <ul>Купить</ul>
            </Link>
          </li>
        </div>
      </div>
    );
  });

  return <main>{products}</main>;
};

export default Products;
