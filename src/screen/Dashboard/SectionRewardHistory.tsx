import { CustomCard } from "@component/DesignSystem/CustomCard"
import { CustomTable } from "@component/DesignSystem/CustomTable"
import { TableProps, Typography } from "antd"
import { FC } from "react"

const { Text } = Typography

interface DataType {
  source: string,
  amount: number,
  start: string,
  end: string,
  status: string,
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => (<Text>{amount} TH/S</Text>)
  },
  {
    title: 'Start at',
    dataIndex: 'start',
    key: 'start',
  },
  {
    title: 'Ends at',
    dataIndex: 'end',
    key: 'end',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
]
const data: DataType[] = [
  {
    source: 'Reward',
    amount: 25,
    start: '2024-06-10 12:21:44',
    end: '2024-06-10 13:21:44',
    status: 'EXPIRED',
  },
  {
    source: 'Reward',
    amount: 25,
    start: '2024-06-10 12:21:44',
    end: '2024-06-10 13:21:44',
    status: 'EXPIRED',
  },
  {
    source: 'Reward',
    amount: 25,
    start: '2024-06-10 12:21:44',
    end: '2024-06-10 13:21:44',
    status: 'EXPIRED',
  },
]

export const SectionRewardHistory: FC = () => {
  return (
    <CustomCard title="Reward history">
      <CustomTable columns={columns} dataSource={data} />
    </CustomCard>
  )
}