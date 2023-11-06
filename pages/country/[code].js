import React from 'react'
import { useRouter } from 'next/router'
import SubLayout from '@/components/SubLayout'
import { fetchCountry } from '../api'

export default function Country({country}) {
  const router =useRouter()

  if(router.isFallback){
    return <div>page is loading...</div>
  }
  return (
    <div>{country.commonName}:{country.officialName}</div>
  )
}
Country.Layout = SubLayout; //_app.js의 Component로 해당 페이지 컴포넌트가 할당됨
export const getStaticPaths = async () => {
  return {
    paths: [
      {params: {code: "ABW"}}, //params변수가 value의 키값으로
      {params: {code: "KOR"}}
   ],
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const {code} = context.params
  let country = null
  if(code){
    country = await fetchCountry(code)
  }
  return {
    props:{
      country
    }
  }
}