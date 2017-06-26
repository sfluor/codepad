import { combineReducers } from 'redux';

import ThemeReducer from './theme.reducer';
import LanguageReducer from './language.reducer';


const rootReducer = combineReducers({
	theme: ThemeReducer,
	language: LanguageReducer
})

export default rootReducer;