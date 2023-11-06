import React, { useEffect, useState } from 'react'
import SubLayout from '@/components/SubLayout'
import { useRouter } from 'next/router';
import { fetchSearchResults } from '@/api';
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
  },
  [q])

  return (
    <div>
      {
      countries.map(country=>
      <div key={country.code}>{country.commonName}
      </div>)
      }
      </div>
  )
}
Search.Layout = SubLayout;

