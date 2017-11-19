// @flow
import React from "react"
import styled from "styled-components"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import type { Props as QueryProps } from "../Query/Query"
import type { Props as MutationProps } from "../Query/MutationType"
import { Query, MutationType } from "../Query"
import Footer from "../Footer"

type Props = {
  queries: Array<QueryProps>,
  mutations: Array<MutationProps>
}

const Frame = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border: 0.1rem solid #e0e0e0;
`

const Space = styled.div`padding-bottom: 1rem;`

export default ({ queries, mutations }: Props) => (
  <div>
    <AppBar position='static' color='accent'>
      <Toolbar>
        <Typography type='title' color='inherit'>
          GraphQL-UI
        </Typography>
      </Toolbar>
    </AppBar>
    <Frame>
      <div>
        {queries.map(({ name, description, args, type, ofType }) => (
          <Space>
            <Query
              key={name}
              name={name}
              description={description}
              args={args || []}
              fields={type.fields || type.ofType.fields || []}
            />
          </Space>
        ))}
      </div>
      <div>
        {mutations.map(({ name, description, args, type }) => (
          <Space>
            <MutationType
              key={name}
              name={name}
              description={description}
              args={args || []}
              fields={type.fields || type.ofType.fields || []}
            />
          </Space>
        ))}
      </div>
    </Frame>
    <Footer />
  </div>
)
