import Link from "next/link"
export default function Home() {
  const code = "KOR"
  return (
    <>    
    <Link href={"/search"}>Search페이지로 이동</Link>
    <Link href={`/country/${code}`}>템플릿 리터럴 방식으로 이동</Link>
    <Link href={{
      pathname: '/country/[code]', 
      query: {code: code}
    }}>URL obejct형식으로 이동(좀 더구조화된 방식)</Link>
    </>
  )
}
