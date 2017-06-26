import { CHANGE_CODE } from '../actions/';
import { ADD_FILE } from '../actions';

export default function(state = [{ id: 1, name: 'File 1', code: '' }], action) {
	switch (action.type) {
		case CHANGE_CODE:
			return action.payload;
		case ADD_FILE:
			return [
				...state,
				{ id: state.length + 1, name: action.payload, code: '' }
			];
		default:
			return state;
	}
}
