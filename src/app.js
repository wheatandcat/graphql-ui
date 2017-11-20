/* eslint-disable */
import "babel-polyfill"
import React from "react"
import { render } from "react-dom"
import Page from "./components/Page"

const data = require("../graphql-ui-reports/response.json")
const info = require("../graphql-ui-reports/info.json")

render(
  <Page
    endpoint={info.endpoint}
    queries={data.data.__schema.queryType.fields || []}
    mutations={data.data.__schema.mutationType.fields || []}
  />,
  document.querySelector("#root")
)
