/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useContext } from "react"

export default (props) => {
  return (
    <main
      sx={{
        display: "flex",
        flex: 1,
        px: [3, 4],
        pb: 4,
        alignItems: "center",
        bg: "white",
        borderBottom: "solid 1px",
        borderTop: "solid 1px",
        borderColor: "#EEE",
      }}
      {...props}
    />
  )
}