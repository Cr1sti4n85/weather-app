//Replace Spanish character in order to get expected result from api
export const replaceCharacter = (cityName) => {
  cityName = cityName.toLowerCase();
  if (cityName.includes("ñ")) {
    const newName = cityName.replace("ñ", "n");
    return newName;
  }
  return cityName;
};
