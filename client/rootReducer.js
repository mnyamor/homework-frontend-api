import { combineReducers } from 'redux';

import Notificationss from './reducers/Notifications';
import auth from './reducers/auth';

export default combineReducers({
  Notificationss,
  auth
});
