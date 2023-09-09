export const cleanCritterData = (critterData) => {
  return critterData
    .filter((critter) => critter.number && critter["name"])
    .map((critter) => {
      return {
        ...critter,
        "name": formatName(critter["name"]),
      };
    });
};

// export const cleanCritterDetailsData = (critterData) => {
//   if (critterData.number && critterData["name"]) {
//     return {
//       ...critterData,
//       "name": formatName(critterData["name"]),
//       "month-available": formatAvailability(
//         critterData.availability["month-array-northern"]
//       ),
//       "time-available": formatTime(critterData.availability["time"]),
//     };
//   }
// };

const formatName = (name) => {
  return name
    .replaceAll("_", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// const formatAvailability = (monthArray) => {
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const formattedMonths = monthArray.map((month) => {
//     const monthIndex = month - 1;
//     return monthNames[monthIndex];
//   });

//   const formattedString = formattedMonths.join(", ");

//   return formattedString;
// };

// const formatTime = (time) => {
//   if (time === "") {
//     return "All Day";
//   } else {
//     return time;
//   }
// };
