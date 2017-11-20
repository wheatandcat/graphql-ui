// @flow
import React, { type Node } from "react"

/* eslint-disable */
export default ({ children }: { children: Node }) => (
  <html lang="en">
    <head>
      <title>leasot report</title>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" />
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
