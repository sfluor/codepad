import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeCode, fetchCode, remoteChangeCode } from '../actions';

// Languages
import 'brace/mode/python';
import 'brace/mode/ruby';
import 'brace/mode/javascript';
import 'brace/mode/golang';
import 'brace/mode/java';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/xml';
import 'brace/mode/markdown';
import 'brace/mode/mysql';
import 'brace/mode/typescript';
import 'brace/mode/csharp';
import 'brace/mode/json';

// Themes
import 'brace/theme/monokai';
import 'brace/theme/tomorrow';
import 'brace/theme/terminal';
import 'brace/theme/twilight';
import 'brace/theme/xcode';
import 'brace/theme/kuroir';
import 'brace/theme/textmate';
import 'brace/theme/solarized_light';
import 'brace/theme/github';

class TextEditor extends Component {
	componentDidMount() {
		// We send the id of our project to see if it already exists or no
		this.props.socket.emit('docId', { docId: this.props.docId });

		// We get the info back from the server
		this.props.socket.on('docId', ({ codes }) => {
			this.props.fetchCode(codes);
		});

		// Listen for changes made by other people only if Id matches
		this.props.socket.on('code_change', ({ codes, Id }) => {
			if (this.props.docId === Id)
				this.props.remoteChangeCode(codes);
		});
	}

	onChange = code => {
		// Handling Editor code change
		this.props.changeCode(code, this.props.tab);
		// We send our projet Id to identify us
		this.props.socket.emit('code_change', this.props.codes);
	};

	render() {
		// Shortcut for object containing name + code
		const codeData = this.props.codes[this.props.tab];

		// If we're still waiting for the server
		if ( codeData === null || codeData === undefined)
			return <div>Loading...</div>;

		// Else we got an answer
		return (
			<AceEditor
				mode={this.props.language}
				width="100%"
				theme={this.props.theme}
				value={codeData.code}
				onChange={this.onChange}
				editorProps={{ $blockScrolling: Infinity }} // Else warnings are displayed
			/>
		);
	}
}

function mapStateToProps({ theme, language, codes, tab }) {
	return { theme, language, codes, tab };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ changeCode, fetchCode, remoteChangeCode },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
