#!/usr/bin/env node
// @flow
/* eslint-disable import/no-unresolved,import/extensions */
import "babel-polyfill"
import program from "commander"
import { writeFileSync } from "fs"
import rimraf from "rimraf"
import mkdirp from "mkdirp"
import { ApolloClient } from "apollo-client"
import fetch from "node-fetch"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import gql from "graphql-tag"
import { execSync } from "child_process"

program
  .usage("[options] <url> <output>")
  .version("0.1.0")
  .parse(process.argv)

const outputDir = process.argv[3] || "graphql-ui-reports"
const endpoint = process.argv[2] || "http://localhost:8080/graphql"

const client = new ApolloClient({
  link: new HttpLink({ uri: endpoint, fetch }),
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
                description
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
                description
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

  await writeFileSync(`${outputDir}/response.json`, JSON.stringify(response), { encoding: "utf8" })
  await writeFileSync(`${outputDir}/info.json`, JSON.stringify({ endpoint }), { encoding: "utf8" })

  await execSync("npm run webpack")
}

const start = async () => {
  await rimraf.sync(outputDir)
  await mkdirp.sync(outputDir)

  await output()
}

start(program)
