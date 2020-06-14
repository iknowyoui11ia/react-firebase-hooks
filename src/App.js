// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import AddProduct from "./pages/AddProduct";
// import Product from "./pages/Product";
// import ProductEditing from "./pages/ProductEditing";
// import { Navbar } from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div className="container">
//         <Switch>
//           <Route exact path="/product" component={Product}></Route>
//           <Route exact path="/addProduct" component={AddProduct}></Route>
//           <Route
//             exact
//             path="/productEditing"
//             component={ProductEditing}
//           ></Route>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { AuthProvider } from "./pages/Auth";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
