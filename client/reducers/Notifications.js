import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from '../constants/index';
import { parseJSON } from '../utils/functions';
import findIndex from 'lodash/findIndex';

export default (state = [], action = {}) => {
  switch(action.type) {
    case ADD_NOTIFICATION:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    case DELETE_NOTIFICATION:
      const index = findIndex(state, { id: action.id });
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: return state;
  }
}
