import useShop from "../files/shopContext";
import Card from "../components/Card";

const Cart = () => {
  const { total, products } = useShop();

  return (
<>
          <h1 className="heading">your total ={total}</h1>
    <div className="product-container">

      {products.map((cartProduct, index) => {
        return (
          <>
            <Card
              key={index}
              name={cartProduct.name}
              imageUrl={cartProduct.imageUrl}
              price={cartProduct.price}
            />
          </>
        );
      })}
    </div>
</>
  );
};

export default Cart;
