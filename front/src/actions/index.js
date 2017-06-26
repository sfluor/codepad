export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_LANG = 'CHANGE_LANG';

export function changeTheme(theme){
	return {
		type: CHANGE_THEME,
		payload: {
			theme
		}
	};
};

export function changeLang(language){
	return {
		type: CHANGE_LANG,
		payload: {
			language
		}
	};
};