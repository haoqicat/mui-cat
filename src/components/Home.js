import React from 'react'
import Header from './Header'
import Layout from './Layout'
import Products from './Products'

class Home extends React.Component {
  state = {
    value: 0,
    isDrawerOpen: false,
  }
  changeValue = value => {
    this.setState({
      value,
    })
  }

  openDrawer = () => {
    this.setState({
      isDrawerOpen: true,
    })
  }
  closeDrawer = () => {
    this.setState({
      isDrawerOpen: false,
    })
  }

  render () {
    const { value, isDrawerOpen } = this.state
    return (
      <div>
        <Layout open={isDrawerOpen} onDrawerClose={this.closeDrawer}>
          <Header value={value} onChange={this.changeValue} onButtonClick={this.openDrawer} />
          <Products value={value} onIndexChange={this.changeValue} />
        </Layout>
      </div>
    )
  }
}

export default Home
