import '@/styles/globals.css'
import Layout from '@/components/Layout'
export default function App({ Component, pageProps }) {
  const EmptyLayout = ({children}) =><>{children}</>
  //<div>태그를 직접 이용하면 레이아웃의 직계 자식요소로 div태그가 인식되어서 fragment tag로 작성해야함
  const SubLayout = Component.Layout || EmptyLayout
  //레이아웃이 있으면 적용하고 없으면 칠드런을 그대로 보여주는 엠티레이아웃으로 인덱스페이지 오류 방지
  return (
    <div>
      <Layout>
        <SubLayout>
          <Component {...pageProps} />
        </SubLayout>
      </Layout>
    </div>
  )
  } 