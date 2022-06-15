import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  //console.log('we are testing')
  return (
    <div className="container">
      
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
