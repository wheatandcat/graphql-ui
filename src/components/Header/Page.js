// @flow
import React, { type Node } from "react"

/* eslint-disable */
export default ({ children }: { children: Node }) => (
  <html lang='en'>
    <head>
      <title>leasot report</title>
      <script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js' />
      <script>
      $(document).ready(function() {
        $(".head").click(function() {
          $(this)
            .next(".row")
            .stop(true, true)
            .slideToggle()
        })
      })
      </script>
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
