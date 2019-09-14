import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import SystemMenu from './Menu'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import Business from '../home'
import Game from '../home/game'
import Order from '../order'
import ErrorComp from '../error'
import System from '../system'


const AppContainer = styled(Layout)`
  background: #f7f7f7;
`

const AppContentContainer = styled.div`

  width: calc(100vw - 256px);
  height: calc(100vh - 60px);
  background: #f6f6f6;
`

export default class DashBoard extends React.Component<any, any>{
  render() {
    return <AppContainer>
      <Header />
      <Layout style={{display: 'flex', flexDirection: 'row'}}>
        <SystemMenu />
        <AppContentContainer>
          <Switch>
            <Route path={'/home/business'} component={Business} />
            <Route path={'/home/game'} component={Game} />
            <Route path={'/order'} component={Order}/>
            <Route path={'/error'} component={ErrorComp}/>
            <Route path={'/system'} component={System}/>
            <Redirect to={'/home/business'}/>
          </Switch>
        </AppContentContainer>
      </Layout>
    </AppContainer>
  }
}