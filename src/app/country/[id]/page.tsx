import CardItem from "@/app/components/CardItem";
import BackArrowIcon from "@/app/components/Icons/Back";
import {
  createCountryDescription,
  formartNumber,
  getFirstItemOfObject,
} from "@/utils";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getCountryData(id: number | string) {
  const country = await fetch(
    `https://restcountries.com/v3.1/alpha/${id}`
  ).then((res) => res.json());
  return country[0];
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const data: Country | any = await getCountryData(params.id);
  if (!data) {
    notFound();
  }

  const descData: CountryInfo = {
    nativeName: getFirstItemOfObject(data?.name?.nativeName),
    officialName: data?.name?.official,
    continent: data?.continents,
    population: formartNumber(data.population),
    region: data?.region,
    capital: data?.capital,
  };

  return {
    title: `${data.flag} ${data.name.official}` || "Country flag",
    description:
      createCountryDescription(descData) ||
      "REST Countries API data and display",
    openGraph: {
      title: data?.name?.official || "Country flag",
      description: "REST Countries API data and display",
      images: [
        {
          url: data?.flags.png,
          width: 800,
          height: 600,
          alt: "Country flag",
        },
      ],
    },
  };
}

export default async function CountryPage({ params }: { params: Params }) {
  const data: Country | any = await getCountryData(params.id);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container flex flex-col py-10 min-h-[80vh]">
      <Link
        href={"/"}
        className="dark:bg-gray-900 shadow-sm bg-white dark:text-white text-black max-w-fit py-2 px-7 mb-10 flex gap-1 rounded-md justify-center items-center"
      >
        <BackArrowIcon />
        Back
      </Link>

      <div className="flex flex-col items-start md:flex-row gap-4 text-black dark:text-white">
        <img
          src={data?.flags.png}
          className="w-full md:w-1/2 h-auto max-h-[380px] xl:min-h-[380px] border  border-white/10"
        />

        <div className="p-3">
          <h1 className="text-4xl font-bold mb-10">{data?.name?.official}</h1>
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-1">
              <CardItem
                name="Native Name"
                value={getFirstItemOfObject(data?.name?.nativeName)}
                className="text-xl"
              />
              <CardItem
                name="Population "
                value={formartNumber(data.population)}
                className="text-xl"
              />
              <CardItem
                name="Region"
                value={data?.region}
                className="text-xl"
              />
              <CardItem
                name="Sub Region"
                value={data?.subregion}
                className="text-xl"
              />
              <CardItem
                name="Capital"
                value={data?.capital ? data?.capital[0] : ""}
                className="text-xl"
              />
              <CardItem
                name="Continent"
                value={data?.continents}
                className="text-xl"
              />
            </div>

            <div className="flex flex-col gap-1">
              <CardItem
                name="Top Level Domain"
                value={data?.tld}
                className="text-xl"
              />
              <CardItem
                name="Currencies"
                value={getFirstItemOfObject(data?.currencies)}
                className="text-xl"
              />
              <CardItem
                name="Languages"
                value={getFirstItemOfObject(data?.languages)}
                className="text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const countries = await fetch("https://restcountries.com/v3.1/all").then(
    (res) => res.json()
  );

  return countries.map((country: any) => ({
    id: country.ccn3,
  }));
}
