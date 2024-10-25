import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardContent, Grid, Modal, Button } from "@material-ui/core";
import { addReminder, updateReminder } from "actions/reminderActions";
import ReminderForm from "components/ReminderForm";
import PropTypes from "prop-types";

const CalendarDay = ({ day, month, year, height, isEnabled = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);
  const [showAllReminders, setShowAllReminders] = useState(false);
  const dispatch = useDispatch();

  const date = `${year}-${month}-${day}`;
  const reminders = useSelector((state) => state.reminders[date] || []);

  const handleAddReminder = (reminder) => {
    if (selectedReminder) {
      dispatch(updateReminder(reminder));
    } else {
      dispatch(addReminder(reminder));
    }
    setIsModalOpen(false);
    setSelectedReminder(null);
  };

  const handleReminderClick = (reminder) => {
    setSelectedReminder(reminder);
    setIsModalOpen(true);
  };

  const currentDate = new Date(year, month - 1, day);
  const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;

  const maxVisibleReminders = 2;
  const visibleReminders = showAllReminders
    ? reminders
    : reminders.slice(0, maxVisibleReminders);

  const getCardClasses = () => {
    let className = "calendar-day-card";
    if (!isEnabled) className += " calendar-day-card--disabled";
    if (isWeekend) className += " calendar-day-card--weekend";
    return className;
  };

  const getReminderListClasses = () => {
    let className = "reminder-list";
    if (showAllReminders === true) className += " reminder-list-overflow";
    if (showAllReminders === false) className = "reminder-list";
    return className;
  };

  return (
    <>
      <Card
        variant="outlined"
        style={{ height }}
        className={getCardClasses()}
        onClick={() => isEnabled && setIsModalOpen(true)}
      >
        <div className="calendar-day-header">
          <p className="calendar-day-text">{day}</p>
        </div>
        <CardContent className="calendar-day-content">
          <Grid item>
            <div className={getReminderListClasses()}>
              {visibleReminders.map((reminder, index) => (
                <p
                  key={index}
                  className="reminder-text"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReminderClick(reminder);
                  }}
                >
                  {reminder.datetime.split("T")[1].substring(0, 5)} {` `}
                  {reminder.city.name} {` ${reminder.city.tempForecast} `}
                  {reminder.text}
                </p>
              ))}
            </div>
          </Grid>
        </CardContent>
        <div className="calendar-day-footer">
          {reminders.length > maxVisibleReminders && !showAllReminders && (
            <Button
              className="show-more-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowAllReminders(true);
              }}
            >
              Show more
            </Button>
          )}
          {showAllReminders && reminders.length > maxVisibleReminders && (
            <Button
              className="show-less-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowAllReminders(false);
              }}
            >
              Show less
            </Button>
          )}
        </div>
      </Card>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-content">
          <ReminderForm
            onSave={handleAddReminder}
            day={day}
            month={month}
            year={year}
            reminder={selectedReminder}
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
