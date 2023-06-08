export const cleanCritterData = (critterData) => {
  return critterData
    .filter((critter) => critter.id && critter["file-name"])
    .map((critter) => {
      return {
        ...critter,
        "file-name": formatName(critter["file-name"])
      };
    });
};

export const cleanCritterDetailsData = (critterData) => {
  if(critterData.id && critterData["file-name"]) {
    return {
      ...critterData,
      "file-name": formatName(critterData["file-name"]),
      "month-available": formatAvailability(critterData.availability["month-array-northern"])
    };
  }
}

const formatName = (name) => {
  return name
    .replace("_", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatAvailability = (monthArray) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const formattedMonths = monthArray.map((month) => {
    const monthIndex = month - 1;
    return monthNames[monthIndex];
  });

  const formattedString = formattedMonths.join(", ");

  return formattedString;
};