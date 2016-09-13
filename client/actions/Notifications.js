import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from '../constants/index';

export function addNotifications(message) {
  return {
    type: ADD_NOTIFICATION,
    message
  }
}

export function deleteNotifications(id) {
  return {
    type: DELETE_NOTIFICATION,
    id
  }
}
