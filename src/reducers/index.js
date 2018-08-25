import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import SongsReducer from './reducer_songs.js';
import auth from './auth.js';

const rootReducer = combineReducers({
    auth,
    songs: SongsReducer,
    form: formReducer
});

export default rootReducer;
