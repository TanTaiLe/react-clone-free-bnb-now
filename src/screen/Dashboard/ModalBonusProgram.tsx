import { CustomTable } from "@component/DesignSystem/CustomTable"
import { Modal, TableProps, Typography } from "antd"
import { FC, useEffect, useState } from "react"

const { Text } = Typography

interface Props {
  isModalOpen?: boolean,
  handleOk?: React.MouseEventHandler<HTMLButtonElement>,
}

interface DataType {
  key: string,
  source: number,
  bonus: number,
  apr: number,
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
    render: (source) => (<Text>{Intl.NumberFormat().format(source)} TH/S</Text>)
  }, {
    title: 'Bonus',
    dataIndex: 'bonus',
    key: 'bonus',
    render: (bonus) => (<Text>{bonus}%</Text>)
  }, {
    title: 'APR',
    dataIndex: 'apr',
    key: 'apr',
    render: (apr) => (<Text>{apr}%</Text>)
  },
]

const data: DataType[] = [
  {
    key: '1',
    source: 10000000000,
    bonus: 125,
    apr: 250
  }, {
    key: '2',
    source: 1000000000,
    bonus: 100,
    apr: 220
  }, {
    key: '3',
    source: 100000000,
    bonus: 64,
    apr: 180
  }, {
    key: '4',
    source: 10000000,
    bonus: 36,
    apr: 150
  },
]

export const ModalBonusProgram: FC<Props> = ({ isModalOpen, handleOk }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    isModalOpen && setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [isModalOpen])


  return (
    <Modal title="Bonus programs"
      open={isModalOpen}
      onCancel={handleOk}
      loading={loading}
      onOk={handleOk}
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      <CustomTable
        columns={columns}
        dataSource={data}
      />
    </Modal>
  )
}