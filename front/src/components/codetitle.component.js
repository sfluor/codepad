import React from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';

export default ({ title }) =>
	<div>
		<Header as="h2" >
			<Icon name ='code' /> { title }
		</Header>
	</div>;
