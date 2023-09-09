export const UseTimeZoneConverter = (time) => {
  const date = new Date(time);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const options = {
    timeZone: timeZone,
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const formattedTime = date
    .toLocaleString("en-US", options)
    .replace(/\//g, ".");

  const [datePart, timePart] = formattedTime.split(", ");
  let hoursWithminutes = timePart;
  if (timePart.substring(0, 2) === "24") {
    hoursWithminutes = "00" + timePart.substring(2);
  }
  const [month, day, year] = datePart.split(".");
  const final = `${day}.${month}.${year}, ${hoursWithminutes}`;

  return final || "";
};
