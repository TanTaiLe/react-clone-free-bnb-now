import { FC } from "react"
import { Table } from "antd"

interface Props {
  columns?: object[],
  dataSource?: object[],
}

export const CustomTable: FC<Props> = ({ columns, dataSource }) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      className="table"
    />
  )
}