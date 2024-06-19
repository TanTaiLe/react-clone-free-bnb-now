import { CustomCard } from "@component/DesignSystem/CustomCard"
import { CustomTable } from "@component/DesignSystem/CustomTable"
import { TableProps, Typography } from "antd"
import { FC } from "react"


const { Text } = Typography

interface DataType {
  time: string,
  amount: number,
  tracking: string,
  status: string,
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => (<Text>{amount.toLocaleString("en", { minimumFractionDigits: 18 })}</Text>)
  },
  {
    title: 'Tracking',
    dataIndex: 'tracking',
    key: 'tracking',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
]
const data: DataType[] = []

export const SectionWithdrawHistory: FC = () => {
  return (
    <CustomCard title="Withdraw history">
      <CustomTable
        columns={columns}
      // dataSource={data} 
      />
    </CustomCard>
  )
}