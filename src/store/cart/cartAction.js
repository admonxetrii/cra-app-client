import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionConstant";

export function addToCart(data) {
  return {
    type: ADD_TO_CART,
    data,
  };
}

export function removeFromCart(data) {
  return {
    type: REMOVE_FROM_CART,
    data,
  };
}
