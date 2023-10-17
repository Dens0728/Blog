import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
const Home = props => (
  <Container>
    <Hero {...props} />
  </Container>
)
const getStaticProps = async context => ({
  props: {
    title: 'CUBE',
    subtitle: 'アウトプットしていくサイト',
    imageOn: true
  }
})
export { getStaticProps }
export default Home
