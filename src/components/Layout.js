import React from 'react'
import Drawer from '@material-ui/core/Drawer'

const Layout = ({ children }) => (
  <div>
    <Drawer open>Hello</Drawer>
    {children}
  </div>
)

export default Layout
