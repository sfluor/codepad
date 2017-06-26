import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import TextEditor from './components/texteditor.container';
import { Root, Container } from './styles/container.style';
import Footer from './styles/footer.style';
import CodeTitle from './components/codetitle.component';
import TopBar from './components/topbar.component';
import EditorOptions from './components/editoroptions.component';

import { idRegex } from './utils/idgenerator';


export default ({ match: { params } }) =>{
	// If the id is a correct id we display the codepad
	if (params.id.match(idRegex))
		return (
			<Container>
				<CodeTitle title="Code" />
				<EditorOptions />
				<TextEditor docId={params.id} />
			</Container>
		);

	// Else the id is not correct
	// TODO/ Better error page
	else
		return (
			<div>Sorry but your id is not a valid one, try to go to homePage </div>
		);
}