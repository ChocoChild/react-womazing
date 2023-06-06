import React from 'react'

import "./index.css"

function ModalCallback( {callback, setCallback } ) {
  return (
    <div className={callback ? 'root active' : 'root'} onClick={() => setCallback(false)}>
        <div className='root__callback' onClick={e => e.stopPropagation()}>
            <h2 className='root__callback-title'>Отлично! Мы скоро вам перезвоним.</h2>
            <button className='button-opacity root__callback-button' onClick={() => setCallback(false)}>Закрыть окно</button>
        </div>
    </div>
  )
}

export default ModalCallback