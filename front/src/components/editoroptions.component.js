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
		text: 'Ruby',
		value: 'ruby',
	},
	{
		text: 'Python',
		value: 'python',
	},
	{
		text: 'JavaScript',
		value: 'javascript',
	}
]

const themeOptions = [
	{
		text: 'Github',
		value: 'github',
	},
	{
		text: 'Dawn',
		value: 'dawn',
	}
]

class EditorOptions extends Component {

	onLanguageChange = (e, { value }) => (this.props.changeLang(value))

	onThemeChange = (e, { value }) => (this.props.changeTheme(value))

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
};

function mapStateToProps({ theme, language }){
	return { theme, language};
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({ changeTheme, changeLang }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorOptions);