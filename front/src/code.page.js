import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import TextEditor from './components/texteditor.container';
import { Root, Container } from './styles/container.style';
import Footer from './styles/footer.style';
import CodeTitle from './components/codetitle.component';
import CodeMenu from './components/codemenu.component';
import TopBar from './components/topbar.component';
import EditorOptions from './components/editoroptions.component';

import { idRegex } from './utils/idgenerator';

export default ({ match: { params } }) => {
	// If the id is a correct id we display the codepad
	if (params.id.match(idRegex))
		return (
			<Container>
				<CodeTitle title="Code" />
				<CodeMenu />
				<EditorOptions />
				<TextEditor docId={params.id} />
			</Container>
		);
	else
		// Else the id is not correct
		// TODO/ Better error page
		return (
			<div>
				Sorry but your id is not a valid one, try to go to homePage{' '}
			</div>
		);
};
