import React from "react";

import { IconButton } from "@material-ui/core";
import { ChevronLeftRounded, ChevronRightRounded } from "@material-ui/icons";
import PropTypes from "prop-types";
import { getMonthYearDateText } from "utils/dateUtils";

const DateNavigator = ({ date = new Date(), handleDateChange = () => {} }) => {
  const { month, year } = getMonthYearDateText(date);

  return (
    <div className="date-navigator-container">
      <IconButton onClick={() => {}}>
        <ChevronLeftRounded />
      </IconButton>
      <p className="date-navigator-text">
        {month} {year}
      </p>
      <IconButton onClick={() => {}}>
        <ChevronRightRounded />
      </IconButton>
    </div>
  );
};

DateNavigator.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
};

export default DateNavigator;
