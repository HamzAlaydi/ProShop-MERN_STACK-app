import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Products from "../Components/Products";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const products = await axios.get("/api/products");
      setProducts(products.data);
    };
    fetchData();
  }, []);

  if (products) {
    return (
      <>
        <Row>
          {products.map((product) => (
            <Col xs={12} sm={6} lg={4} xl={3} key={product._id}>
              <Products product={product} />
            </Col>
          ))}
        </Row>
      </>
    );
  } else {
    <h1>Loading...</h1>;
  }
};

export default Home;
