import { fetchCountries } from "../api";
import Searchbar from "@/components/Searchbar";
import CountryList from "@/components/CountryList";
import Head from "next/head";
export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>NARAS</title>
        <meta
          property="og:image"
          content="/thumbnail.png"
        />
        <meta property="og:title" content="NARAS"/>
        <meta property="og:description" content="전 세계 국가들의 정보를 확인해보세요"/>
        
      {/* og태그: 섬네일,타이틀,디스크립션을 sns나 링크 미리보기용으로 설정하는 태그 */}
      </Head>
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