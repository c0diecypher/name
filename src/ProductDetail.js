import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";
import "./Product.css";
import Swiper from "./Swiper";
import SizeInfo from "./Sizeinfo";

function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);

  return (
    <nav className="full-item">
      <div>
        <img src={"/img/" + thisProduct.img} />
        <hr className="hr-line" />
        <h4>{thisProduct.price}₽</h4>
        <p>{thisProduct.name}</p>
        <hr className="hr-line" />
        <SizeInfo />
        <Swiper />
        <li className="add-item">
          <ul>Купить</ul>
        </li>
      </div>
    </nav>
  );
}

export default ProductDetail;
