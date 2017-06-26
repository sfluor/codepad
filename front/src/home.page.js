import React from 'react';
import { Link } from 'react-router-dom';

import { generateId } from './utils/idgenerator';

export default () => (
	<div>
		Home Page !
		<Link to={`/${generateId()}`}>
			Get started
		</Link>
	</div>
);