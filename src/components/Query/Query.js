// @flow
import React from "react"
import styled from "styled-components"
import MuiCard, { CardContent as MuiCardContent, CardActions } from "material-ui/Card"
import Collapse from "material-ui/transitions/Collapse"
import MuiButton from "material-ui/Button"
import Typography from "material-ui/Typography"
import Divider from "material-ui/Divider"
import MuiPaper from "material-ui/Paper"
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table"

type Type = {
  name: string,
  description: string
}
type Args = {
  name: string,
  type: Type
}

type Props = {
  open?: boolean,
  name: string,
  description: string,
  args: Array<Args>
}

const Card = styled(MuiCard)`
  background-color: #e9f1fa !important;
  border: 0.1rem solid #56a6fe !important;
  width: 100% !important;
`

const ParamName = styled.span`color: #808080;`
const ParamType = styled.span`color: red;`

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

const SubTitle = styled(MuiPaper)`
  padding: 1rem 1.6rem !important;
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  word-break: break-all !important;
  background-color: #fff;
`

const Description = styled(Typography)`
  padding: 0.8rem 1.6rem !important;
  font-size: 1.2rem !important;
`

const Fields = styled(Typography)`
  padding: 0.8rem 1.6rem !important;
  font-size: 1.2rem !important;
`

export default ({ description, name, open, args }: Props) => (
  <Card>
    <CardActions disableActionSpacing>
      <SchemeButton>
        {name}&nbsp;
        {args.length === 0 ? "" : "("}
        {args.map((item, index) => (
          <span>
            <ParamName>{item.name}</ParamName>:&nbsp;<ParamType>{item.type.name}</ParamType>
            {args.length === index + 1 ? "" : ","}&nbsp;
          </span>
        ))}
        {args.length === 0 ? "" : ")"}
      </SchemeButton>
    </CardActions>
    <Divider />
    <Collapse in={open} transitionDuration='auto' unmountOnExit>
      <CardContent>
        <Description>{description}</Description>
        <SubTitle elevation={1}>Arguments</SubTitle>
        <Fields>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "3rem" }}>name</TableCell>
                <TableCell style={{ width: "3rem" }}>type</TableCell>
                <TableCell>description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: "3rem" }}>id</TableCell>
                <TableCell style={{ width: "3rem" }}>Int</TableCell>
                <TableCell>contribution id</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "3rem" }}>id</TableCell>
                <TableCell style={{ width: "3rem" }}>Int</TableCell>
                <TableCell>contribution id</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Fields>
      </CardContent>
    </Collapse>
  </Card>
)
