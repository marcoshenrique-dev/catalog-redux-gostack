import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import {Link} from "react-router-dom";

import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import CatalogItem from './components/CatalogItem';

import logo from "../assets/logo.png";
import { useSelector } from 'react-redux';
import { IState } from '../store';

import { Badge } from 'antd';

const Catalog: React.FC = () => {

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  const quantity = useSelector<IState, number>(state => {

    let counter = 0;

    state.cart.items.map(item => {
      counter += item.quantity;
    });

    return counter;
    
  });

  useEffect(() => {
    api.get("products").then(response => setCatalog(response.data));
  }, []);

  return (
  <main className="p-5">

  <header className="flex w-full h-20 p-2 mb-10 mt-5 flex-row justify-between justify-items-center">
  <img className="w-20 h-20 ml-10" src={logo} alt="ReduxStore"></img>

  <Link  to="/cart"  className="mr-20">
    <Badge count={quantity}>
    <FiShoppingCart color="#1F4C8E" className="w-10 h-10" />
  </Badge>
  </Link>

  </header>

  {catalog.map(product => (
   <CatalogItem key={product.id} product={product} />
  ))}
  
  </main>
  );
}

export default Catalog;