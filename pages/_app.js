import '@/styles/globals.css'
import Layout from '@/components/Layout'
export default function App({ Component, pageProps }) {
  const EmptyLayout = ({children}) =><div>{children}</div>
  const SubLayout = Component.Layout || EmptyLayout
  //레이아웃이 있으면 적용하고 없으면 칠드런을 그대로 보여주는 엠티레이아웃으로 인덱스페이지 오류 방지
  return (
    <div>
      <Layout>
        {/* 서브레이아웃 ~ 푸터 */}
        <Component.Layout>
          <Component {...pageProps} />
        </Component.Layout>
      </Layout>
    </div>
  )
}
