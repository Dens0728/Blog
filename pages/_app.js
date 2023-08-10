import Layout from 'components/layout'
import 'styles/globals.css'
// import 'styles/sample.css'
const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
