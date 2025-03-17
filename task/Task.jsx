import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Task = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true); 
    fetch("https://fakestoreapi.com/products?limit=8")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false); 
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>

     
      <input 
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />

     
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <div className="loader"></div>
        </div>
      ) : (
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} style={{
                width: "250px",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                background: "#fff"
              }}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{ width: "100px", height: "150px", objectFit: "contain" }} 
                />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
                <p style={{ fontSize: "14px", color: "#555", textAlign: "justify" }}>
                  {product.description}
                </p>
                <h4 style={{ color: "#e44d26" }}>Price: ${product.price}</h4>
              
                <Link to={`/product/${product.id}`}>
                  <button style={{
                    marginTop: "10px",
                    padding: "10px 15px",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}>
                    View Product
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}

     
<style>
  {`
    .loader {
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3498db;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}
</style>

    </div>
  );
};

export default Task;
