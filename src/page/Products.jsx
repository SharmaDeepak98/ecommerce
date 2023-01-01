import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";


const Products = () => {
  const [ProductsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        setProductsData(data.products);
      });
  }, []);

  return (
    <>
      <h1 className="heading">Featured products</h1>
      <div className="product-container">
        {ProductsData.map((product, index) => {
          return (
            <Card
              key={product.id}
              imageUrl={product.images}
              name={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
