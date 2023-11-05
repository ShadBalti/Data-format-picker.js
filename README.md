# Date Formatting Library and Date Picker Component

This project provides a JavaScript date formatting library and a simple date picker component to enhance your web applications by allowing you to easily format dates and select dates and times. The library and component are designed to be highly customizable and easy to integrate into your projects.

## Features

- Format dates, times, date-time combinations, and relative times.
- Localize date and time formatting according to the user's locale.
- Create a user-friendly date picker component for date selection.
- Improve the readability of charts and graphs by formatting timestamps.

## Getting Started

To get started with this library and date picker component, follow these steps:

1. Include the `date-format.js` file in your project.
2. Customize the library as needed to match your requirements.
3. Include the `date-picker.js` and `date-picker.css` files for the date picker component.
4. Customize the component's appearance and behavior to align with your project's design.

## Usage

### Date Formatting

#### Format a Date

```javascript
const date = new Date();
const formattedDate = DateFormatter.formatDate(date, 'long');
console.log(formattedDate);
