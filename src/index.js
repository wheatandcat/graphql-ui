#!/usr/bin/env node
// @flow
import "babel-polyfill"
import React from "react"
import program from "commander"
import { renderToStaticMarkup } from "react-dom/server"
import { ApolloClient } from "apollo-client"
import fetch from "node-fetch"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import gql from "graphql-tag"
import Header from "./components/Header"

program
  .usage("[options] <url>")
  .version("0.1.0")
  .parse(process.argv)

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8080/graphql", fetch }),
  cache: new InMemoryCache()
})

const output = async () => {
  const response = await client.query({
    query: gql`
      {
        __schema {
          mutationType {
            name
            description
            fields {
              name
              description
              type {
                name
                fields {
                  name
                  description
                  type {
                    name
                  }
                }
                ofType {
                  name
                  fields {
                    name
                    description
                    type {
                      name
                    }
                  }
                }
              }
              args {
                name
                type {
                  name
                }
              }
            }
          }
          queryType {
            name
            description
            fields {
              name
              description
              type {
                name
                fields {
                  name
                  description
                  type {
                    name
                  }
                }
                ofType {
                  name
                  fields {
                    name
                    description
                    type {
                      name
                    }
                  }
                }
              }
              args {
                name
                type {
                  name
                }
              }
            }
          }
        }
      }
    `
  })
  await console.log(response.data)

  const reportFileContent =
    (await "<!DOCTYPE html>\n") +
    renderToStaticMarkup(
      <Header>
        <div>aaa</div>
      </Header>
    )

  console.log(reportFileContent)
}

const start = async () => {
  console.log("start")
  output()
}

start(program)
