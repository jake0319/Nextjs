import Link from "next/link"
//서버에서 돔구성을 위해 초기 1회 실행,
//이후 클라이언트에서 js번들 하이드레이션이후 리액트 컴포넌트 호출
export default function Home({name}) {
  return (
    <>    
      ServerSide Component
      <div>
        serverside props: {name}
      </div>
    </>
  )
}
//서버에서만 실행되는 함수, web API호출 불가(ex: window.location)
//아래함수를 정의한 컴포넌트는 SSR컴포넌트가 된다.
export const getServerSideProps =()=>{
  return{
    props:{
      name: 'KOREA',
    }
  }
}