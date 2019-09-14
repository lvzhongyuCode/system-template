import React from 'react'
import { Icon, Dropdown, Menu } from 'antd'
import styled from 'styled-components'

const SystemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #001529;
  padding: 0 20px;
`
const SystemName = styled.p`
  font-size: 25px;
  color: #fff;
  margin-left: 30px;
  margin-bottom: 0;
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`
const HeaderRight = styled.div`
  display: flex;
  padding-right: 30px;
  align-items: center;
  & p {
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin: 0;
  }
`
const operations = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);

export default () => {
  return <SystemHeader>
    <HeaderLeft>
      <Icon type="github" style={{fontSize: 40, color: '#fff'}}/>
      <SystemName>XXX后台管理系统</SystemName>
    </HeaderLeft>
    <HeaderRight>
      <Dropdown overlay={operations}>
        <p>吕钟毓<Icon type="down"  style={{fontSize: 16, marginLeft: 5}}/></p>
      </Dropdown>
    </HeaderRight>
  </SystemHeader>;
}