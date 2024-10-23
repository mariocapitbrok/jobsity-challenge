import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ReminderForm.styles.scss"; // Import the stylesheet

const ReminderForm = ({ onSave, day, month, year }) => {
  const [reminderText, setReminderText] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSave = () => {
    if (reminderText.length > 30) {
      setErrorMessage("Reminder must be 30 characters or less.");
      return;
    }
    if (reminderText && reminderTime) {
      const reminder = {
        date: `${year}-${month}-${day}`,
        time: reminderTime,
        text: reminderText,
      };
      onSave(reminder);
    }
  };

  return (
    <div className="reminder-form">
      <h3>Add Reminder</h3>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input
        type="text"
        value={reminderText}
        onChange={(e) => setReminderText(e.target.value)}
        placeholder="Reminder text (max 30 chars)"
      />
      <input
        type="time"
        value={reminderTime}
        onChange={(e) => setReminderTime(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

ReminderForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default ReminderForm;
