import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#222",
      color: "white"
    }}>
      <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "22px" }}>
        Product Store
      </Link>

      <Link to="/cart" style={{ position: "relative", textDecoration: "none", color: "white" }}>
        <span style={{ fontSize: "25px" }}>🛒</span>
        {cart.length > 0 && (
          <span style={{
            position: "absolute",
            top: "-5px",
            right: "-10px",
            background: "red",
            color: "white",
            fontSize: "12px",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
