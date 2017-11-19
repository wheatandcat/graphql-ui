// @flow
import React from "react"
import styled from "styled-components"
import { CardContent as MuiCardContent } from "material-ui/Card"
import MuiPaper from "material-ui/Paper"
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table"

type Type = {
  name: string,
  description: string
}

type Field = {
  name: string,
  type: Type
}

type Props = {
  description: string,
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

const Fields = styled.div`
  padding: 0.8rem 1.6rem !important;
  font-size: 1.2rem !important;
`

export default ({ description, fields }: Props) => (
  <CardContent>
    <SubTitle elevation={1}>{description}</SubTitle>
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
          {fields.map(item => (
            <TableRow key={item.name}>
              <TableCell style={{ width: "3rem" }}>{item.name}</TableCell>
              <TableCell style={{ width: "3rem" }}>{item.type.name}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fields>
  </CardContent>
)
