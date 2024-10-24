// reminderActions.js

// Define action types
export const ADD_REMINDER = "ADD_REMINDER";
export const UPDATE_REMINDER = "UPDATE_REMINDER";
export const DELETE_REMINDER = "DELETE_REMINDER";

// Action creators
export const addReminder = (reminder) => ({
  type: ADD_REMINDER,
  payload: reminder,
});

export const updateReminder = (reminder) => ({
  type: UPDATE_REMINDER,
  payload: reminder,
});

export const deleteReminder = (id) => ({
  type: DELETE_REMINDER,
  payload: id,
});
