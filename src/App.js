import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddProduct from "./pages/AddProduct";
import Product from "./pages/Product";
import ProductEditing from "./pages/ProductEditing";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
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
  );
}

export default App;
