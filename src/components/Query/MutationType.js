// @flow
import React from "react"
import styled from "styled-components"
import MuiCard, { CardContent as MuiCardContent, CardActions } from "material-ui/Card"
import Collapse from "material-ui/transitions/Collapse"
import MuiButton from "material-ui/Button"
import Typography from "material-ui/Typography"
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

type Props = {
  open?: boolean,
  name: string,
  queryType: string,
  description: string,
  args: Array<Field>,
  fields: Array<Field>
}

const Card = styled(MuiCard)`
  background-color: #e7f4ee !important;
  border: 0.1rem solid #40c585 !important;
  width: 100% !important;
`

const ParamName = styled.span`color: #808080;`
const ParamType = styled.span`color: red;`

const QueryType = styled.span`
  padding: 0.3rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #40c585;
  color: #fff;
  font-weight: 600;
  word-break: break-all;
  font-size: 1.4rem;
  text-transform: uppercase;
`

const SchemeButton = styled(MuiButton)`
  width: 100%;
  text-align: left !important;
  justify-content: start !important;
  text-transform: none !important;
  font-weight: 600 !important;
  word-break: break-all !important;
  font-size: 1.6rem !important;
`

const CardContent = styled(MuiCardContent)`padding: 0rem !important;`

const Description = styled(Typography)`
  padding: 0.8rem 1.6rem !important;
  font-size: 1.2rem !important;
`

export default ({ description, name, queryType, open, args, fields }: Props) => (
  <Card>
    <CardActions disableActionSpacing className='head'>
      <SchemeButton>
        <QueryType>{queryType}</QueryType>
        &nbsp;&nbsp;{name}&nbsp;
        {args.length === 0 ? "" : "("}
        {args.map((item, index) => (
          <span key={item.name}>
            {index > 0 ? ", " : ""}
            <ParamName>{item.name}</ParamName>:&nbsp;<ParamType>{item.type.name}</ParamType>
          </span>
        ))}
        {args.length === 0 ? "" : ")"}
      </SchemeButton>
    </CardActions>
    <Collapse in={open} transitionDuration='auto' unmountOnExit className='row'>
      <Divider />
      <CardContent>
        <Description>{description}</Description>
      </CardContent>
      <Fields description='Arguments' fields={args} />
      <Fields description='Fields' fields={fields} />
      <Example name={name} args={args} fields={fields} />
    </Collapse>
  </Card>
)
