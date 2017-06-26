import React, { Component } from 'react';
import io from 'socket.io-client';
import brace from 'brace';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import 'brace/mode/python';
import 'brace/mode/ruby';
import 'brace/mode/javascript';
import 'brace/theme/dawn';
import 'brace/theme/github';

import { BACK_URL } from '../';

class TextEditor extends Component {
	constructor(props) {
		super(props);
		// Initial state with socket connection
		// We get the docId from the URL params
		this.state = {
			socket: io.connect(BACK_URL),
			docId: this.props.docId,
			code: null
		};

		// We send the id of our project to see if it already exists or no
		this.state.socket.emit('docId', { docId: this.state.docId });

		// We get the info back from the server
		this.state.socket.on('docId', ({ code }) => {
			this.setState({ code });
		});

		// Listen for changes made by other people only if Id matches
		this.state.socket.on('code_change', ({ code, Id }) => {
			if (Id === this.props.docId)
				this.setState({ code });
		});
	}

	componentDidMount() {
		// We entered the room
		// TODO: send some data to say who are we
		this.state.socket.emit('enter');
	}

	componentWillUnmount() {
		// We left the room
		// TODO: send some data to say who are we
		this.state.socket.emit('left');
	}

	onChange = code => {
		// Handling Editor code change
		this.setState({ code });
		// We send our projet Id to identify us
		this.state.socket.emit('code_change', { code, Id: this.state.docId });
	};

	render() {
		console.log(this.state.docId);
		// If we're still waiting for the server
		if (this.state.code === null)
			return <div>Loading...</div>

		// Else we got an answer
		return (
			<AceEditor
				mode={this.props.language}
				width="100%"
				theme={this.props.theme}
				value={this.state.code}
				onChange={this.onChange}
				editorProps={{ $blockScrolling: Infinity }} // Else warnings are displayed
			/>
		);
	}
}

function mapStateToProps({ theme, language }){
	return { theme, language};
};

export default connect(mapStateToProps)(TextEditor);