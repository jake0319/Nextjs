import React from 'react'
import { useRouter } from 'next/router'
import SubLayout from '@/components/SubLayout'
function Country() {
  const router =useRouter()
  const code = router.query.code
  return (
    <div>Country:{code}</div>
  )
}
Country.Layout = SubLayout;
export default Country