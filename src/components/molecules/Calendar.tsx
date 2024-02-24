"use client";
import { useCallback, useMemo, useState } from "react";
import SqaureButton from "../atoms/SquareButton";

function getWeekDates(currentDate: Date) {
  var currentDayOfWeek = currentDate.getDay();

  var firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);

  return Array.from({
    length: 7,
  }).map((_, i) => {
    let date = new Date(firstDayOfWeek);
    date.setDate(firstDayOfWeek.getDate() + i);
    return date;
  });
}

export default function Calendar() {
  const Days = ["Sun", "Mon", "Tue", "Wed", "THU", "FRI", "SAT"];
  const days = useMemo(
    () =>
      Array.from({ length: 5 })
        .map((_, i) => {
          const date = new Date();
          date.setDate(new Date().getDate() + 7 * i);
          const weekDates = getWeekDates(date);
          return weekDates;
        })
        .flat(),
    []
  );
  const [selectedDates, setSelectedDates] = useState(
    Array.from({ length: 7 * 5 }, () => false)
  );

  const handleDateClick = useCallback(
    (i: number) => {
      selectedDates[i] = !selectedDates[i];
      setSelectedDates([...selectedDates]);
    },
    [selectedDates]
  );

  return (
    <div>
      <div className="grid grid-cols-7 gap-2">
        {Days.map((v) => (
          <div className="text-center" key={v}>
            {v}
          </div>
        ))}
        {days.map((v, i) => (
          <SqaureButton
            key={v.getTime()}
            onClick={() => {
              handleDateClick(i);
            }}
            selected={selectedDates[i]}
          >
            {v.getMonth() + 1}/{v.getDate()}
          </SqaureButton>
        ))}
      </div>
    </div>
  );
}
