import { Outlet } from 'react-router-dom'

import NavBar from '../components/NavBar'
import { Content, LayoutContainer } from './styles'

const Layout = () => {
  return (
    <LayoutContainer>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  )
}

export default Layout
