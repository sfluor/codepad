import React from 'react';
import { Menu, Icon } from 'semantic-ui-react'; 

export default (props) => (
	<Menu tabular>
		<Menu.Item name="File 1" active />
		<Menu.Item>
			<Icon name='add' /> New File 
		</Menu.Item>
	</Menu>
);