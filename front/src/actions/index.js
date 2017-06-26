import io from 'socket.io-client';

export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_LANG = 'CHANGE_LANG';
export const CHANGE_CODE = 'CHANGE_CODE';
export const CHANGE_TAB = 'CHANGE_TAB';
export const ADD_FILE = 'ADD_FILE';
export const FETCH_CODE = 'FETCH_CODE';
export const REMOTE_CHANGE_CODE = 'REMOTE_CHANGE_CODE';

// Creating our socket
const BACK_URL = 'http://localhost:8080';
export const socket = io.connect(BACK_URL);

export function changeTheme(theme) {
	return {
		type: CHANGE_THEME,
		payload: theme
	};
}

export function changeLang(language) {
	return {
		type: CHANGE_LANG,
		payload: language
	};
}

export function addFile(fileName) {
	return {
		type: ADD_FILE,
		payload: fileName || 'File'
	};
}

export function changeTab(index) {
	return {
		type: CHANGE_TAB,
		payload: index
	};
}

export function changeCode(newCode, index) {
	return {
		type: CHANGE_CODE,
		payload: {
			newCode,
			index
		}
	};
}

export function remoteChangeCode(newCode) {
	return {
		type: REMOTE_CHANGE_CODE,
		payload: newCode
	};
}

export function fetchCode(code) {
	return {
		type: FETCH_CODE,
		payload: code
	};
}
