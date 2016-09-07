import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants/index';

export function addNotifications(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}

export function deleteNotifications(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  }
}
