import React from 'react'
import style from './Layout.module.css'
import { useRouter } from 'next/router'

export default function Layout({children}) {
  const router = useRouter();

  return (
    <div>
      <header onClick={()=>{
        router.push('/')
      }} className={style.header}>NARAS🌎</header>
      <main className={style.main}>{children}</main>
    </div>
  )
}