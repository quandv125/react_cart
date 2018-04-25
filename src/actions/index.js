import * as types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
};

export const onDeleteItemInCart = (product) => {
    return {
        type: types.DELETE_ITEM_IN_CART,
        product
    }
};

export const onIncrementItem = (product) => {
    return {
        type: types.INCREMENT_ITEM_IN_CART,
        product
    }
};

export const onDecrementItem = (product) => {
    return {
        type: types.DECREMENT_ITEM_IN_CART,
        product
    }
};

export const actChangeMessage = (message) => {
    return {
        type:types.CHANGE_MESSAGE,
        message
    }
};