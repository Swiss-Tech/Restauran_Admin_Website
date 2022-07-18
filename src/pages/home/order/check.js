import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";



function FeaturedProduct(props) {
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    setProducts([{
        id:1,
        item:"piza",
        city:'addis',
        state:"pending",
        name:"piza",
    }]);
  }, []);


  return (
    <div>
      <h1> Your Products List is shown below:</h1>
      <div className="item-container">
       
        {products.map((product) => (
          <div className="card" key={product.id}>
            {" "}
           
            <h3>{product.item}</h3>
            <p>
              {product.city}, {product.state}
            </p>
            <Router>
              <Link to="/productdetails">More Details</Link>

              <Routes>
                <Route path="/productdetails">
                <ProductDetails product={product}/>
                </Route>
              </Routes>
            </Router>
          </div>
        ))}
      </div>
    </div>
  );
}



export default FeaturedProduct;

function ProductDetails(props) {
    const {name, color} = props.product;
    
      return (
        <div>
          <div>
            <h1>{name}</h1>
            <h1>{color}</h1>
          </div>
        </div>
      );
    }

