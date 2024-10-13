import React from 'react';
import './_Profile.scss';
import List from '../List/List';

function Profile({ currentUser, repos }) {

  return (
    <>
      {currentUser && currentUser.name ? (
        <>
          <div className='perfil'>
            <img src={currentUser.avatar_url}
              alt="profile image "
              className='profile' />
            <div>
              <h3>{currentUser.name}</h3>
              <span>@{currentUser.login}</span>
              <p>{currentUser.bio}</p>
            </div>
          </div>
          <hr />
        </>
      ) : null}
      {repos && repos.length ? (
        <div>
          <h4 className='repositorio' style={{ fontSize: '32px', color: '#fff', margin: '12px 0', textAlign: 'center' }}>Repositórios</h4>
          {repos.map((repo) => (
            <List title={repo.name} description={repo.description} />
          ))}
        </div>
      ) : null}

    </>
  );
}

export default Profile;
