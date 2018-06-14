import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  item: {
    fontFamily: 'Roboto-Medium',
    color: 'rgba(209,209,209,1)',
    textTransform: 'none',
  },
})

const Header = ({ classes: s }) => (
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
        <Tab className={s.item} label="Features" />
        <Tab className={s.item} label="Style Notes" />
      </Tabs>
    </AppBar>
  </div>
)

export default withStyles(styles)(Header)
