import React, { useState, useEffect } from 'react';
import {
  Layout, Menu, Row, Col, Button, Avatar, Popover,
} from 'antd';
import {
  MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, BellOutlined,
  DashboardOutlined, MoneyCollectOutlined, AppstoreAddOutlined, StockOutlined,
} from '@ant-design/icons';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from '../home/HomePage';
import './main.scss';
import SalesPage from '../sales/SalesPage';
import InventoryPage from '../inventory/InventoryPage';

const { SubMenu } = Menu;
const {
  Header, Content, Sider, Footer,
} = Layout;

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [workshopName, setWorkshopName] = useState('M Y H A R D W A R E');

  useEffect(() => {
    setWorkshopName('M Y H A R D W A R E');
  });

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="mh-layout">
      <Sider collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          {!collapsed && <h1 style={{ color: '#D5DAE3', fontWeight: 'bolder' }}>{workshopName}</h1>}
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" className="mh-menu-item" icon={<DashboardOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <SubMenu key="admin" title="Admin" icon={<AppstoreAddOutlined />}>
            <Menu.Item key="2" className="mh-menu-item" icon={<MoneyCollectOutlined />}>
              <Link to="/sales">Sales</Link>
            </Menu.Item>
            <Menu.Item key="3" className="mh-menu-item" icon={<StockOutlined />}>
              <Link to="/inventory">Inventory</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className="mh-header" theme="default">
          <Row>
            <Col span={2} onClick={onCollapse}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                onClick: onCollapse,
                className: 'trigger',
              })}
            </Col>
            <Col offset={16} span={1}>
              <Popover placement="bottomLeft" trigger="click">
                <Button type="link">
                  <Row>
                    <Avatar icon={<UserOutlined />} />
                  </Row>
                </Button>
              </Popover>
            </Col>
            <Col offset={1} span={1}>
              <Button type="link">
                <Avatar icon={<BellOutlined />} />
              </Button>
            </Col>
          </Row>
        </Header>
        <Content
          className="mh-content site-layout-background"
          style={{ overflow: 'auto' }}
        >
          <Switch>
            <Route path="/sales"><SalesPage /></Route>
            <Route path="/inventory"><InventoryPage /></Route>
            <Route path="/"><HomePage /></Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{`My Hardware ©${new Date().getFullYear()} Created by Epic`}</Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
