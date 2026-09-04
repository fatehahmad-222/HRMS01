import * as React from "react";
import { DayPicker } from "react-day-picker";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={twMerge(clsx("p-3", className))}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
