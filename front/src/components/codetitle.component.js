import React, { Component } from 'react';
import { Header, Segment, Input } from 'semantic-ui-react';

export default class CodeTitle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Enter a Project Name' // Default title
		}
	}

	componentDidMount() {

		// The text editor sent a request so we just have to handle the response
		// We get the info back from the server and set the title
		this.props.socket.on('docId', ({ title }) => {
			this.setState({ title });
		});

		// Listen for changes made by other people only if Id matches
		this.props.socket.on('title_change', ({ title, Id }) => {
			if (this.props.docId === Id)
				this.setState({ title });
		});
	}

	// Handling title Change
	onInputChange = (e, { value }) => {
		this.setState({ title: value });
		this.props.socket.emit('title_change', { title: value });
  }
	render() {
		return (
			<div>
				<Header as="h2">
					<Input 
						transparent 
						value={this.state.title}
						onChange={this.onInputChange}
						placeholder="Our Fantastic Project" 
					/>
				</Header>
			</div>
		);
	}
}
