export const formartNumber = (num: number) => {
  const nFormat = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 0,
  });
  return nFormat.format(num);
};

export const getFirstItemOfObject = (obj: Record<string, any>): any => {
  if (!obj) return "";
  const key = Object.keys(obj)[0];
  if (typeof obj[key] !== "object" || obj[key] === null) {
    return obj[key];
  }
  return getFirstItemOfObject(obj[key]);
};

export const createCountryDescription = (data: CountryInfo): string => {
  return `${data.nativeName}, officially known as ${data.officialName}, located in the continent of ${data.continent}. It has a population of approximately ${data.population} people and is situated in the ${data.region} region. The capital city of ${data.officialName} is ${data.capital}. `;
};
