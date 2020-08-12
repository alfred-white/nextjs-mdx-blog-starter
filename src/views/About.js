import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/about.mdx"
import Container from "../ui/Container"

const About = (props) => {
  const components = {
    Box: (props) => <Box {...props} />,
  }
  return (
    <MDXProvider components={components}>
      <Container
        sx={{
          p: [3, 4, 5],
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default About
