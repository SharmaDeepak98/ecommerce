import { useState, useEffect } from "react";
import useShop from "../files/shopContext";

const Card = ({ name, imageUrl, price }) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleClick = () => {
    const product = { name, imageUrl, price };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return(
  <>
  <div
    className="wrapper"
    style={{ backgroundImage: `url(${imageUrl[0]})` }}>
    <div
      className="add-btn"
      onClick={handleClick}
      style={{ background: isInCart ? "red" : "green" }}>
      <p>{isInCart ? "-" : "+"}</p>
    </div>
    <div className="textcontainer">
      <div className="title">
        {name.lenght < 13 ? name : name.toLowerCase().slice(0, 13) + `...`}
      </div>
      <div className="cost">{price}</div>
    </div>
  </div>
</>


)


}














// import { useEffect, useState } from "react";
// import useShop from "../files/shopContext";

// const Card = ({ imageURL, name, cost }) => {
//   const [isInCart, setIsInCart] = useState(false);
//   const { addtocart, products, removefromcart } = useShop();

//   useEffect(() => {
//     const productIsInCart = products.find((product) => product.name === name);

//     if (productIsInCart) {
//       setIsInCart(true);
//     } else {
//       setIsInCart(false);
//     }
//   }, [products, name]);

//   const handleClick = () => {
//     const product = { name, imageURL, cost };

//     if (isInCart) {
//       removefromcart(products);
//     } else {
//       addtocart(products);
//     }
//   };

//   // console.log(imageURL);
//   return (
    // <>
    //   <div
    //     className="wrapper"
    //     style={{ backgroundImage: `url(${imageURL[0]})` }}>
    //     <div
    //       className="add-btn"
    //       onClick={handleClick}
    //       style={{ background: isInCart ? "red" : "green" }}>
    //       <p>{isInCart ? "-" : "+"}</p>
    //     </div>
    //     <div className="textcontainer">
    //       <div className="title">
    //         {name.lenght < 13 ? name : name.toLowerCase().slice(0, 13) + `...`}
    //       </div>
    //       <div className="cost">{cost}</div>
    //     </div>
    //   </div>
    // </>
//   );
// };

export default Card;
