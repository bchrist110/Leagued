import React, { Component } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'


export default class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <Link to='/'>
          Home/Find League
        </Link>
      </div>
    )
  }
}