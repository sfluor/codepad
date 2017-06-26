import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTheme, changeLang } from '../actions';
// import {
// 	JS,
// 	Python,
// 	CSharp,
// 	CSS,
// 	HTML,
// 	MySQL,
// 	TS,
// 	Java,
// 	Ruby,
// 	Json,
// 	Golang
// } from '../logos/logos';

const languageOptions = [
	{
		text: 'JavaScript',
		value: 'javascript'
	},
	{
		text: 'Python',
		value: 'python'
	},
	{
		text: 'HTML',
		value: 'html'
	},
	{
		text: 'Markdown',
		value: 'markdown'
	},
	{
		text: 'Ruby',
		value: 'ruby'
	},

	{
		text: 'Java',
		value: 'java'
	},
	{
		text: 'Typescript',
		value: 'typescript'
	},
	{
		text: 'JSON',
		value: 'json'
	},
	{
		text: 'Go',
		value: 'golang'
	},
	{
		text: 'CSS',
		value: 'css'
	},

	{
		text: 'C #',
		value: 'csharp'
	},
	{
		text: 'MySQL',
		value: 'mysql'
	},
	{
		text: 'XML',
		value: 'xml'
	}
];

const themeOptions = [
	{
		text: 'Github',
		value: 'github'
	},
	{
		text: 'Dawn',
		value: 'dawn'
	},
	{
		text: 'Monokai',
		value: 'monokai'
	},
	{
		text: 'Terminal',
		value: 'terminal'
	},
	{
		text: 'Twilight',
		value: 'twilight'
	},
	{
		text: 'Xcode',
		value: 'xcode'
	},
	{
		text: 'Solarized Light',
		value: 'solarized_light'
	},
	{
		text: 'Textmate',
		value: 'textmate'
	},
	{
		text: 'Kuroir',
		value: 'kuroir'
	}
];

class EditorOptions extends Component {
	onLanguageChange = (e, { value }) => this.props.changeLang(value);

	onThemeChange = (e, { value }) => this.props.changeTheme(value);

	render() {
		return (
			<div>
				<Dropdown
					selection
					value={this.props.language}
					options={languageOptions}
					onChange={this.onLanguageChange}
				/>
				<Dropdown
					selection
					value={this.props.theme}
					options={themeOptions}
					onChange={this.onThemeChange}
				/>
			</div>
		);
	}
}

function mapStateToProps({ theme, language }) {
	return { theme, language };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ changeTheme, changeLang }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorOptions);
