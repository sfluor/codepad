import { combineReducers } from 'redux';

import ThemeReducer from './theme.reducer';
import LanguageReducer from './language.reducer';
import CodeReducer from './code.reducer';
import TabReducer from './tab.reducer';

const rootReducer = combineReducers({
	theme: ThemeReducer,
	language: LanguageReducer,
	codes: CodeReducer,
	tab: TabReducer
})

export default rootReducer;