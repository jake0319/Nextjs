import { fetchCountries } from "../api";
import Searchbar from "@/components/Searchbar";
import CountryList from "@/components/CountryList";
export default function Home({ countries }) {
  return (
    <>
      <Searchbar />
      <CountryList countries={countries}/>
    </>
  );
}

export const getServerSideProps = async () => {
  // API 호출 코드가 필요함
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};