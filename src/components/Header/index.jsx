import React from 'react'
import MainMenu from '../MainMenu'
import Social from '../Social'
import './index.scss'

export default function Header() {
  return (
    <div className='Header'>
      <div className='Header__social'>
        <Social />
      </div>
      <MainMenu />
    </div>
  )
}
