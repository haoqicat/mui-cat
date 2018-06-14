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
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  list: {
    width: 304,
  },
  wrapper: {
    textAlign: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    margin: '8px auto',
    marginTop: theme.spacing.unit * 4,
  },
})

const list = className => (
  <List className={className}>
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

const userInfo = (wrapper, avatar) => (
  <div className={wrapper}>
    <Avatar className={avatar} src="/img/peter.jpg" />
    <Typography variant="title">Peter</Typography>
    <Typography variant="caption">Linux Dev</Typography>
  </div>
)

const Layout = ({
  children, classes: s, open, onDrawerClose,
}) => (
  <div>
    <Drawer open={open} onClose={onDrawerClose}>
      {userInfo(s.wrapper, s.avatar)}
      {list(s.list)}
    </Drawer>
    {children}
    <Button variant="fab" color="primary">
      <SearchIcon />
    </Button>
  </div>
)

Layout.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(Layout)
