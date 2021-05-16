import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { authReducer as auth } from './auth';
import { plantReducer as plants } from './plants';
import { uiReducer as notifications } from './uiReducer';

/*const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    plants,
    notifications
});

export default createRootReducer
*/
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    plants,
  });
