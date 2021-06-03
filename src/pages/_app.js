import '@styles/globals.css'
import 'nprogress/nprogress.css'
import dynamic from 'next/dynamic'
import Layout from '@components/Layout'

const TopBar = dynamic(
  () => {
    return import('@components/TopBar')
  },
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
