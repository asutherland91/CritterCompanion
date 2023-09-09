export const fetchCritterByType = async (type) => {
  if (type === "sea" || type === "bugs" || type === "fish") {
    const response = await fetch(`https://api.nookipedia.com/nh/${type}`, {
      method: "GET",
      headers
    });
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

export const fetchSpecificCritter = async (type, name) => {
  if (type === "sea" || type === "bugs" || type === "fish") {
    const response = await fetch(`https://api.nookipedia.com/nh/${type}/${name}`, {
      method: "GET",
      headers
    });
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

const headers = {
  "X-API-KEY": "a3580d92-19aa-4920-a8e4-e0c9574e2d72",
  "Access-Control-Allow-Origin": "*",
}
