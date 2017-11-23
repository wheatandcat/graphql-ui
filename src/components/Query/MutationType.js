// @flow
import React from "react"
import styled from "styled-components"
import MuiCard, {
  CardContent as MuiCardContent,
  CardActions as MuiCardActions
} from "material-ui/Card"
import MuiCollapse from "material-ui/transitions/Collapse"
import MuiButton from "material-ui/Button"
import Divider from "material-ui/Divider"
import { Fields, Example } from "./"

type Type = {
  name: string
}

type Field = {
  name: string,
  description: string,
  type: Type
}

export type Props = {
  name: string,
  description: string,
  args: Array<Field>,
  fields: Array<Field>
}

const Card = styled(MuiCard)`
  background-color: #e7f4ee !important;
  border-radius: 0.5rem !important;
  border: 0.1rem solid #40c585 !important;
  width: 100% !important;
`

const ParamName = styled.span`color: #808080;`
const ParamType = styled.span`color: red;`

const QueryType = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  background-color: #40c585;
  color: #fff;
  font-weight: 600;
  word-break: break-all;
  font-size: 0.8rem;
  text-transform: uppercase;
`

const SchemeButton = styled(MuiButton)`
  width: 100%;
  text-align: left !important;
  justify-content: start !important;
  text-transform: none !important;
  font-weight: 600 !important;
  word-break: break-all !important;
  font-size: 1rem !important;
`

const CardContent = styled(MuiCardContent)`padding: 0rem !important;`

const Description = styled.span`
  color: #343947;
  font-weight: 1 !important;
  padding: 0rem 1.5rem !important;
  font-size: 1rem !important;
`

const CardActions = styled(MuiCardActions)`
  padding: 0rem !important;
  height: 3rem !important;
`

const Collapse = styled(MuiCollapse)`display: none;`

export default ({ description, name, args, fields }: Props) => (
  <Card>
    <CardActions disableActionSpacing className='head'>
      <SchemeButton>
        <QueryType>MutationType</QueryType>
        &nbsp;&nbsp;{name}&nbsp;
        {args.length === 0 ? "" : "("}
        {args.map((item, index) => (
          <span key={item.name}>
            {index > 0 ? ", " : ""}
            <ParamName>{item.name}</ParamName>:&nbsp;<ParamType>{item.type.name || "any"}</ParamType>
          </span>
        ))}
        {args.length === 0 ? "" : ")"}
        <Description>{description}</Description>
      </SchemeButton>
    </CardActions>
    <Collapse in transitionDuration='auto' unmountOnExit className='row'>
      <Divider />
      <CardContent />
      <Fields description='Arguments' fields={args} />
      <Fields description='Fields' fields={fields} />
      <Example name={name} args={args} fields={fields} mutation />
    </Collapse>
  </Card>
)
