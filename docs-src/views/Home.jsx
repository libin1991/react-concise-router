import React from 'react'
import Navbar from '../components/navbar'

export default class Home extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <Navbar />
        <p>Home Page</p>
      </div>
    )
  }
}
