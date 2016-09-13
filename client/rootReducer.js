import { combineReducers } from 'redux';

import Notifications from './reducers/Notifications';
import auth from './reducers/auth';

export default combineReducers({
  Notifications,
  auth
});
