import React from 'react';

import {useSelector} from "react-redux";
import { IState } from '../store';
import { ICartItem } from '../store/modules/cart/types';

const Cart: React.FC = () => {

  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  console.log(cart);

  return (
    <div>

      <h1 className="text-3xl font-medium ml-20 mt-10 mb-10">Carrinho</h1>
    <table className="w-10/12 ml-20 mt-5">
      <thead className="mb-20 bg-gray-100">
        <tr className="h-10">
          <th className="w-1/4">
            Produto
          </th>
          <th className="w-1/4">
            Preço
          </th>
          <th className="w-1/4">
            Quantidade
          </th>
          <th className="w-1/4">
            Subtotal
          </th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map(item => (
            <tr className="border border-gray-300 p-3 rounded h-10" key={item.product.id}>
              <td className="text-center">{item.product.title}</td>
              <td className="text-gray-600 text-center">{item.product.price}</td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center">{(item.product.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  );
}

export default Cart;