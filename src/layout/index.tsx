import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import NavBar from '../components/NavBar'
import { Content, LayoutContainer } from './styles'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const elementId = location.hash.slice(1)

    window.requestAnimationFrame(() => {
      document.getElementById(elementId)?.scrollIntoView()
    })
  }, [location.hash])

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
