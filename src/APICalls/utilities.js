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
      "file-name": formatName(critterData["file-name"])
    }
  }
}

const formatName = (name) => {
  return name
    .replace("_", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};