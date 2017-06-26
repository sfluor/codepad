import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTab } from '../actions';

import AddFile from './addfile.component';

const CodeMenu = ({ codes, tab, changeTab }) =>
	<Menu tabular attached="top">
		{codes.map((f, i) =>
			<Menu.Item
				name={"File" + i.toString()}
				active={i == tab}
				onClick={() => changeTab(i)}
			/>
		)}
		<AddFile />
	</Menu>;

function mapStateToProps({ codes, tab }) {
	return { codes, tab };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ changeTab }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeMenu);
