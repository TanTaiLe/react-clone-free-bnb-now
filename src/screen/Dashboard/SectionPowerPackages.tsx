import { CustomCard } from "@component/DesignSystem/CustomCard"
import { Table } from "antd"
import { FC } from "react"

const columns = [
  {
    title: 'Power (TH/S)',
    dataIndex: 'power',
    key: 'power',
  },
  {
    title: 'Cost (BNB)',
    dataIndex: 'cost',
    key: 'cost',
  },
  {
    title: 'APR',
    dataIndex: 'apr',
    key: 'apr',
  },
  {
    title: ' ',
    dataIndex: 'buyBtn',
    key: 'buyBtn',
  },
]
const data = [
  {
    key: 1,
    power: 500000,
    bonus: 90900,
    cost: 5,
    apr: 130
  }, {
    key: 2,
    power: 100000000,
    bonus: 3636000,
    cost: 100,
    apr: 150
  }, {
    key: 3,
    power: 100000000,
    bonus: 63640000,
    cost: 1000,
    apr: 180
  }, {
    key: 4,
    power: 1000000000,
    bonus: 1000000000,
    cost: 10000,
    apr: 220
  }, {
    key: 5,
    power: 10000000000,
    bonus: 12727000000,
    cost: 100000,
    apr: 250
  },
]

export const SectionPowerPackages: FC = () => {
  return (
    <CustomCard
      title="Power packages"
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      >

      </Table>
    </CustomCard>
  )
}