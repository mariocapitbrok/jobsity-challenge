import { Card, CardContent, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const CalendarDay = ({ day, month, year, height, isEnabled = false }) => {
  const currentDate = new Date(year, month - 1, day); // month is 0-based
  const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;

  return (
    <Card
      variant="outlined"
      style={{ height }}
      className={`calendar-day-card ${
        !isEnabled ? "calendar-day-card--disabled" : ""
      } ${isWeekend ? "calendar-day-card--weekend" : ""}`}
      onClick={() => {}}
    >
      <CardContent className="calendar-day-content">
        <Grid item>
          <div className="calendar-day-header">
            <p className="calendar-day-text">{day}</p>
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number,
  year: PropTypes.number,
  height: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
};

export default CalendarDay;
