import { CustomCard } from "@component/DesignSystem/CustomCard"
import { CustomTable } from "@component/DesignSystem/CustomTable"
import { Flex, TableProps, Tag, Typography } from "antd"

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
    <CustomCard title={
      <Flex align="cent">
        Your referred users
        <Tag color="#E2F5FF" style={{ color: '#2578A6', marginLeft: 8 }}>0</Tag>
      </Flex>

    }>
      <CustomTable
        columns={columns}
      />
    </CustomCard>
  )
}