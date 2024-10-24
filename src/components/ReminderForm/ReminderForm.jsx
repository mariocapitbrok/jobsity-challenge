import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import "./ReminderForm.styles.scss"; // Import the stylesheet

const ReminderForm = ({ onSave, day, month, year, reminder }) => {
  const [reminderText, setReminderText] = useState(
    reminder ? reminder.text : "Reminder: "
  );
  const [reminderTime, setReminderTime] = useState(
    reminder
      ? reminder.datetime.split("T")[1]
      : new Date().toISOString().substring(11, 16)
  );
  const [cityName, setCityName] = useState(
    reminder ? reminder.city.name : "New York"
  );
  const [tempForecast, setTempForecast] = useState(
    reminder ? reminder.city.tempForecast : "21 Centigrades"
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (reminder) {
      setReminderText(reminder.text);
      setReminderTime(reminder.datetime.split("T")[1]);
      setCityName(reminder.city.name);
      setTempForecast(reminder.city.tempForecast);
    }
  }, [reminder]);

  const handleSave = () => {
    if (reminderText.length > 30) {
      setErrorMessage("Reminder must be 30 characters or less.");
      return;
    }
    if (reminderText && reminderTime && cityName && tempForecast) {
      const reminderData = {
        id: reminder ? reminder.id : Date.now(),
        datetime: `${year}-${month}-${day}T${reminderTime}`,
        text: reminderText,
        city: {
          name: cityName,
          tempForecast: tempForecast,
        },
      };
      onSave(reminderData);
    }
  };

  return (
    <div className="reminder-form">
      <h3>{reminder ? "Edit Reminder" : "Add Reminder"}</h3>
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
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="City name"
      />
      <input
        type="text"
        value={tempForecast}
        onChange={(e) => setTempForecast(e.target.value)}
        placeholder="Temperature forecast"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

ReminderForm.propTypes = {
  reminder: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default ReminderForm;
