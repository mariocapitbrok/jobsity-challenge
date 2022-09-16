import React from "react";

import { Grid } from "@material-ui/core";
import WeekDaysHeader from "components/CalendarHeader";
import PropTypes from "prop-types";
import { getCurrentMonthCalendarizableDays } from "utils/dateUtils";

const CalendarGrid = ({ date = new Date() }) => {
  const calendarDays = getCurrentMonthCalendarizableDays(date);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={0}
    >
      <WeekDaysHeader />
    </Grid>
  );
};

CalendarGrid.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
};

export default CalendarGrid;
