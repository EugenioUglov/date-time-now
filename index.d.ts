/**
 * Returns the current local date formatted as YYYY<separator>MM<separator>DD.
 */
export function getDateNow(separator?: string): string;

/**
 * Returns the current local time formatted as HH<separator>MM<separator>SS.
 */
export function getTimeNow(separator?: string): string;

declare const dateTimeNow: {
  getDateNow: typeof getDateNow;
  getTimeNow: typeof getTimeNow;
};

export default dateTimeNow;