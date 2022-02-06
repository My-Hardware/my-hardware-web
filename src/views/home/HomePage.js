import React from 'react';
import {
  Card, Col, Row, Typography, Statistic,
} from 'antd';
import { Line } from '@ant-design/charts';
import moment from 'moment';
import './home.scss';

const HomePage = () => {
  const { Title } = Typography;

  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  const StatisticCard = (props) => (
    <Card className="card-styles">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Statistic {...props} />
    </Card>
  );

  // eslint-disable-next-line react/prop-types,no-shadow
  const ChartCard = ({ title }) => (
    <Card className="card-styles">
      <Title level={5}>{title}</Title>
      <span className="title-styles">{moment().format('LL')}</span>
      <br />
      <br />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Line {...config} />
    </Card>
  );

  return (
    <Card>
      <Row>
        <Col span={24}>
          <Title level={2}>Dashboard</Title>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col md={6}>
          <StatisticCard title="Total Income" value={20000} />
        </Col>
        <Col md={6}>
          <StatisticCard title="Total Income" value={20000} />
        </Col>
        <Col md={6}>
          <StatisticCard title="Total Sales Items" value={380} />
        </Col>
        <Col md={6}>
          <StatisticCard title="Total Profit" value={3895} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={24}>
          <ChartCard title="Income Per Day" />
        </Col>
      </Row>
    </Card>
  );
};

export default HomePage;
