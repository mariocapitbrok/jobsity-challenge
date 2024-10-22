// reminderActions.js

// Define action types
export const ADD_REMINDER = "ADD_REMINDER";
export const UPDATE_REMINDER = "UPDATE_REMINDER";
export const DELETE_REMINDER = "DELETE_REMINDER";

// Action creators
export const addReminder = (date, reminder) => ({
  type: ADD_REMINDER,
  payload: { date, reminder },
});

export const updateReminder = (date, reminder) => ({
  type: UPDATE_REMINDER,
  payload: { date, reminder },
});

export const deleteReminder = (date, reminderId) => ({
  type: DELETE_REMINDER,
  payload: { date, reminderId },
});
