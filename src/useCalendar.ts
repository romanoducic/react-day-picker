import { useCallback, useMemo } from "react";

import type {
  CalendarWeek,
  CalendarDay,
  CalendarMonth
} from "./classes/index.js";
import { getDates } from "./helpers/getDates.js";
import { getDays } from "./helpers/getDays.js";
import { getDisplayMonths } from "./helpers/getDisplayMonths.js";
import { getInitialMonth } from "./helpers/getInitialMonth.js";
import { getMonths } from "./helpers/getMonths.js";
import { getNavMonths } from "./helpers/getNavMonth.js";
import { getNextMonth } from "./helpers/getNextMonth.js";
import { getPreviousMonth } from "./helpers/getPreviousMonth.js";
import { getWeeks } from "./helpers/getWeeks.js";
import { useControlledValue } from "./helpers/useControlledValue.js";
import type { DayPickerProps } from "./types/props.js";
import type { DateLib } from "./types/shared.js";

/**
 * The hook to get and handle the calendar state.
 *
 * @see https://daypicker.dev/next/guides/custom-components
 */
export interface UseCalendar {
  today: Date;
  /** All the unique dates displayed to the calendar. */
  dates: Date[];
  /**
   * All the days displayed in the calendar. As opposite from
   * {@link CalendarContext.dates}, it may return duplicated dates when shown
   * outside the month.
   */
  days: CalendarDay[];
  /** The months displayed in the calendar. */
  weeks: CalendarWeek[];
  /** The months displayed in the calendar. */
  months: CalendarMonth[];
  /**
   * The month displayed as first the calendar. When `numberOfMonths` is greater
   * than `1`, it is the first of the displayed months.
   */
  firstMonth: Date;
  /**
   * The month displayed as last the calendar. When `numberOfMonths` is greater
   * than `1`, it is the last of the displayed months.
   */
  lastMonth: Date;

  /** The next month to display. */
  nextMonth: Date | undefined;
  /** The previous month to display. */
  previousMonth: Date | undefined;

  /**
   * The month where the navigation starts. `undefined` if the calendar can be
   * navigated indefinitely to the past.
   */
  navigationStartMonth: Date | undefined;
  /**
   * The month where the navigation ends. `undefined` if the calendar can be
   * navigated indefinitely to the past.
   */
  navigationEndMonth: Date | undefined;

  /** Set the first month displayed in the calendar. */
  setFirstMonth: (date: Date) => void;

  /** Navigate to the specified month. Will fire the `onMonthChange` callback. */
  goToMonth: (month: Date) => void;
  /** Navigate to the next month. */
  goToNextMonth: () => void;
  /** Navigate to the previous month. */
  goToPreviousMonth: () => void;
  /**
   * Navigate to the specified date. If the second parameter (refDate) is
   * provided and the date is before the refDate, then the month is set to one
   * month before the date.
   *
   * @param day - The date to navigate to.
   * @param dateToCompare - Optional. If `date` is before `dateToCompare`, the
   *   month is set to one month before the date.
   */
  goToDay: (day: CalendarDay) => void;
  /** Whether the given date is included in the displayed months. */
  isDayDisplayed: (day: CalendarDay) => boolean;
}

