// @flow weak

import React, { type Node } from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"

const theme = createMuiTheme()

function Palette ({ children }: { children: Node }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default Palette
