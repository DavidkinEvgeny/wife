import React from 'react'
import MainWrapper from '../../components/MainWrapper'
import WorkMenu from '../../components/WorkMenu'
import './index.scss'
import {sergey} from './../../state/index'
import {valera} from './../../state/index'

export default function Works() {
  return (
    <MainWrapper>
      <div className='Works'>
        <WorkMenu /> 
        <div className="WorkContent">
          {sergey.map(i => {
            return (
              <React.Fragment key={i.id}>
                {i.position === 'vertical'
                  ? <div className="WorkContent__container vertical" key={i.id}><img src={i.src} alt={i.alt} /></div>
                  : <div className="WorkContent__container horizontal" key={i.id}><img src={i.src} alt={i.alt} /></div>}
              </React.Fragment>
            )
          })}
          {valera.map(i => {
            return (
              <React.Fragment key={i.id}>
              {i.position === 'vertical'
                ? <div className="WorkContent__container vertical" key={i.id}><img src={i.src} alt={i.alt} /></div>
                : <div className="WorkContent__container horizontal" key={i.id}><img src={i.src} alt={i.alt} /></div>}
            </React.Fragment>
            )
          })}
        </div>
      </div>
    </MainWrapper>
  )
}
