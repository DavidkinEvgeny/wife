import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

export default function MainMenu() {
  return (
    <div className='MainMenu'>
      <ul>
        <li><NavLink to='/' exact >О себе</NavLink></li>
        {/* <li><NavLink to='/contact'>Contact</NavLink></li> */}
        <li><NavLink to='/works'>Мои работы</NavLink></li>
      </ul>
    </div>
  )
}
