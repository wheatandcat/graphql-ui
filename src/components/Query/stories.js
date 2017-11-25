// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Query, MutationType, Fields, Example } from "./"

storiesOf("Query", module)
  .addDecorator(withKnobs)
  .add("Query", () => (
    <Query
      open={boolean("open", true)}
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
        },
        {
          name: "name",
          description: "contribution name",
          type: {
            name: "String"
          }
        },
        {
          name: "open",
          description: "contribution open",
          type: {
            name: "Boolean"
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
