import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true); 
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching product:", error);
        setLoading(false); 
      });
  }, [id]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      padding: "20px"
    }}>
      {loading ? (
        
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: "50px",
            height: "50px",
            border: "5px solid #ddd",
            borderTop: "5px solid #3498db",
            borderRadius: "50%",
            animation: "spin 10s linear infinite"
          }}></div>
          <p>Loading...</p>

          
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      ) : (
        
        <div style={{
          display: "flex",
          flexDirection: "row",
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          maxWidth: "700px",
          width: "100%",
          alignItems: "center"
        }}>
         
          <div style={{ flex: "1", textAlign: "center" }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{
                width: "100%",
                maxWidth: "250px",
                height: "300px",
                objectFit: "contain",
                borderRadius: "8px"
              }} 
            />
          </div>

          
          <div style={{ flex: "2", paddingLeft: "20px" }}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3 style={{ color: "#e44d26" }}>Price: ${product.price}</h3>

           
            <div style={{ display: "flex", gap: "10px" }}>
              <button 
                onClick={() => addToCart(product)}
                style={{ backgroundColor: "#28a745", color: "white", padding: "10px", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                Add to Cart 
              </button>

              <Link to="/">
                <button style={{ backgroundColor: "#3498db", color: "white", padding: "10px", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
