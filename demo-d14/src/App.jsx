import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";

function App() {
  // const [count, setCount] = useState(0)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }, []);

  if (products.length == 0) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
    <Header />
      <div className="container mt-3">
        <div className="row">
          {products.map((item) => (
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
