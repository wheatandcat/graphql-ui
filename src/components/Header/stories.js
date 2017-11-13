// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { center } from "../../../.storybook/decorators"
import Page from "./"

storiesOf("Header", module)
  .addDecorator(center)
  .add("Page", () => <Page>foobar</Page>)
