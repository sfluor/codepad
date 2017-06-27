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
		this.props.socket.on('docId', code => {
			// TODO: Extract title from data and setstate
		});

		// Listen for changes made by other people only if Id matches
		this.props.socket.on('title_change', ({ payload, Id }) => {
			if (this.props.docId === Id)
				console.log('TODO')
				// TODO: Extract title and set state
		});
	}

	// Handling title Change
	onInputChange = (e, { value }) => {
		// TODO: Emit title_change
		this.setState({ title: value });
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
