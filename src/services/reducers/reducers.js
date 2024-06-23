import { ADD_TO_CART, REMOVE_TO_CART } from '../constant';

const initialState = {
    cardData: [],
};

export default function cardItem(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer.addToCart", action.data);
            return {
                ...state,
                cardData: [...state.cardData, action.data],
            };
        case REMOVE_TO_CART:
            console.log("reducer.REMOVE_TO_CART", action.data);
            // state.pop()
            return {
                ...state,
                cardData: state.cardData.filter(item => item.id !== action.data.id),
            };
        default:
            return state;
    }
}
