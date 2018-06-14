import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import GridListTile from '@material-ui/core/GridListTile'
import GridList from '@material-ui/core/GridList'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const styles = () => ({
  root: {
    position: 'relative',
  },
  gridList: {
    paddingTop: 100, // 配合 appbar 的 position: fixed 设置，参考了 https://material-ui.com/ 自身效果
  },
  textArea: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: '100%',
    background: 'linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,1))',
    color: '#fff',
    padding: 20,
  },
  title: {
    color: 'RGBA(255, 255, 255, 1)',
    fontSize: 16,
  },
  text: {
    color: 'RGBA(255, 255, 255, 0.87)',
    fontSize: 12,
  },
})

const ImgList = ({ data, classes: s }) => (
  <GridList spacing={0} key={data.tagName} cellHeight={180} className={s.gridList} cols={1}>
    {data.items.map(t => (
      <GridListTile key={t.img} className={s.root}>
        <img src={t.img} alt="img" />
        <div className={s.textArea}>
          <Typography className={s.title} variant="title">
            {t.title}
          </Typography>
          <Typography className={s.text} variant="caption">
            {t.text}
          </Typography>
        </div>
      </GridListTile>
    ))}
  </GridList>
)

ImgList.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ImgList)
