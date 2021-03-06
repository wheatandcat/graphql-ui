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

const CardContent = styled(MuiCardContent)`
  padding: 0rem;
  font-size: 0.8rem;
`

const SubTitle = styled(MuiPaper)`
  padding: 1rem 1.6rem;
  font-weight: 600;
`

const Fields = styled.div`padding: 0.8rem 1.6rem;`

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
              <TableCell style={{ width: "3rem" }}>{item.type.name || "any"}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fields>
  </CardContent>
)
