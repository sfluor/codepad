import React, { Component } from 'react';
import io from 'socket.io-client';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/python';
import 'brace/theme/dawn';

import { BACK_URL } from '../';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		// Initial state with socket connection
		this.state = {
			socket: io.connect(BACK_URL),
			docId: 'b94a1cfd-8e51-4719-a897-469b393d88e5',
			code: null
		};

		// We send the id of our project to see if it already exists or no
		this.state.socket.emit('docId', { docId: this.state.docId });

		// We get the info back from the server
		this.state.socket.on('docId', ({ code }) => {
			this.setState({ code });
		});

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
		// If we're still waiting for the server
		if (this.state.code === null)
			return <div>'Loading...'</div>

		// Else we got an answer
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
