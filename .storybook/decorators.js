/* eslint-disable flowtype/require-valid-file-annotation */
import React, { Component } from "react"
import $ from "jquery"

export class JqueryWrapper extends Component<Props> {
  componentDidMount() {
    $(() => {
      $(document).ready(function() {
        $(".head").click(function() {
          $(this)
            .next(".row")
            .stop(true, true)
            .slideToggle()
        })
      })
    })
  }
  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}

export const provider = story => <JqueryWrapper>{story()}</JqueryWrapper>

export const center = story => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {story()}
  </div>
)
