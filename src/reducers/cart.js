import * as types from './../constants/ActionType';
import * as Message from './../constants/Message';

var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data? data : [];

var findProductInCart = (cart, product) => {
	var index = -1;
	if(cart.length > 0) {
		for (var i = 0; i < cart.length; i++) {
			if( cart[i].product.id === product.id){
				index = i;
				break;
			}
		}
	}
	return index;
}

var cart = (state = initialState, action) => {
	var { product, quantity } = action;
	var index = -1;
	switch (action.type) {
		case types.ADD_TO_CART:
			index = findProductInCart(state, product); // kiem tra su ton tai cua id trong gio hang
			if (index === -1){
				// neu khong co thi tao moi
				state.push({
					product,
					quantity
				});
			} else {
				// neu co id thi cap nhat so luong gio hang
				state[index].quantity = state[index].quantity+1;
			}
			localStorage.setItem('CART', JSON.stringify(state));
			return [...state];

		case types.DELETE_ITEM_IN_CART:
			index = findProductInCart(state, product);
			if (index !== -1) {
				state.splice(index, 1);
			}
			localStorage.setItem('CART', JSON.stringify(state));
			return [...state];
		
		case types.INCREMENT_ITEM_IN_CART:
			index = findProductInCart(state, product);
			if (index !== -1) {
				state[index].quantity = state[index].quantity + 1;
			}
			localStorage.setItem('CART', JSON.stringify(state));
			return [...state];
			
		case types.DECREMENT_ITEM_IN_CART:
			index = findProductInCart(state, product);
			if (index !== -1) {
				var qty = state[index].quantity - 1
				if (qty < 1) {
					alert(Message.MSG_ERROR_ITEM);
				} else {
					state[index].quantity = qty;
					localStorage.setItem('CART', JSON.stringify(state));
				}
			}
			
			return [...state];
		default:
			return [...state];
	}

};

export default cart;