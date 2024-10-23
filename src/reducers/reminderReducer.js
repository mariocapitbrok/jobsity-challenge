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
      const { date } = reminder;

      return {
        ...state,
        [date]: [...(state[date] || []), reminder],
      };
    }

    case UPDATE_REMINDER: {
      const { date, reminder } = action.payload;
      return {
        ...state,
        [date]: state[date].map((r) => (r.id === reminder.id ? reminder : r)),
      };
    }

    case DELETE_REMINDER: {
      const { date, reminderId } = action.payload;
      return {
        ...state,
        [date]: state[date].filter((r) => r.id !== reminderId),
      };
    }

    default:
      return state;
  }
};

export default remindersReducer;
