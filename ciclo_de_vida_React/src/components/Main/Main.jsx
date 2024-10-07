import React from 'react'

import background from '../../assets/background.png'
import './_Main.scss'

import Profile from '../Profile/Profile'
import List from '../List/List'

function Main() {
  return (
    <>
      <main>
        <div className="conteudo">
          <img src={background} alt="background image" className='background' />
          <div className="info">
            <div>
              <input name='usuario' placeholder='@username' />
              <button>Buscar</button>
            </div>
            <Profile />
          </div>
        </div>
        <div>
          <h4>Repositórios</h4>
          <List />
        </div>
      </main>


    </>

  )
}

export default Main