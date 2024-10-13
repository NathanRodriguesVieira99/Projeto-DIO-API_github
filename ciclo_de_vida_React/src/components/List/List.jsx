import React from 'react'

import './_List.scss'

function List({ title, description }) {
  return (
    <div className='itemList'>
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </div>
  )
}

export default List