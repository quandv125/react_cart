import * as types from './../constants/ActionType';

var initialState = [
    {
        id : 1,
        name: 'Samsung Galaxy S9',
        image: 'https://www.didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s9-plus-chinh-hang-didongviet_1_4.jpg',
        description: 'This is Samsung Galaxy S9',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id : 2,
        name: 'Iphone 7',
        image: 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-7-plus-128gb-ll-a-quoc-te-didongviet_1.jpg',
        description: 'This is Iphone 7 from Apple',
        price: 700,
        inventory: 15,
        rating: 3
    },
    {
        id : 3,
        name: 'Iphone X',
        image: 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-x-64gb-kh-a-quoc-te-mau-bac-didongviet.jpg',
        description: 'This is Iphone 8 from Apple',
        price: 800,
        inventory: 20,
        rating: 5
    }
];

var products = (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_ITEM_TO_CART:
            console.log("reducers/products");
        return [...state];
        default:
            return state;
    }

};

export default products;