import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import {
	JS,
	Python,
	CSharp,
	CSS,
	HTML,
	MySQL,
	TS,
	Java,
	Ruby,
	Json,
	Golang
} from '../logos/logos';

const languageOptions = [
	{
		text: 'Ruby',
		value: 'ruby',
	},
	{
		text: 'Python',
		value: 'python',
	}
]

const themeOptions = [
	{
		text: 'Eclipse',
		value: 'Eclipse',
	},
	{
		text: 'Dawn',
		value: 'dawn',
	}
]

export default class EditorOptions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: 'python', // Programming language
			theme: 'dawn' // Text editor theme
		};
	}

	onLanguageChange = (e, { value }) => (this.setState({ language: value}))

	onThemeChange = (e, { value }) => (this.setState({ theme: value }))

	render() {
		return (
			<div>
				<Dropdown 
					selection
					value={this.state.language}
					options={languageOptions}
					onChange={this.onLanguageChange}
				/>
				<Dropdown 
					selection
					value={this.state.theme}
					options={themeOptions}
					onChange={this.onThemeChange}
				/>
			</div>
		);
	}
}
