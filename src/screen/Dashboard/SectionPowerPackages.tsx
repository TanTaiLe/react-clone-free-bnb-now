import { CustomButton } from "@component/DesignSystem/CustomButton";
import { CustomCard } from "@component/DesignSystem/CustomCard"
import { CustomTable } from "@component/DesignSystem/CustomTable";
import { Table, Typography, Tag, Flex, Space } from "antd"
import type { TableProps } from 'antd';
import { FC } from "react"

const { Text } = Typography

interface DataType {
  key: string,
  power: number,
  bonus: number,
  cost: number,
  apr: number,
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Power (TH/S)',
    dataIndex: 'power',
    key: 'power',
    responsive: ['sm'],
    render: (_, { power, bonus }) => (
      <Flex align="center">
        <Space size="small">
          {Intl.NumberFormat().format(power)} <Tag>+{Intl.NumberFormat().format(bonus)}</Tag>
        </Space>
      </Flex>
    )
  },
  {
    title: 'Power (TH/S)',
    dataIndex: 'power',
    key: 'power',
    width: '40%',
    responsive: ['xs'],
    render: (_, { power, bonus }) => (
      <Space size={4} direction="vertical" align="start">
        {Intl.NumberFormat().format(power)} <Tag>+{Intl.NumberFormat().format(bonus)}</Tag>
      </Space>
    )
  },
  {
    title: 'Cost (BNB)',
    dataIndex: 'cost',
    key: 'cost',
    responsive: ['sm'],
  },
  {
    title: 'Cost (BNB)',
    dataIndex: 'cost',
    key: 'cost',
    width: '20%',
    responsive: ['xs'],
  },
  {
    title: 'APR',
    dataIndex: 'apr',
    key: 'apr',
    responsive: ['sm'],
    render: (apr) => (
      <Text strong>{apr}%</Text>
    )
  },
  {
    title: 'APR',
    dataIndex: 'apr',
    key: 'apr',
    width: '25%',
    responsive: ['xs'],
    render: (apr) => (
      <Text strong>{apr}%</Text>
    )
  },
  {
    title: ' ',
    dataIndex: 'action',
    key: 'action',
    render: (_, record) => (
      <Flex justify="flex-end">
        <CustomButton>Buy now</CustomButton>
      </Flex>
    )
  },
]
const data: DataType[] = [
  {
    key: '1',
    power: 500000,
    bonus: 90900,
    cost: 5,
    apr: 130
  }, {
    key: '2',
    power: 10000000,
    bonus: 3636000,
    cost: 100,
    apr: 150
  }, {
    key: '3',
    power: 100000000,
    bonus: 63640000,
    cost: 1000,
    apr: 180
  }, {
    key: '4',
    power: 1000000000,
    bonus: 1000000000,
    cost: 10000,
    apr: 220
  }, {
    key: '5',
    power: 10000000000,
    bonus: 12727000000,
    cost: 100000,
    apr: 250
  },
]

export const SectionPowerPackages: FC = () => {
  return (
    <CustomCard title="Power packages">
      <CustomTable columns={columns} dataSource={data} />
    </CustomCard>
  )
}