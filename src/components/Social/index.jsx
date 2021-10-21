import React from 'react'
import './index.scss'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

export default function Social() {
  return (
    <div className='Social'>
      <ul>
        <li><a href="/" target='_blank'><AiOutlineInstagram /></a></li>
        <li><a href="/" target='_blank'><AiOutlineWhatsApp /></a></li>
      </ul>
      <p><a href="tel:+79270722657">+7 (927) 072-26-57</a></p>
    </div>
  )
}
