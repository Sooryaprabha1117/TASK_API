import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty! Start shopping.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: "0" }}>
          {cart.map((item, index) => (
            <li 
              key={index} 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between",
                marginBottom: "15px", 
                borderBottom: "1px solid #ccc", 
                paddingBottom: "10px",
                maxWidth: "500px",
                margin: "auto"
              }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                style={{ width: "50px", height: "50px", borderRadius: "5px" }} 
              />
              <span style={{ marginLeft: "10px", flex: "1", textAlign: "left" }}>
                {item.title} - ${item.price}
              </span>

              
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ 
                  padding: "6px 12px",
                  backgroundColor: "#12FFA7", 
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <Link to="/">
        <button style={{ 
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default CartPage;
