type Params = {
  id: string;
};

type CountryName = {
  official: string;
};

type Country = {
  name: CountryName;
  status: boolean;
};
type CountryInfo = {
  nativeName: string;
  officialName: string;
  continent: string;
  population: string;
  region: string;
  capital: string;
};
