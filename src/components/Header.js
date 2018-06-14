import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const Header = () => (
  <div>
    <AppBar color="inherit" position="static">
      <ToolBar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="headline" color="inherit">
          Women
        </Typography>
      </ToolBar>
      <Tabs fullWidth indicatorColor="primary" textColor="primary" value={0}>
        <Tab label="Features" />
        <Tab label="Style Notes" />
      </Tabs>
    </AppBar>
  </div>
)

export default Header
