import { CustomCard } from "@component/DesignSystem/CustomCard"
import { CustomTable } from "@component/DesignSystem/CustomTable"
import { TableProps, Typography } from "antd"

const { Text } = Typography

interface DataType {
  time: string,
  address: string,
  earned: number,
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'User address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Earned (BNB)',
    dataIndex: 'earned',
    key: 'earned',
    render: (earned) => (<Text>{earned.toLocaleString("en", { minimumFractionDigits: 18 })}</Text>)
  },
]
const data: DataType[] = []

export const SectionReferredUsers = () => {
  return (
    <CustomCard title="Your referred users">
      <CustomTable
        columns={columns}
      />
    </CustomCard>
  )
}