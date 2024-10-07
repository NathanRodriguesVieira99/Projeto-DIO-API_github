import React from 'react'

import './_Profile.scss'

function Profile() {
  return (
    <>
      <div className='perfil'>
        <img src="https://upload.wikimedia.org/wikipedia/pt/6/6b/Roots1996.jpg" alt="profile image" className='profile' />
        <div>
          <h3>Nathan Rodrigues</h3>
          <span>@NathanRodriguesVieira99 </span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, mollitia.</p>
        </div>
        <div>
        </div>
      </div>
      <hr />
    </>


  )
}

export default Profile