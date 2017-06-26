import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { Brand, TopBar } from '../styles/topbar.style';

export default () =>
	<TopBar>
		<Link to="/">
			<Brand>
				<Icon name="file code outline" size="large" />
				CodePad
			</Brand>
		</Link>
		<div />
		<div />
	</TopBar>;
