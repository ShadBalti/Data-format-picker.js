// date-format.js
(function (global) {
  // Define your date formatting functions

  function formatDate(date, dateFormat, locale = 'en-US') {
    return new Intl.DateTimeFormat(locale, { dateStyle: dateFormat }).format(date);
  }

  function formatTime(date, timeFormat, locale = 'en-US') {
    return new Intl.DateTimeFormat(locale, { timeStyle: timeFormat }).format(date);
  }

  function formatDateTime(date, dateTimeFormat, locale = 'en-US') {
    return new Intl.DateTimeFormat(locale, { dateStyle: dateTimeFormat, timeStyle: dateTimeFormat }).format(date);
  }

  function formatRelativeTime(date, locale = 'en-US') {
    const now = new Date();
    const diffInMilliseconds = date - now;

    const seconds = Math.floor(diffInMilliseconds / 1000);
    if (seconds < 60) {
      return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    }

    const days = Math.floor(hours / 24);
    if (days < 30) {
      return days === 1 ? '1 day ago' : `${days} days ago`;
    }

    return formatDate(date, 'medium', locale);
  }

  // Expose your date formatting functions to the global scope
  global.DateFormatter = {
    formatDate,
    formatTime,
    formatDateTime,
    formatRelativeTime,
  };
})(this);
                                            
