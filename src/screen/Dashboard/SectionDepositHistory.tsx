import { CustomCard } from "@component/DesignSystem/CustomCard"
import { CustomTable } from "@component/DesignSystem/CustomTable"
import { TableProps, Typography } from "antd"
import { FC } from "react"


const { Text } = Typography

interface DataType {
  time: string,
  transaction: string,
  amount: number,
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Transaction',
    dataIndex: 'transaction',
    key: 'transaction',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => (<Text>{amount.toLocaleString("en", { minimumFractionDigits: 18 })}</Text>)
  },
]
const data: DataType[] = [
  {
    time: '2024-06-19 08:29:56',
    transaction: '0xc3d...884a2',
    amount: 0.173000000000000000,
  },
]

export const SectionDepositHistory: FC = () => {
  return (
    <CustomCard title="Deposit history">
      <CustomTable columns={columns} dataSource={data} />
    </CustomCard>
  )
}