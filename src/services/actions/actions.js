import { ADD_TO_CART, REMOVE_TO_CART } from '../constant';

export const addToCart = (data) => {
    console.log("actions.addToCart", data);
    return {
        type: ADD_TO_CART,
        data: data,
    }
}

export const removeToCart = (data) => {
    console.log("actions.removeToCart");
    return {
        type: REMOVE_TO_CART,
        data: data,
    }
}
