/**
 * Returns the start of the ISO week (Monday at 00:00:00.000) for a given date.
 *
 * ISO 8601 week starts on Monday (day index 1). For Sunday (day index 0)
 * we normalise by treating it as day 7 so the diff is always positive.
 *
 * @param date - The reference date. Defaults to `new Date()`.
 * @returns A new `Date` set to Monday 00:00:00.000 of the same week.
 */
export function getStartOfWeek(date: Date = new Date()): Date {
  const day = date.getDay(); // 0 (Sun) – 6 (Sat)
  const daysFromMonday = day === 0 ? 6 : day - 1;

  const result = new Date(date);
  result.setDate(date.getDate() - daysFromMonday);
  result.setHours(0, 0, 0, 0);

  return result;
}

/**
 * Returns the start of the calendar month (1st at 00:00:00.000) for a given date.
 *
 * @param date - The reference date. Defaults to `new Date()`.
 * @returns A new `Date` set to the 1st of the month at 00:00:00.000.
 */
export function getStartOfMonth(date: Date = new Date()): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Returns the start of the calendar year (Jan 1 at 00:00:00.000) for a given date.
 *
 * @param date - The reference date. Defaults to `new Date()`.
 * @returns A new `Date` set to January 1st at 00:00:00.000.
 */
export function getStartOfYear(date: Date = new Date()): Date {
  return new Date(date.getFullYear(), 0, 1);
}
