export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_LANG = 'CHANGE_LANG';
export const CHANGE_CODE = 'CHANGE_CODE';
export const CHANGE_TAB = 'CHANGE_TAB';
export const ADD_FILE = 'ADD_FILE';

export function changeTheme(theme){
	return {
		type: CHANGE_THEME,
		payload: theme
	};
};

export function changeLang(language){
	return {
		type: CHANGE_LANG,
		payload: language
	};
};

export function addFile(){
	return {
		type: ADD_FILE,
		payload: 'File'
	};
}

export function changeTab(index){
	return {
		type: CHANGE_TAB,
		payload: index
	};
}