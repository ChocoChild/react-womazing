import React from 'react'


import "./index.css"
import close from "../../img/Close.svg"
import ModalCallback from '../ModalCallback'

function ModalWindow({ reguestCall, setReguestCall }) {

  const [callback, setCallback] = React.useState(false)

  const getCallBack = () => {
    setReguestCall(false)
    setCallback(true)
  }


  return (
    <div>
    <div className={reguestCall ? "modal active" : "modal"} onClick={() => setReguestCall(false)}>
        <div className='modal__content' onClick={e => e.stopPropagation()}>
            <img onClick={() => setReguestCall(false)} className='modal__content-img' src={close} alt='icon'></img>
            <h2 className='modal__content-title'>Заказать обратный звонок</h2>
            <div className='modal__content-inputs'>
                <input className='modal__content-input' type='text' placeholder='Имя'></input>
                <input className='modal__content-input' type='text' placeholder='E-mail'></input>
                <input className='modal__content-input' type='text' placeholder='Телефон'></input>
            </div>
            <button onClick={getCallBack} className='btn'>Заказать звонок</button>
        </div>
    </div>
    <ModalCallback callback={callback} setCallback={setCallback} />
    </div>
  )
}

export default ModalWindow