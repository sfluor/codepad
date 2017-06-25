import React, { Component } from 'react';
import io from 'socket.io-client';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/python';
import 'brace/theme/dawn';

import { BACK_URL } from '../App';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		// Initial state with socket connection
		this.state = {
			socket: io.connect(BACK_URL),
			docId: null,
			code: ''
		};

		// Listen for changes made by other people
		this.state.socket.on('code_change', ({ code }) => {
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
		this.state.socket.emit('code_change', { code });
	};

	render() {
		return (
			<AceEditor
				ref="editor"
				mode="python"
				width="100%"
				theme="dawn"
				value={this.state.code}
				onChange={this.onChange}
				editorProps={{ $blockScrolling: Infinity }} // Else warnings are displayed
			/>
		);
	}
}
