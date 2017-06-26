import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles/container.style';
import { Button, Header, Segment } from 'semantic-ui-react';

import { generateId } from './utils/idgenerator';

export default () => (
	<Container>
	<Segment padded='very' textAlign='center'>
		<Header as='h1'>Welcome in CodePad ! </Header>
		<Header as='h3'> 
			CodePad is a Tool to make small development projects in group easier !
			To get started just hit the button below
		</Header>
		<Link to={`/${generateId()}`}>
			<Button 
				size='massive' 
				primary 
				content='Start hacking !'
				icon='write'
			/>
		</Link>
		</Segment>
	</Container>
);