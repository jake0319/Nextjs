import React from 'react'
import { useRouter } from 'next/router'
function Code() {
  const router =useRouter()
  const code = router.query.code
  return (
    <div>Code:{code}</div>
  )
}

export default Code