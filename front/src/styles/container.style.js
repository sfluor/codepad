import { styled } from 'styletron-react';

export const Root = styled('div', () => ({
	height: '100%'
}));

export const Container = styled('div', () => ({
	marginLeft: '15%',
	marginRight: '15%',
	display: 'flex',
	flexDirection: 'column',
	minHeight: '80%'
}));