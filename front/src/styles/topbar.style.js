import { styled } from 'styletron-react';

export const TopBar = styled('div', () => ({
	display: 'flex',
	backgroundColor: '#2980b9',
	color: 'white',
	height: '90px',
	marginBottom: '20px',
	width: '100%',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',
	// Some shadow effects
	'-webkit-box-shadow': '5px 5px 5px 0px rgba(0,0,0,0.2)',
	'-moz-box-shadow': '5px 5px 5px 0px rgba(0,0,0,0.2)',
	'box-shadow': '5px 5px 5px 0px rgba(0,0,0,0.2)',
}));

export const Brand = styled('h1', () => ({
	display: 'flex',
	alignItems: 'center',
}))