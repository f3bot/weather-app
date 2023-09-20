function changeLastTwoCharacters(inputString, newLastTwoCharacters) {
  if (inputString.length < 2) {
    return "Input string is too short to change the last two characters.";
  }

  const substring = inputString.slice(0, -2);

  const result = substring + newLastTwoCharacters;

  return result;
}

function formatDate(inputDate) {
  const date = new Date(inputDate);

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the day, date, month, and year components
  const day = dayNames[date.getDay()];
  const dateNum = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear().toString().slice(-2);

  // Add 'st', 'nd', 'rd', or 'th' to the date based on its value
  let dateSuffix;
  if (dateNum >= 11 && dateNum <= 13) {
    dateSuffix = "th";
  } else {
    switch (dateNum % 10) {
      case 1:
        dateSuffix = "st";
        break;
      case 2:
        dateSuffix = "nd";
        break;
      case 3:
        dateSuffix = "rd";
        break;
      default:
        dateSuffix = "th";
        break;
    }
  }

  const formattedDate = `${day}, ${dateNum}${dateSuffix} ${month} '${year}`;

  return formattedDate;
}

const formatTime = (inputDate) => {
  inputDate = inputDate.slice(11);

  return inputDate;
};

const formatDay = (inputDate) => {
  const dateString = inputDate;
  const date = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];

  return dayOfWeek;
};
export { changeLastTwoCharacters, formatDate, formatTime , formatDay};
