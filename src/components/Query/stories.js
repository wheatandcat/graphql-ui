// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { center } from "../../../.storybook/decorators"
import Query from "./"

storiesOf("Query", module)
  .addDecorator(withKnobs)
  .addDecorator(center)
  .add("Query", () => (
    <Query
      open={boolean("open", true)}
      name='contribution'
      description='find contribution'
      args={[
        {
          name: "id",
          type: {
            name: "Int",
            description: "contribution id"
          }
        },
        {
          name: "type",
          type: {
            name: "Int",
            description: "contribution type"
          }
        }
      ]}
    />
  ))
