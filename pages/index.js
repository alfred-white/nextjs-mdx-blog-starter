import config from "../blog.config"
import Wrapper from "../src/layout/Wrapper"
import Home from "../src/views/Home"
import { getAllPosts } from "../src/api"

const PostsPage = ({ posts, prevPosts, nextPosts }) => (
  <Wrapper url="/" title={config.title} description={config.description}>
    <Home posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />
  </Wrapper>
)

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])

  const startIndex = 0
  const endIndex = config.postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 1

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  }
}

export async function getStaticPaths() {
  const numPages = getAllPosts().length % config.postsPerPage

  return {
    paths: [...Array(numPages)].map((v, i) => {
      return {
        params: { page: i.toString() },
      }
    }),
    fallback: false,
  }
}

export default PostsPage
