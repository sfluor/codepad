import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFile, changeTab } from '../actions';

const CodeMenu = ({ codes, addFile, tab, changeTab }) =>
	<Menu tabular attached="top">
		{codes.map((f, i) =>
			<Menu.Item
				name={"File" + i.toString()}
				active={i == tab}
				onClick={() => changeTab(i)}
			/>
		)}
		<Menu.Item onClick={addFile}>
			<Icon name="add" /> Add File
		</Menu.Item>
	</Menu>;

function mapStateToProps({ codes, tab }) {
	return { codes, tab };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addFile, changeTab }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeMenu);
