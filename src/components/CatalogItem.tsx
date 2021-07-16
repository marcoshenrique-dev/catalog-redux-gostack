import React from 'react';
import { useCallback } from 'react';
import { addProductToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import {useDispatch} from "react-redux";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {

  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch]);

  return (
    <article key={product.id}>
    <strong>{product.title}</strong> {" - "}
    <span>{product.price}</span>

    <button type="button" onClick={handleAddProductToCart}>Comprar</button>
  </article>
  );
}

export default CatalogItem;