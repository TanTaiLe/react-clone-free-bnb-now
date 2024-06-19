import { CustomCard } from "@component/DesignSystem/CustomCard"
import { CustomTable } from "@component/DesignSystem/CustomTable"
import { TableProps, Typography } from "antd"
import { FC } from "react"


const { Text } = Typography

interface DataType {
  timeBought: string,
  timeExpire: string,
  power: number,
  bonus: number,
  cost: number,
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Bought at',
    dataIndex: 'timeBought',
    key: 'timeBought',
  },
  {
    title: 'Expire at',
    dataIndex: 'timeExpire',
    key: 'timeExpire',
  },
  {
    title: 'Power (TH/S)',
    dataIndex: 'power',
    key: 'power',
  },
  {
    title: 'Bonus (TH/S)',
    dataIndex: 'bonus',
    key: 'bonus',
  },
  {
    title: 'Cost (BNB)',
    dataIndex: 'cost',
    key: 'cost',
    render: (amount) => (<Text>{amount.toLocaleString("en", { minimumFractionDigits: 18 })}</Text>)
  },
]
const data: DataType[] = []

export const SectionBuyPowerHistory: FC = () => {
  return (
    <CustomCard title="Withdraw history">
      <CustomTable
        columns={columns}
      // dataSource={data} 
      />
    </CustomCard>
  )
}