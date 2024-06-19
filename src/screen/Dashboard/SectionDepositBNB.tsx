import { CustomButton } from "@component/DesignSystem/CustomButton"
import { CustomCard } from "@component/DesignSystem/CustomCard"
import { Col, Form, Row, Select, Space, Typography, Image } from "antd"
import { FC, useState } from "react"

const { Text } = Typography
const { Option } = Select

interface DataType {
  qr: string,
  detail: string
}

const data: DataType = {
  qr: '/images/dashboard/qr.png',
  detail: '0xb68CB05DFe18D378026f5a862B984c6bD9364283',
}

export const SectionDepositBNB: FC = () => {
  const [depositAddress, setDepositAddress] = useState<DataType | null>(null)

  const createDepositAddress = () => {
    setDepositAddress(data);
  }

  const DepositAddressBlock = (data: DataType) => {
    return (
      <Space direction="vertical" size="large">
        <Image width={200} src={data.qr} />
        <div>
          <Text strong>Address</Text>
          <Space size="middle">
            <Text italic>{data.detail}</Text>
            <CustomButton iconOnly>
              <Image width={20} preview={false} src="/images/dashboard/copy.png" />
            </CustomButton>
          </Space>
        </div>
      </Space>
    )
  }

  return (
    <CustomCard title="Deposit BNB">
      <Form name="depositBNB" layout="inline" style={{ background: 'none', padding: 0 }}>
        <Space direction="vertical" size="large">
          <Row align="middle" style={{ width: '100%' }}>
            <Col span={6}>
              <Text strong>1. Network</Text>
            </Col>
            <Col span={18}>
              <Select defaultValue="1" style={{ width: '100%', height: 45 }}>
                <Option value="1">BNB Smart Chain</Option>
              </Select>
            </Col>
          </Row>
          <Row align="middle" style={{ width: '100%' }}>
            <Col span={6}>
              <Text strong>2. Deposit address</Text>
            </Col>
            <Col span={18}>
              {
                depositAddress
                  ?
                  DepositAddressBlock(depositAddress)
                  :
                  <CustomButton stretch onClick={createDepositAddress}>
                    Create your deposit address
                  </CustomButton>
              }
            </Col>
          </Row>
        </Space>
      </Form>
    </CustomCard>
  )
}