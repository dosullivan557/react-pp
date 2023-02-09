/**
 * A regular expression pattern that matches valid UK postal codes.
 *
 * @constant
 *
 * @type {RegExp}
 */
export const postcode =
  /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

/**
 * Regex expression that matches a valid email address.
 * @type {RegExp}
 */
export const emailAddress =
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})?$/;

/**
 * Regex expression that matches a complex password.
 * A complex password contains at least 8 characters with at least 1 uppercase letter,
 * 1 lowercase letter, 1 number, and 1 special character.
 * @type {RegExp}
 */

export const complexPassword =
  /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
/**
 * Regex expression that matches a moderate password.
 * A moderate password contains at least 8 characters with at least 1 uppercase letter,
 * 1 lowercase letter, and 1 number.
 * @type {RegExp}
 */

export const moderatePassword =
  /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;

/**
 * Regex expression that matches an alphanumeric string.
 * An alphanumeric string contains only letters (upper and lowercase) and numbers.
 * @type {RegExp}
 */
export const alphaNumeric = /^([a-zA-Z0-9 ]+)$/;
/**
 * Regex expression that matches a valid username.
 * A username contains only lowercase letters, numbers, underscores and dashes and is between 3 to 16 characters long.
 * @type {RegExp}
 */

export const username = /^[a-z0-9_-]{3,16}$/;

/**
 * Regex expression that matches a valid URL.
 * @type {RegExp}
 */

export const url =
  /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

/**
 * Regex expression that matches a valid international phone number.
 * @type {RegExp}
 */

export const internationalPhoneNumber =
  /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
