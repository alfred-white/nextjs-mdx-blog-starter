import { Box, Text } from "theme-ui"

export default (props) => (
  <Box
    as="footer"
    sx={{
      p: 4,
      color: "#AAA",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created by <a href="https://johnpolacek">John Polacek</a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Open sourced on{" "}
      <a href="https://github.com/johnpolacek/nextjs-mdx-blog-starter">
        Github
      </a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow <a href="https://twitter.com/johnpolacek">@johnpolacek</a>
    </Text>
  </Box>
)