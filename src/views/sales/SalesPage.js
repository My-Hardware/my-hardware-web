import React from 'react';
import {
  Card, Row, Col, Typography,
} from 'antd';

const SalesPage = () => {
  const { Title } = Typography;

  return (
    <Card>
      <Row>
        <Col span={24}>
          <Title level={2}>Sales</Title>
        </Col>
      </Row>
    </Card>
  );
};

export default SalesPage;
