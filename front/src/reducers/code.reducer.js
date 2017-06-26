import {
	CHANGE_CODE,
	ADD_FILE,
	FETCH_CODE,
	REMOTE_CHANGE_CODE
} from '../actions/';

export default function(state = [{ name: 'fileName', code: 'Start hacking !' }], action) {
	switch (action.type) {
		case CHANGE_CODE:
			const newState = [...state];
			newState[action.payload.index].code = action.payload.newCode;
			return newState;
		case ADD_FILE:
			return [...state, { name: action.payload, code: '' }];
		case FETCH_CODE:
			return action.payload;
		case REMOTE_CHANGE_CODE:
			return action.payload;
		default:
			return state;
	}
}
