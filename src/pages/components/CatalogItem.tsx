import React from 'react';
import { useCallback } from 'react';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';
import {useDispatch, useSelector} from "react-redux";
import { IState } from '../../store';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {

  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch]);

  return (
    <div className="w-11/12 border border-gray-300 p-3 rounded mt-4 ml-10">
    <article className="flex flex-row justify-around" key={product.id}>
    <strong>{product.title}</strong> 
    <span className="text-gray-600">R$ {product.price}</span>

    {
      hasFailedStockCheck === true ? <span style={{color: "red"}}>Falta de Estoque</span> :
      <button type="button" className="text-blue-600 " onClick={handleAddProductToCart}><strong>Comprar</strong></button>
    }

  </article>
  </div>
  );
}

export default CatalogItem;