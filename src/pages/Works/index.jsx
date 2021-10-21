import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './insex.scss'


export default function Works() {
  const [classWorkMenu, setClassWorkMenu] = useState(['WorkMenu', 'WorkMenu__active'])
  function activateWorkMenu() {
    (classWorkMenu.includes('WorkMenu__deactive')) 
      ? setClassWorkMenu(['WorkMenu', 'WorkMenu__active']) 
      : setClassWorkMenu(['WorkMenu', 'WorkMenu__deactive'])
  }
  return (
    <MainWrapper>
      <div className='Works'>
        <div className={classWorkMenu.join(' ')}>
          <p onClick={() => activateWorkMenu()}><HiArrowNarrowRight /></p>
          <ul>
            <li><Link to='/works'>Все работы</Link></li>
            <li><Link to='/works'>Осень</Link></li>
            <li><Link to='/works'>Лето</Link></li>
            <li><Link to='/works'>Зима</Link></li>
            <li><Link to='/works'>Весна</Link></li>
          </ul>
        </div>
        <div className="WorkContent">

        </div>
      </div>
    </MainWrapper>
  )
}