/** @private */
export function useCalendar(props: DayPickerProps, dateLib: DateLib) {
  const {
    ISOWeek,
    fixedWeeks,
    locale,
    weekStartsOn,
    startMonth,
    endMonth,
    captionLayout,
    fromYear,
    toYear,
    fromMonth,
    toMonth,
    month,
    defaultMonth,
    numberOfMonths,
    reverseMonths,
    firstWeekContainsDate,
    pagedNavigation,
    disableNavigation,
    onMonthChange
  } = props;

  const { startOfMonth } = dateLib;

  const today = useMemo(
    () => dateLib.startOfDay(props.today ?? new dateLib.Date()),
    [dateLib, props.today]
  );

  const [navigationStartMonth, navigationEndMonth] = useMemo(
    () =>
      getNavMonths(
        {
          startMonth,
          endMonth,
          captionLayout,
          fromYear,
          toYear,
          fromMonth,
          toMonth,
          today
        },
        dateLib
      ),
    [
      captionLayout,
      dateLib,
      endMonth,
      fromMonth,
      fromYear,
      startMonth,
      toMonth,
      toYear,
      today
    ]
  );

  const initialDisplayMonth = useMemo(
    () =>
      getInitialMonth(
        {
          fromYear,
          toYear,
          startMonth,
          endMonth,
          month,
          defaultMonth,
          today,
          numberOfMonths
        },
        dateLib
      ),
    [
      dateLib,
      defaultMonth,
      endMonth,
      fromYear,
      month,
      numberOfMonths,
      startMonth,
      toYear,
      today
    ]
  );

  // The first month displayed in the calendar
  const [firstMonth, setFirstMonth] = useControlledValue(
    initialDisplayMonth,
    props.month ? startOfMonth(props.month) : undefined
  );

  /** An array of the months displayed in the calendar. */
  const displayMonths = useMemo(
    () =>
      getDisplayMonths(
        firstMonth,
        navigationEndMonth,
        { numberOfMonths },
        dateLib
      ),
    [dateLib, firstMonth, navigationEndMonth, numberOfMonths]
  );

  /** The last month displayed in the calendar. */
  const lastMonth = displayMonths[displayMonths.length - 1];

  /** An array of the dates displayed in the calendar. */
  const dates = useMemo(
    () =>
      getDates(
        displayMonths,
        props.endMonth,
        { ISOWeek, fixedWeeks, locale, weekStartsOn },
        dateLib
      ),
    [
      ISOWeek,
      dateLib,
      displayMonths,
      fixedWeeks,
      locale,
      props.endMonth,
      weekStartsOn
    ]
  );

  /** An array of the Months displayed in the calendar. */
  const months = useMemo(
    () =>
      getMonths(
        displayMonths,
        dates,
        {
          fixedWeeks,
          ISOWeek,
          locale,
          weekStartsOn,
          reverseMonths,
          firstWeekContainsDate
        },
        dateLib
      ),
    [
      ISOWeek,
      dateLib,
      dates,
      displayMonths,
      firstWeekContainsDate,
      fixedWeeks,
      locale,
      reverseMonths,
      weekStartsOn
    ]
  );

  /** An array of the Weeks displayed in the calendar. */
  const weeks = useMemo(() => getWeeks(months), [months]);

  /** An array of the Days displayed in the calendar. */
  const days = useMemo(() => getDays(months), [months]);

  const previousMonth = useMemo(
    () =>
      getPreviousMonth(
        firstMonth,
        navigationStartMonth,
        { numberOfMonths, pagedNavigation, disableNavigation },
        dateLib
      ),
    [
      dateLib,
      disableNavigation,
      firstMonth,
      navigationStartMonth,
      numberOfMonths,
      pagedNavigation
    ]
  );
  const nextMonth = useMemo(
    () =>
      getNextMonth(
        firstMonth,
        navigationEndMonth,
        { numberOfMonths, pagedNavigation, disableNavigation },
        dateLib
      ),
    [
      dateLib,
      disableNavigation,
      firstMonth,
      navigationEndMonth,
      numberOfMonths,
      pagedNavigation
    ]
  );

  const isDayDisplayed = useCallback(
    (day: CalendarDay) =>
      weeks.some((week: CalendarWeek) =>
        week.days.some((d) => d.isEqualTo(day))
      ),
    [weeks]
  );

  const goToMonth = useCallback(
    (date: Date) => {
      if (disableNavigation) {
        return;
      }
      let newMonth = startOfMonth(date);
      // if month is before start, use the first month instead
      if (
        navigationStartMonth &&
        newMonth < startOfMonth(navigationStartMonth)
      ) {
        newMonth = startOfMonth(navigationStartMonth);
      }
      // if month is after endMonth, use the last month instead
      if (navigationEndMonth && newMonth > startOfMonth(navigationEndMonth)) {
        newMonth = startOfMonth(navigationEndMonth);
      }
      setFirstMonth(newMonth);
      onMonthChange?.(newMonth);
    },
    [
      disableNavigation,
      navigationEndMonth,
      navigationStartMonth,
      onMonthChange,
      setFirstMonth,
      startOfMonth
    ]
  );

  const goToDay = useCallback(
    (day: CalendarDay) => {
      if (isDayDisplayed(day)) {
        return;
      }
      goToMonth(day.date);
    },
    [goToMonth, isDayDisplayed]
  );

  const goToNextMonth = useCallback(() => {
    return nextMonth ? goToMonth(nextMonth) : undefined;
  }, [goToMonth, nextMonth]);

  const goToPreviousMonth = useCallback(() => {
    return previousMonth ? goToMonth(previousMonth) : undefined;
  }, [goToMonth, previousMonth]);

  const calendar: UseCalendar = useMemo(
    () => ({
      dates,
      months,
      weeks,
      days,
      today,

      navigationStartMonth,
      navigationEndMonth,

      firstMonth: firstMonth,
      lastMonth,
      previousMonth,
      nextMonth,

      setFirstMonth,

      isDayDisplayed,
      goToMonth,
      goToDay,
      goToNextMonth,
      goToPreviousMonth
    }),
    [
      dates,
      days,
      firstMonth,
      goToDay,
      goToMonth,
      goToNextMonth,
      goToPreviousMonth,
      isDayDisplayed,
      lastMonth,
      months,
      navigationEndMonth,
      navigationStartMonth,
      nextMonth,
      previousMonth,
      setFirstMonth,
      today,
      weeks
    ]
  );

  return calendar;
}
