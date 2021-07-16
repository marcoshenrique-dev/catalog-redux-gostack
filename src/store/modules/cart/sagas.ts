import { AxiosResponse } from "axios";
import {all, call, select, takeLatest, put} from "redux-saga/effects";
import { IState } from "../..";
import api from "../../../services/api";
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from "./actions";
import { ActionTypes } from "./types";

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>;

function* checkProductStock ({payload}: checkProductStockRequest) {


  interface IStockResponse {
    id: number;
    quantity: number;
  }

  const {product} = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => 
      (item.product.id === product.id)
    )?.quantity ?? 0;
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if(availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }

  console.log(currentQuantity);

}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
]);
