// @flow
import React, { type Node } from "react"

export default ({ children }: { children: Node }) => (
  <html lang='en'>
    <head>
      <title>leasot report</title>
    </head>
    <body
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      {children}
    </body>
  </html>
)
