import React from "react";

import { IconButton } from "@material-ui/core";
import { ChevronLeftRounded, ChevronRightRounded } from "@material-ui/icons";
import PropTypes from "prop-types";
import {
  getMonthYearDateText,
  getNextMonthDate,
  getPreviousMonthDate,
} from "utils/dateUtils";

const DateNavigator = ({ date = new Date(), handleDateChange = () => {} }) => {
  const { month, year } = getMonthYearDateText(date);

  const handleNagigationClick = ({ isNextMonthNavigation = true }) => {
    const newDate = isNextMonthNavigation
      ? getNextMonthDate(date)
      : getPreviousMonthDate(date);

    const { month, year } = getMonthYearDateText(newDate);

    handleDateChange({
      date: newDate,
      month,
      year,
    });
  };

  return (
    <div className="date-navigator-container">
      <IconButton
        onClick={() => handleNagigationClick({ isNextMonthNavigation: false })}
      >
        <ChevronLeftRounded />
      </IconButton>
      <p className="date-navigator-text">
        {month} {year}
      </p>
      <IconButton
        onClick={() => handleNagigationClick({ isNextMonthNavigation: true })}
      >
        <ChevronRightRounded />
      </IconButton>
    </div>
  );
};

DateNavigator.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
};

export default DateNavigator;
