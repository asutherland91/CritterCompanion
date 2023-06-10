export const fetchCritterByType = async (type) => {
  if (type === "sea" || type === "bugs" || type === "fish") {
    const response = await fetch(`https://acnhapi.com/v1a/${type}/`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Please try again yes, there is an error. code: ${response.status}`
      );
    }
  } else {
    throw new Error(`${type} isn't a valid critter type.`);
  }
};

export const fetchSpecificCritter = async (type, id) => {
  if (type === "SeaCreatures" || type === "Bugs" || type === "Fish") {
    if (type === "SeaCreatures") {
      type = "Sea";
    }
    const response = await fetch(`https://acnhapi.com/v1a/${type}/${id}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Please try again yes, there is an error. code: ${response.status}`
      );
    }
  } else {
    throw new Error(`${type} isn't a valid critter type.`);
  }
};
