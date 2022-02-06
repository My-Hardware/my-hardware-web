import React from 'react';
import {
  Card, Row, Col, Typography, Table,
} from 'antd';

const InventoryPage = () => {
  const { Title } = Typography;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Qty',
      dataIndex: 'Qty',
      key: 'Qty',
    },
  ];

  return (
    <div>
      <Card>
        <Row>
          <Col span={24}>
            <Title level={2}>Inventory</Title>
          </Col>
        </Row>
      </Card>
      <Card>
        <Table
          columns={columns}
          scroll={{ y: 500 }}
        />
      </Card>
    </div>
  );
};

export default InventoryPage;
