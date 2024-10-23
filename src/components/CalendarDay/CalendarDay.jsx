import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardContent, Grid, Modal, Button } from "@material-ui/core";
import { addReminder } from "actions/reminderActions";
import ReminderForm from "components/ReminderForm";
import PropTypes from "prop-types";

const CalendarDay = ({ day, month, year, height, isEnabled = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const date = `${year}-${month}-${day}`;
  const reminders = useSelector((state) => state.reminders[date] || []);

  const handleAddReminder = (reminder) => {
    dispatch(addReminder(reminder));
    setIsModalOpen(false);
  };

  const currentDate = new Date(year, month - 1, day);
  const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;

  return (
    <>
      <Card
        variant="outlined"
        style={{ height }}
        className={`calendar-day-card ${
          !isEnabled ? "calendar-day-card--disabled" : ""
        } ${isWeekend ? "calendar-day-card--weekend" : ""}`}
        onClick={() => isEnabled && setIsModalOpen(true)}
      >
        <CardContent className="calendar-day-content">
          <Grid item>
            <div className="calendar-day-header">
              <p className="calendar-day-text">{day}</p>
            </div>
            <div className="calendar-day-reminders">
              {reminders.map((reminder, index) => (
                <p key={index} className="reminder-text">
                  {reminder.time} - {reminder.text}
                </p>
              ))}
            </div>
          </Grid>
        </CardContent>
      </Card>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-content">
          <ReminderForm
            onSave={handleAddReminder}
            day={day}
            month={month}
            year={year}
          />
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </div>
      </Modal>
    </>
  );
};

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
};

export default CalendarDay;
