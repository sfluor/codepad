import React, { Component } from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFile } from '../actions';

class AddFile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fileName: ''
		};
	}

	onInputChange = (e, { value }) => this.setState({ fileName: value });

	handleClick = () => {
		this.props.addFile(this.state.fileName);
		this.setState({ fileName: '' });
	};

	render() {
		return (
			<Menu.Item>
				<Input
					type="text"
					value={this.state.fileName}
					onChange={this.onInputChange}
					placeholder="FileName"
				>
					<input />
					<Button icon="add" onClick={this.handleClick} />
				</Input>
			</Menu.Item>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addFile }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddFile);
