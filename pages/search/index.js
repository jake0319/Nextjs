import React, { useEffect, useState } from 'react'
import SubLayout from '@/components/SubLayout'
import { useRouter } from 'next/router';
import { fetchSearchResults } from '@/api';
import Searchbar from '@/components/Searchbar';
import CountryList from '@/components/CountryList';import Head from 'next/head';

export default function Search() {
  const [countries,setCountries] = useState([])
  const router = useRouter()
  const {q} = router.query

  const setAsyncData = async ()=>{
    const data = await fetchSearchResults(q)
    setCountries(data)
  }
  useEffect(()=>{
    if(q){ //q가 있는 경우에만 안전하게 실행
    setAsyncData()
    }
  },[q])

  return (
    <>
      <Head>
        <title>NARAS 검색 결과</title>
         <meta
          property="og:image"
          content="/thumbnail.png"
        />
        <meta property="og:title" content="NARAS 검색 결과"/>
        <meta property="og:description" content="전 세계 국가들의 정보를 확인해보세요"/>
      </Head>
      <Searchbar q={q}/>
      <CountryList countries={countries}/>
    </>
  )
}
Search.Layout = SubLayout;

