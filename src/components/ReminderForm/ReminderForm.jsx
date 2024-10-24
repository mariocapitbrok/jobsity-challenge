import React, { useState, useEffect } from "react";

import debounce from "lodash/debounce";
import PropTypes from "prop-types";
import "./ReminderForm.styles.scss"; // Import the stylesheet

const getDefaultTime = () => {
  return new Date()
    .toLocaleTimeString("en-US", { hour12: false, timeZone: "America/Chicago" })
    .substring(0, 5);
};

const ReminderForm = ({ onSave, day, month, year, reminder }) => {
  const [reminderText, setReminderText] = useState("Reminder: ");
  const [reminderTime, setReminderTime] = useState(getDefaultTime());
  const [cityName, setCityName] = useState("New York");
  const [tempForecast, setTempForecast] = useState("?° C");
  const [errorMessage, setErrorMessage] = useState("");

  const parseDatetime = (datetime) => {
    return datetime.split("T")[1];
  };

  useEffect(() => {
    if (reminder) {
      setReminderText(reminder.text);
      setReminderTime(parseDatetime(reminder.datetime));
      setCityName(reminder.city.name);
      setTempForecast(reminder.city.tempForecast);
    }
  }, [reminder]);

  const fetchTemperature = async (city, datetime) => {
    const apiKey = process.env.REACT_APP_VISUAL_CROSSING_API_KEY;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${datetime}?key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTempForecast(`${data.days[0].temp}° C`);
    } catch (error) {
      if (error.response && error.response.status !== 429) {
        // eslint-disable-next-line no-console
        console.error("Error fetching temperature:", error);
      }
    }
  };

  const debouncedFetchTemperature = debounce((city, datetime) => {
    fetchTemperature(city, datetime);
  }, 1000);

  useEffect(() => {
    if (cityName) {
      const datetime = `${year}-${month}-${day}T${reminderTime}:00`;
      debouncedFetchTemperature(cityName, datetime);
    }
  }, [cityName, day, debouncedFetchTemperature, month, reminderTime, year]);

  const handleSave = () => {
    if (reminderText.length > 30) {
      setErrorMessage("Reminder must be 30 characters or less.");
      return;
    }
    if (reminderText && reminderTime && cityName && tempForecast) {
      const reminderData = {
        id: reminder ? reminder.id : Date.now(),
        datetime: `${year}-${month}-${day}T${reminderTime}:00`,
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
        value={reminderTime.substring(0, 5)}
        onChange={(e) => setReminderTime(e.target.value)}
      />
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="City name"
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
  reminder: PropTypes.object,
};

export default ReminderForm;
