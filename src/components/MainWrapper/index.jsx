import React from 'react'
import Footer from '../Footer'
import Header from './../Header/index'
import './index.scss'

export default function MainWrapper({children}) {
  return (
    <div className='MainWrapper'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
