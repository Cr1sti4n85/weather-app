//Replace Spanish character in order to get expected result from api
export const replaceCharacter = (cityName) => {
  if (cityName.includes("ñ")) {
    const newName = cityName.replace("ñ", "n");
    return newName;
  }
};
