import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/Inbox'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

const list = (
  <List>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="women" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="men" />
    </ListItem>
  </List>
)

const userInfo = (
  <div>
    <Avatar src="/img/peter.jpg" />
    <Typography variant="title">Peter</Typography>
    <Typography variant="caption">Linux Dev</Typography>
  </div>
)

const Layout = ({ children }) => (
  <div>
    <Drawer open>
      {userInfo}
      {list}
    </Drawer>
    {children}
    <Button variant="fab" color="primary">
      <SearchIcon />
    </Button>
  </div>
)

export default Layout
