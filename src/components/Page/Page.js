// @flow
import React from "react"
import styled from "styled-components"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import Divider from "material-ui/Divider"
import type { Props as QueryProps } from "../Query/Query"
import type { Props as MutationProps } from "../Query/MutationType"
import { Query, MutationType } from "../Query"
import Footer from "../Footer"

type Props = {
  endpoint: string,
  queries: Array<QueryProps>,
  mutations: Array<MutationProps>
}

const Frame = styled.div`
  padding: 2rem 1rem;
  background-color: #f9f9f9;
`

const Space = styled.div`padding-bottom: 1rem;`

const Endpoint = styled.div`
  width: 50%;
  padding 2.5rem 1rem;
  font-weight: 600;

  > span {
    padding-left: 0.5rem;
    color: red;
    font-weight: 1;
  }

`

export default ({ endpoint, queries, mutations }: Props) => (
  <div>
    <AppBar position='static' color='accent'>
      <Toolbar>
        <Typography type='title' color='inherit'>
          GraphQL-UI
        </Typography>
      </Toolbar>
    </AppBar>
    <Endpoint>
      GraphQL Endpoint<span>{endpoint}</span>
      <Divider />
    </Endpoint>
    <Divider />
    <Frame>
      <div>
        {queries.map(({ name, description, args, type, ofType }) => (
          <Space key={name}>
            <Query
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
          <Space key={name}>
            <MutationType
              name={name}
              description={description}
              args={args || []}
              fields={type.fields || type.ofType.fields || []}
            />
          </Space>
        ))}
      </div>
    </Frame>
    <Divider />
    <Footer />
  </div>
)
