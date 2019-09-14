import React from 'react'
import { menus, MenuItems } from '../../config/navconfig'
import styled from 'styled-components'
import { Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

const CurrentMenu = styled(Menu)`
  width: 256px;
  height: calc(100vh - 60px)
`
const { SubMenu } = Menu


 class SystemMenu extends React.Component<any, any>{
  get getPreNav() {
    const navArr = this.props.history.location.pathname.split('/')
    navArr.pop()
    return navArr.join('/')
  }
  private renderMenuItem(menu: MenuItems){
    if (menu.children.length > 0) {
      return <SubMenu
        key={menu.link}
        title={
          <span>
            <Icon type={menu.icon} />
            {menu.name}
          </span>
        }
      >
        {menu.children.map((item: MenuItems) => {
          return this.renderMenuItem(item)
        })}
      </SubMenu> 
    } else {
      return <Menu.Item key={menu.link} onClick={() => {this.props.history.push(menu.link)}}>
      <Icon type={menu.icon} />
      {menu.name}
    </Menu.Item>
    }
  }
  render() {
    return <CurrentMenu
      defaultSelectedKeys={[this.props.history.location.pathname]}
      defaultOpenKeys={[this.getPreNav]}
      mode={'inline'}
      theme={'dark'}
      >
      {menus.map((menu: MenuItems) => {
        return this.renderMenuItem(menu)
      })}
  </CurrentMenu>
  }
}
export default withRouter(SystemMenu)