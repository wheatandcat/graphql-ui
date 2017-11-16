// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { center } from "../../../.storybook/decorators"
import { Query, MutationType, Fields, Example } from "./"

storiesOf("Query", module)
  .addDecorator(withKnobs)
  .addDecorator(center)
  .add("Query", () => (
    <Query
      open={boolean("open", true)}
      queryType='QUERYTYPE'
      name='contribution'
      description='find contribution'
      args={[
        {
          name: "id",
          description: "contribution id",
          type: {
            name: "Int"
          }
        },
        {
          name: "type",
          description: "contribution type",
          type: {
            name: "Int"
          }
        }
      ]}
      fields={[
        {
          description: "created date",
          name: "createdAt",
          type: {
            name: "String"
          }
        },
        {
          description: "delete date",
          name: "deletedAt",
          type: {
            name: "String"
          }
        },
        {
          description: "id",
          name: "id",
          type: {
            name: "Int"
          }
        },
        {
          description: "title",
          name: "title",
          type: {
            name: "String"
          }
        },
        {
          description: "update date",
          name: "updatedAt",
          type: {
            name: "String"
          }
        },
        {
          description: "user id",
          name: "userId",
          type: {
            name: "Int"
          }
        },
        {
          description: "view status 0 ore 1",
          name: "viewStatus",
          type: {
            name: "Int"
          }
        }
      ]}
    />
  ))
  .add("MutationType", () => (
    <MutationType
      open={boolean("open", true)}
      queryType='MutationType'
      name='contribution'
      description='find contribution'
      args={[
        {
          name: "id",
          description: "contribution id",
          type: {
            name: "Int"
          }
        },
        {
          name: "type",
          description: "contribution type",
          type: {
            name: "Int"
          }
        }
      ]}
      fields={[
        {
          description: "created date",
          name: "createdAt",
          type: {
            name: "String"
          }
        },
        {
          description: "delete date",
          name: "deletedAt",
          type: {
            name: "String"
          }
        },
        {
          description: "id",
          name: "id",
          type: {
            name: "Int"
          }
        },
        {
          description: "title",
          name: "title",
          type: {
            name: "String"
          }
        },
        {
          description: "update date",
          name: "updatedAt",
          type: {
            name: "String"
          }
        },
        {
          description: "user id",
          name: "userId",
          type: {
            name: "Int"
          }
        },
        {
          description: "view status 0 ore 1",
          name: "viewStatus",
          type: {
            name: "Int"
          }
        }
      ]}
    />
  ))
  .add("Fields", () => (
    <Fields
      description='foo'
      fields={[
        {
          name: "id",
          description: "contribution id",
          type: {
            name: "Int"
          }
        },
        {
          name: "type",
          description: "contribution type",
          type: {
            name: "Int"
          }
        }
      ]}
    />
  ))
  .add("Example", () => (
    <Example
      name='contribution'
      args={[
        {
          name: "id",
          description: "contribution id",
          type: {
            name: "Int"
          }
        }
      ]}
      fields={[
        {
          description: "id",
          name: "id",
          type: {
            name: "Int"
          }
        },
        {
          description: "title",
          name: "title",
          type: {
            name: "String"
          }
        },
        {
          description: "update date",
          name: "updatedAt",
          type: {
            name: "String"
          }
        }
      ]}
    />
  ))
