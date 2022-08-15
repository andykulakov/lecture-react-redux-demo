import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {appReducer} from './reducer';

export const store = createStore(appReducer, composeWithDevTools())