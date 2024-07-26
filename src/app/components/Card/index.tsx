import Link from "next/link";
import { formartNumber } from "@/utils";
import CardItem from "../CardItem";
import "./card.css";

export default function Card({ country }: { country: any }) {
  return (
    <div
      data-name={country?.name?.official}
      data-continent={country?.continents}
      className="hover:shadow-md dark:shadow-none flex flex-col w-full max-w-[300px] bg-slate-100 text-black dark:text-white  dark:bg-gray-900 sm:w-[280px] relative m-4 pb-4 border rounded-md dark:border-white/10 dark:hover:border-white/25 overflow-hidden js-card"
    >
      <Link href={`/country/${country.ccn3}`} className="card-link"></Link>
      <img src={country.flags.png} className="card-img" />
      <div className="p-4">
        <h2 className="card-title">{country?.name?.official}</h2>
        <div className="flex flex-col">
          <CardItem
            name="Population"
            value={formartNumber(country?.population)}
          />
          <CardItem name="Region" value={country?.region} />
          <CardItem name="Capital" value={country.capital} />
        </div>
      </div>
    </div>
  );
}
