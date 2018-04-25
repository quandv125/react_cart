import React, { Component } from 'react';
import {MSG_DELETE_PRODUCT_IN_CART_SUCCESS, MSG_UPDATE_CART_SUCCESS} from './../constants/Message';
class CartItem extends Component {
    render() {
        var {item} = this.props;
    
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong> {item.product.name} </strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty"> {item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" 
                            onClick={ () => this.onDecrementItem(item.product)}>
                            <span>—</span>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" 
                            onClick={ () => this.onIncrementItem(item.product)}>
                            <span>+</span>
                        </label>
                    </div>
                </td>
                <td> { this.subTotal(item.product.price, item.quantity) } $</td>
                <td>
                    <span type="button" onClick={ () => this.onDeleteItem(item.product) } className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </span>
                </td>
            </tr>
        );
    }

    subTotal = (price, quantity) => {
        return price*quantity;
    }

    onDeleteItem = (product) => {
        this.props.onDeleteItemInCart(product);
        this.props.actChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onIncrementItem = (product) => {
        this.props.onIncrementItem(product);
        this.props.actChangeMessage(MSG_UPDATE_CART_SUCCESS);
    }

    onDecrementItem = (product) => {
        this.props.onDecrementItem(product);
        this.props.actChangeMessage(MSG_UPDATE_CART_SUCCESS);
    }
}

export default CartItem;
