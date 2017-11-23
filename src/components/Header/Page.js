// @flow
import React, { type Node } from "react"

/* eslint-disable */
export default ({ children }: { children: Node }) => (
  <html lang="en">
    <head>
      <title>GraphQL-UI</title>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="./favicon.ico" />
      <link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" />
      <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js" />
      <script src="https://cdn.jsdelivr.net/clipboard.js/1.5.3/clipboard.min.js" />
      <script src="./actions.js" />
      <style>
        {`
        .ui-tooltip1{
          color: white;
          opacity: 1;
          font-size: 0.8rem;
          background: rgba(101, 97, 97, 0.99);
          border: none;
          border-radius: 0;
        }
        `}
      </style>
    </head>
    <body>{children}</body>
  </html>
)
