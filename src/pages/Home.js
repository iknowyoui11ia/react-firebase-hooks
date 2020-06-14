import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddProduct from "./Product/AddProduct";
import Product from "./Product/Product";
import ProductEditing from "./Product/ProductEditing";
import { Navbar } from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/product" component={Product}></Route>
            <Route exact path="/addProduct" component={AddProduct}></Route>
            <Route
              exact
              path="/productEditing"
              component={ProductEditing}
            ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Home;
