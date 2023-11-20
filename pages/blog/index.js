import { getAllPosts } from 'lib/api'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import Posts from 'components/posts'
import Post from './[slug]'

const blog = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero title='Blog' subtitle='Recent Posts' />
      <Posts posts={posts} />
    </Container>
  )
}
const getStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts
    }
  }
}

export default blog
