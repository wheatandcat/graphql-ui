/* eslint-disable flowtype/require-valid-file-annotation */
import React from "react"

export const provider = story => (
  <div className="mdl-demo mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
    {story()}
  </div>
)

export const center = story => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    }}
  >
    {story()}
  </div>
)
