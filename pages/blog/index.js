import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

const blog = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' />
      <Hero title='Blog' subtitle='Recent Posts' />
    </Container>
  )
}

export default blog
