/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section sx={{ fontSize: [3, 4, 5], fontWeight: `450`, color: `heading`, mb: 4}}>
        > Latest Posts
      </section>

      <Listing posts={posts} showTags={false} />
      <section sx={{ mb: [3,4,5], p: { fontSize: [1, 2, 3] } }}>
        <Hero />
      </section>
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage