#!/usr/bin/env node
// @flow
/* eslint-disable import/no-unresolved,import/extensions,no-underscore-dangle */
import "babel-polyfill"
import React from "react"
import program from "commander"
import cpx from "cpx"
import { writeFileSync } from "fs"
import { renderToString } from "react-dom/server"
import rimraf from "rimraf"
import mkdirp from "mkdirp"
import { ApolloClient } from "apollo-client"
import fetch from "node-fetch"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import gql from "graphql-tag"
import { SheetsRegistry } from "react-jss/lib/jss"
import { create } from "jss"
import preset from "jss-preset-default"
import JssProvider from "react-jss/lib/JssProvider"
import createGenerateClassName from "material-ui/styles/createGenerateClassName"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import Header from "./components/Header"
import Provider from "./components/Provider"
import Page from "./components/Page"

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

  const sheet = new ServerStyleSheet()

  const jss = create(preset())

  jss.options.createGenerateClassName = createGenerateClassName

  const sheetsRegistry = new SheetsRegistry()

  const reportFileContent = await renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <JssProvider registry={sheetsRegistry} jss={jss}>
        <Provider>
          <div>
            <Header>
              <div>
                <Page
                  endpoint={endpoint}
                  queries={response.data.__schema.queryType.fields || []}
                  mutations={response.data.__schema.mutationType.fields || []}
                />
              </div>
            </Header>
          </div>
        </Provider>
      </JssProvider>
    </StyleSheetManager>
  )

  const styleTags = sheet.getStyleTags()

  const css = sheetsRegistry.toString()

  await writeFileSync(
    `${outputDir}/index.html`,
    `<!DOCTYPE html>\n<style>${css}</style>${styleTags}${reportFileContent}`,
    { encoding: "utf8" }
  )

  await cpx.copySync("./static/open.js", `${outputDir}`)
}

const start = async () => {
  await rimraf.sync(outputDir)
  await mkdirp.sync(outputDir)

  await output()
}

start(program)
