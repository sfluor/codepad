import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import TextEditor from './components/texteditor.container';
import { Root, Container } from './styles/container.style';
import Footer from './styles/footer.style';
import CodeTitle from './components/codetitle.component';
import TopBar from './components/topbar.component';
import EditorOptions from './components/editoroptions.component';

export const BACK_URL = 'http://localhost:8080';

export default () =>
	<Root>
		<TopBar />
		<Container>
			<CodeTitle title="Code" />
			<TextEditor />
		</Container>
		<Footer> Made by Sfluor </Footer>
	</Root>;
