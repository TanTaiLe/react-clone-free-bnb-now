import { FC } from "react"
import { Table, Typography } from "antd"
import { CustomSection } from "@component/DesignSystem/CustomSection"

const { Title } = Typography

const withdrawData = [
  {
    key: '1',
    time: '2024-06-10 19:29:31',
    amount: '0.000055250000000000',
    transactionId: '5088889293',
  }, {
    key: '2',
    time: '2024-06-10 19:29:31',
    amount: '0.000055250000000000',
    transactionId: '5088889293',
  }, {
    key: '3',
    time: '2024-06-10 19:29:31',
    amount: '0.000055250000000000',
    transactionId: '5088889293',
  }, {
    key: '4',
    time: '2024-06-10 19:29:31',
    amount: '0.000055250000000000',
    transactionId: '5088889293',
  }, {
    key: '5',
    time: '2024-06-10 19:29:31',
    amount: '0.000055250000000000',
    transactionId: '5088889293',
  }, {
    key: '6',
    time: '2024-06-10 19:29:31',
    amount: '0.000055250000000000',
    transactionId: '5088889293',
  }, {
    key: '7',
    time: '2024-06-10 19:29:31',
    amount: '0.000055250000000000',
    transactionId: '5088889293',
  }, {
    key: '8',
    time: '2024-06-10 19:29:31',
    amount: '0.000055250000000000',
    transactionId: '5088889293',
  }, {
    key: '9',
    time: '2024-06-10 19:29:31',
    amount: '0.000055250000000000',
    transactionId: '5088889293',
  }, {
    key: '10',
    time: '2024-06-10 19:29:31',
    amount: '0.000055250000000000',
    transactionId: '5088889293',
  },
];

const withdrawColumns = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Transaction ID',
    dataIndex: 'transactionId',
    key: 'transactionId',
  },
];

const depositData = [
  {
    key: '1',
    time: '2024-06-10 19:28:19',
    address: '0x89d58...fcE2e',
    amount: '0.200000000000000000',
    transactionId: '0x140...2999b',
  }, {
    key: '2',
    time: '2024-06-10 19:28:19',
    address: '0x89d58...fcE2e',
    amount: '0.200000000000000000',
    transactionId: '0x140...2999b',
  }, {
    key: '3',
    time: '2024-06-10 19:28:19',
    address: '0x89d58...fcE2e',
    amount: '0.200000000000000000',
    transactionId: '0x140...2999b',
  }, {
    key: '4',
    time: '2024-06-10 19:28:19',
    address: '0x89d58...fcE2e',
    amount: '0.200000000000000000',
    transactionId: '0x140...2999b',
  }, {
    key: '5',
    time: '2024-06-10 19:28:19',
    address: '0x89d58...fcE2e',
    amount: '0.200000000000000000',
    transactionId: '0x140...2999b',
  }, {
    key: '6',
    time: '2024-06-10 19:28:19',
    address: '0x89d58...fcE2e',
    amount: '0.200000000000000000',
    transactionId: '0x140...2999b',
  }, {
    key: '7',
    time: '2024-06-10 19:28:19',
    address: '0x89d58...fcE2e',
    amount: '0.200000000000000000',
    transactionId: '0x140...2999b',
  }, {
    key: '8',
    time: '2024-06-10 19:28:19',
    address: '0x89d58...fcE2e',
    amount: '0.200000000000000000',
    transactionId: '0x140...2999b',
  }, {
    key: '9',
    time: '2024-06-10 19:28:19',
    address: '0x89d58...fcE2e',
    amount: '0.200000000000000000',
    transactionId: '0x140...2999b',
  }, {
    key: '10',
    time: '2024-06-10 19:28:19',
    address: '0x89d58...fcE2e',
    amount: '0.200000000000000000',
    transactionId: '0x140...2999b',
  },
];

const depositColumns = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Transaction ID',
    dataIndex: 'transactionId',
    key: 'transactionId',
  },
];

export const SectionTransactions: FC = () => {
  return (
    <CustomSection className="transactions">
      <Title level={2}>Recent Transactions</Title>
      <div className="transactions-item">
        <Title level={3}>Withdraw History</Title>
        <Table dataSource={withdrawData} columns={withdrawColumns} pagination={false} />
      </div>
      <div className="transactions-item">
        <Title level={3}>Deposit History</Title>
        <Table dataSource={depositData} columns={depositColumns} pagination={false} />
      </div>
    </CustomSection>
  )
}