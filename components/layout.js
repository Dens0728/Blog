import Header from 'components/header'
import Footer from 'components/footer'

const layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
export default layout
