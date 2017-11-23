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
  fields: Array<Field>,
  mutation?: boolean
}

const CardContent = styled(MuiCardContent)`padding: 0rem !important;`

const SubTitle = styled(MuiPaper)`
  padding: 1rem 1.6rem !important;
  font-size: 0.8rem !important;
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
  cursor: pointer;
  padding: 1.5rem 2.5rem;
  background-color: #000;
  border-radius: 0.5rem;
  font-size: 0.8rem !important;
`

const ExampleValue = (typeName: string) => {
  switch (typeName) {
  case "Int":
    return <span>1 </span>
  case "Boolean":
    return <span>true </span>
  case "String":
    return (
      <span>
        {"\""}foo{"\""}
      </span>
    )
  default:
    return <span>1 </span>
  }
}

export default ({ name, args, fields, mutation }: Props) => (
  <CardContent>
    <SubTitle elevation={1}>Example</SubTitle>
    <Full>
      <div title='copy' className='copyButton' data-clipboard-target={`#copy_${name}`}>
        <Board id={`copy_${name}`}>
          <div>{mutation ? "mutation _ {" : "{"} </div>
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
        </Board>
      </div>
    </Full>
  </CardContent>
)
