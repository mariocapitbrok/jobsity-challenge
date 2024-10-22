import React from "react";

import { Grid } from "@material-ui/core";
import { CalendarHeader, CalendarDay } from "components";
import PropTypes from "prop-types";
import { getCurrentMonthCalendarizableDays } from "utils/dateUtils";

import { getRowHeightFromCurrentMonth } from "./helpers";

const CalendarGrid = ({ date = new Date() }) => {
  const calendarDays = getCurrentMonthCalendarizableDays(date);
  const gridRowHeight = getRowHeightFromCurrentMonth(calendarDays?.length);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={0}
    >
      <CalendarHeader />
      {calendarDays?.map((day) => (
        <CalendarDay
          key={`${day.number}.${day.month}.${day.year}`}
          day={parseInt(day.number, 10)}
          month={parseInt(day.month, 10)}
          year={parseInt(day.year, 10)}
          isEnabled={day.isEnabled}
          height={gridRowHeight}
        />
      ))}
    </Grid>
  );
};

CalendarGrid.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
};

export default CalendarGrid;
