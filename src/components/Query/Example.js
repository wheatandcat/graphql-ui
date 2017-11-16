// @flow
import React from "react"
import styled from "styled-components"
import { CardContent as MuiCardContent } from "material-ui/Card"
import MuiPaper from "material-ui/Paper"

type Type = {
  name: string,
  description: string
}

type Field = {
  name: string,
  type: Type
}

type Props = {
  name: string,
  args: Array<Field>,
  fields: Array<Field>
}

const CardContent = styled(MuiCardContent)`padding: 0rem !important;`

const SubTitle = styled(MuiPaper)`
  padding: 1rem 1.6rem !important;
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  word-break: break-all !important;
  background-color: #fff;
`

const Full = styled.div`
  color: #fff;
  width: 100%;
  padding: 0.75rem;
`

const Board = styled.div`
  padding: 1.5rem 2.5rem;
  background-color: #000;
  border-radius: 0.5rem;
`

const Table = styled.table`
  text-align: left;
  width: 100%;
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  text-transform: none !important;
  font-weight: 600 !important;
  word-break: break-all !important;
  font-size: 1.2rem !important;
`

const ExampleValue = (typeName: string) => {
  switch (typeName) {
  case "Int":
    return 1
  case "String":
    return "foo"
  default:
    return 1
  }
}

export default ({ name, args, fields }: Props) => (
  <CardContent>
    <SubTitle elevation={1}>Example</SubTitle>
    <Full>
      <Board>
        <Table>
          <tbody>
            <div>{"{"} </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;{name}&nbsp;
              {args.length === 0 ? "" : "("}
              {args.map((item, index) => (
                <span key={item.name}>
                  {index > 0 ? ", " : ""}
                  {item.name}:&nbsp;{ExampleValue(item.type.name)}
                </span>
              ))}
              {args.length === 0 ? "" : ")"}
              &nbsp;&nbsp;<span>{"{"} </span>
            </div>
            {fields.map((item, index) => (
              <div key={item.name}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.name}</div>
            ))}
            <div>&nbsp;&nbsp;&nbsp;&nbsp;{"}"} </div>
            <div>{"}"} </div>
          </tbody>
        </Table>
      </Board>
    </Full>
  </CardContent>
)