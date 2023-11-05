document.addEventListener('DOMContentLoaded', () => {
  const selectedDateInput = document.getElementById('selected-date');
  const showPickerButton = document.getElementById('show-picker');
  const datePickerPopup = document.getElementById('date-picker-popup');
  const currentMonthElement = document.getElementById('current-month');
  const prevMonthButton = document.getElementById('prev-month');
  const nextMonthButton = document.getElementById('next-month');
  const calendarDates = document.getElementById('calendar-dates');

  let selectedDate = null;
  let currentDate = new Date();

  showPickerButton.addEventListener('click', () => {
    datePickerPopup.classList.toggle('hidden');
    updateCalendar(currentDate);
  });

  prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar(currentDate);
  });

  nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar(currentDate);
  });

  function updateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

    currentMonthElement.textContent = DateFormatter.formatDate(date, 'MMMM yyyy');

    // Clear previous calendar dates
    calendarDates.innerHTML = '';

    // Fill in calendar dates
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyDay = document.createElement('div');
      emptyDay.classList.add('empty-day');
      calendarDates.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateButton = document.createElement('button');
      dateButton.textContent = day;
      dateButton.addEventListener('click', () => {
        selectedDate = new Date(year, month, day);
        selectedDateInput.value = DateFormatter.formatDate(selectedDate, 'long');
        datePickerPopup.classList.add('hidden');
      });
      calendarDates.appendChild(dateButton);
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      const emptyDay = document.createElement('div');
      emptyDay.classList.add('empty-day');
      calendarDates.appendChild(emptyDay);
    }
  }

  // Handle click outside of the date picker to close it
  document.addEventListener('click', (event) => {
    if (!datePickerPopup.contains(event.target) && event.target !== showPickerButton) {
      datePickerPopup.classList.add('hidden');
    }
  });
});
      
