import { getAllPosts } from 'lib/api'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'
import Post from './[slug]'

import { eyecatchLocal } from 'lib/constants'

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
  for (const post of post) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts: posts
    }
  }
}
export { getStaticProps }
export default blog
