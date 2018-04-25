import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from './../components/Message';

class MessageContainer extends Component {

	render() {
		
		var {message} = this.props;

		return (
			<Message>
				{message}
			</Message> 
		);
	}


}

const mapStateToProps = state => {
	
	return {
		message: state.message
	}
}


export default connect(mapStateToProps, null)(MessageContainer);
