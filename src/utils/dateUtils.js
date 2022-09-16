import dayjs from "dayjs";

export const getMonthYearDateText = (date) => {
  return {
    month: dayjs(date).format("MMMM"),
    year: dayjs(date).year(),
  };
};
