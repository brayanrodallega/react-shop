import React, {useContext} from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "../context/AppContext";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

const MyOrder = () => {

  const {state:{cart, total}} = useContext(AppContext);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>
            ${total}
          </p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
