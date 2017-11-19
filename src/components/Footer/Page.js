// @flow
import React from "react"

const style = {
  marginTop: "30px",
  marginBottom: "15px",
  color: "#212121",
  display: "flex",
  justifyContent: "center"
}

export default () => (
  <div style={style}>
    graphql&nbsp;Report&nbsp;generated&nbsp;by&nbsp;
    <a href='http://graphql.org/learn/' target='_blank' rel='noopener noreferrer'>
      graphql
    </a>
    &nbsp;and&nbsp;
    <a href='https://github.com/wheatandcat/graphql-ui' target='_blank' rel='noopener noreferrer'>
      graphql-ui
    </a>
  </div>
)
