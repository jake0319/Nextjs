import React from 'react'
import { useRouter } from 'next/router'
import SubLayout from '@/components/SubLayout'
import { fetchCountry } from '../api'

export default function Country({country}) {
  const router =useRouter()
  // const code = router.query.code
  return (
    <div>{country.commonName}:{country.officialName}</div>
  )
}
Country.Layout = SubLayout;

export const getServerSideProps = async (context) => {
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