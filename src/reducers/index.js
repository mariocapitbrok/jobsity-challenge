import { combineReducers } from "redux";

import reminderReducer from "./reminderReducer"; // Separate import groups with a new line

// Combine all reducers
const reducers = {
  reminders: reminderReducer, // Add reminderReducer here
};

export default combineReducers(reducers);
