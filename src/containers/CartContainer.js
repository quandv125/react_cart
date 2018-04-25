import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import { onDeleteItemInCart, onIncrementItem, onDecrementItem, actChangeMessage } from './../actions/index';
// import PropTypes from 'prop-types';

class CartContainer extends Component {

    render() {
        var { cart } = this.props;
       
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmounts(cart) }
            </Cart> 
        );
    }

    showCartItem = (cart) => {
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem 
                    key={ index } 
                    item={ item } 
                    index={ index } 
                    onDeleteItemInCart={ this.props.onDeleteItemInCart } 
                    onIncrementItem={ this.props.onIncrementItem }
                    onDecrementItem={ this.props.onDecrementItem }
                    actChangeMessage={ this.props.actChangeMessage }
                />
            });
        }
        return result;
    }

    showTotalAmounts = (cart) => {
        var result = null;
         if (cart.length > 0) {
            result = <CartResult cart={cart} />
           
        }
        return result;
    }

}
// Check type of prop
// CartContainer.propTypes = {
//     cart: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             image: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//             inventory: PropTypes.number.isRequired,
//             rating: PropTypes.number.isRequired
//         })
//     ).isRequired
// }

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteItemInCart: (product) => {

            dispatch(onDeleteItemInCart(product));
        },
        onIncrementItem: (product) => {
            
            dispatch(onIncrementItem(product));
        },
        onDecrementItem: (product) => {
           
             dispatch(onDecrementItem(product));
        },
        actChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
