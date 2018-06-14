import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

const Header = () => (
  <div>
    <AppBar>
      <ToolBar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          Women
        </Typography>
      </ToolBar>
    </AppBar>
  </div>
)

export default Header
