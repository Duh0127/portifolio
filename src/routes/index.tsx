import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Layout from '../layout'
import Home from '../pages/home'
import Projects from '../pages/projects'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
