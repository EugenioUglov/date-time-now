/**
 * Pads a number with a leading zero if it is less than 10.
 * @param {number} value
 * @returns {string}
 */
function padZero(value) {
  return value < 10 ? `0${value}` : `${value}`;
}

/**
 * Returns the current local date formatted as YYYY<separator>MM<separator>DD.
 * @param {string} [separator='_']
 * @returns {string}
 */
export function getDateNow(separator = '_') {
  const date = new Date();
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());

  return `${year}${separator}${month}${separator}${day}`;
}

/**
 * Returns the current local time formatted as HH<separator>MM<separator>SS.
 * @param {string} [separator='_']
 * @returns {string}
 */
export function getTimeNow(separator = '_') {
  const date = new Date();
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return `${hours}${separator}${minutes}${separator}${seconds}`;
}

export default {
  getDateNow,
  getTimeNow,
};