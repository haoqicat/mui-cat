import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import tileData from '../constants/tileData'
import ImgList from './ImgList'

const Products = ({ value, onIndexChange }) => {
  const lists = tileData.map(data => <ImgList key={data.tagName} data={data} />)

  return (
    <SwipeableViews axis="x" index={value} onChangeIndex={onIndexChange}>
      {lists}
    </SwipeableViews>
  )
}

Products.propTypes = {
  value: PropTypes.number.isRequired,
  onIndexChange: PropTypes.func.isRequired,
}

export default Products
