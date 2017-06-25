import React from 'react';
import { Icon } from 'semantic-ui-react';

import { Brand, TopBar } from '../styles/topbar.style';

export default () =>
	<TopBar>
		<Brand>
			<Icon name="file code outline" size="large" />
			CodePad
		</Brand>
		<div />
	</TopBar>;
