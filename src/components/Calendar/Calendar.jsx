import { DayPicker } from "react-day-picker";
import CustomCaption from "./CustomCaption";

export default function Calendar({ selected, handleDateChange }) {
  const customLabels = {
    labelDay: (day, modifiers) => {
      const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      return dayNames[day.getDay()];
    },
  };
  return (
    <DayPicker
      mode="range"
      selected={selected}
      onSelect={handleDateChange}
      disabled={{ before: new Date() }}
      className="customCalendar"
      components={{
        Caption: CustomCaption,
      }}
      labels={customLabels}
      weekStartsOn={1} // початок тижня з понеділка
      formatters={{
        formatWeekdayName: (day) => {
          const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
          return dayNames[day.getDay() === 0 ? 6 : day.getDay() - 1];
        },
      }}
    />
  );
}
