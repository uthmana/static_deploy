import Card from "./components/Card";
import Search from "./components/Search";
import Select from "./components/Select";

export default async function Home() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return (
    <main className="container flex flex-col justify-between py-10">
      <div className="w-full flex flex-col md:flex-row justify-between mb-5 gap-3">
        <div className="w-full md:w-[300px]">
          <Search />
        </div>
        <div className="w-full md:w-[300px]">
          <Select />
        </div>
      </div>

      <div className="text-black dark:text-white mb-10 text-xs flex gap-2">
        <div id="selectedRegion" className="capitalize">
          All
        </div>
        <div>
          <span id="searchResult"></span> / <span id="totalItem"></span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {countries?.map((country: any) => (
          <Card country={country} key={country.ccn3} />
        ))}
      </div>
    </main>
  );
}
