import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

const Routes = () => {  



  return (
  <BrowserRouter>
    <Route path="/" exact component={Catalog} />
    <Route path="/cart" component={Cart} />
    </BrowserRouter>
  )
};

export default Routes;