import Link from "next/link"
import { useRouter } from "next/router"
export default function Home() {
  const code = "KOR"
  const router = useRouter()

  const onClickButton = () => {
    router.push({
      pathname: '/country/[code]',
      query: {code}
    })
  }

  return (
    <>    
      <div>
        <Link href={"/search"}>Search페이지로 이동</Link>
      </div>
      <div>
        <Link href={`/country/${code}`}>템플릿 리터럴 방식으로 이동</Link>  
      </div>
      <div>
        <Link href={{
        pathname: '/country/[code]', 
        query: {code: code}
        }}>URL obejct형식으로 이동(좀 더구조화된 방식)</Link>
      </div>
      <button onClick={onClickButton}>KOR페이지로 이동하기 버튼</button>
    </>
  )
}
