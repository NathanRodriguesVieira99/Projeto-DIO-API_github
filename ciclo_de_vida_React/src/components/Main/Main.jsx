import React, { useState } from 'react'


import background from '../../assets/background.png'
import './_Main.scss'

import Profile from '../Profile/Profile'


function Main() {
  const [user, setUser] = useState('')
  const [currentuser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)


  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login })
    }

    // console.log(newUser);

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();

    if (newRepos.length) {
      setRepos(newRepos);
    }

  }




  return (
    <>
      <main>
        <div className="conteudo">
          <img src={background} alt="background image" className='background' />
          <div className="info">
            <div>
              <input name='usuario'
                placeholder='@username'
                value={user}
                onChange={event => setUser(event.target.value)} />
              <button onClick={handleGetData}>Buscar</button>
            </div>
            <Profile currentUser={currentuser} repos={repos} />
          </div>
        </div>
      </main>


    </>

  )
}

export default Main