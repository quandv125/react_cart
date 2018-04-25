import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import { actAddToCart, actChangeMessage } from './../actions/index';
import PropTypes from 'prop-types';

class ProductsContainer extends Component {

	render() {
		var { products } = this.props;

		return (
			<Products>
				{this.showProducts(products)}
			</Products>
		);
	}

	showProducts(products) {
		var result = null;

		if (products.length > 0) {
			result = products.map((product, index) => {
				return <Product 
					key={index} 
					product={product} 
					onAddToCart={this.props.onAddToCart} 
					actChangeMessage={this.props.actChangeMessage}
				/>
			});
		}
		return result;
	}
}
// Check type of prop
ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			inventory: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired
		})
	).isRequired
}

const mapStateToProps = state => {
	return {
		products: state.products
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddToCart: (product, qty) => {
			dispatch(actAddToCart(product, qty));
		},
		actChangeMessage: (message) => {
			dispatch(actChangeMessage(message));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
