import React from 'react';
import {
  Card, Col, Row, Typography,
} from 'antd';

const HomePage = () => {
  const { Title } = Typography;

  return (
    <Card>
      <Row>
        <Col span={24}>
          <Title level={2}>Dashboard</Title>
        </Col>
      </Row>
    </Card>
  );
};

export default HomePage;
