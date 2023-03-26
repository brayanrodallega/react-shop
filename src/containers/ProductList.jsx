import React, { useState, useEffect } from "react";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";
import axions from "axios";

const API = "https://api.escuelajs.co/api/v1/products/"

const ProductList = () => {

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axions(API);
    setProducts(response.data);
  }, []);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
