import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import SubLayout from '@/components/SubLayout'
import { fetchCountry } from '@/api'
import style from './[code].module.css'
export default function Country({country}) {
  const router =useRouter()

  if(router.isFallback){
    return <div>page is loading...</div>
  }
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji}&nbsp;{country.commonName}
        </div>
        <div className={style.officialName}>
          {country.officialName}
        </div>
      </div>
      <div className={style.flag_img}>
        <Image
          src={country.flagImg}
          fill
          alt={`${country.commonName}의 국기 이미지입니다`}
        />
      </div>
      <div className={style.body}>
        <div>
          <b>코드 :</b>&nbsp;{country.code}
        </div>
        <div>
          <b>수도 :</b>&nbsp;{country.capital.join(", ")}
        </div>
        <div>
          <b>지역 :</b>&nbsp;{country.region}
        </div>
        <div>
          <b>지도 :</b>&nbsp;
          <a target="_blank" href={country.googleMapURL}>
            {country.googleMapURL}
          </a>
        </div>
      </div>
    </div>
  );
}
Country.Layout = SubLayout; //_app.js의 Component로 해당 페이지 컴포넌트가 할당됨
export const getStaticPaths = async () => {
  return {
    paths: [
      {params: {code: "ABW"}}, //params변수가 value의 키값으로
      {params: {code: "KOR"}}
    ],
    fallback: true,
    //따로 보여줄 페이지가 있다면
  }
}

export const getStaticProps = async (context) => {
  const {code} = context.params; //url parameter
  console.log(`${code}페이지 생성 `)

  let country = null;
  if(code) country = await fetchCountry(code);

  return {
    props: { 
      country,
    },
    revalidate : 3 // second 단위로 입력 -> 3초마다 빌드 
  }
}