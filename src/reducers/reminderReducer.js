import {
  ADD_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
} from "../actions/reminderActions";

const initialState = {};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REMINDER: {
      const reminder = action.payload;
      const date = reminder.datetime.split("T")[0];

      return {
        ...state,
        [date]: [...(state[date] || []), reminder],
      };
    }

    case UPDATE_REMINDER: {
      const reminder = action.payload;
      const date = reminder.datetime.split("T")[0];

      return {
        ...state,
        [date]: state[date].map((r) => (r.id === reminder.id ? reminder : r)),
      };
    }

    case DELETE_REMINDER: {
      const id = action.payload;
      const newState = { ...state };
      for (const date in newState) {
        newState[date] = newState[date].filter((r) => r.id !== id);
        if (newState[date].length === 0) {
          delete newState[date];
        }
      }
      return newState;
    }

    default:
      return state;
  }
};

export default remindersReducer;
