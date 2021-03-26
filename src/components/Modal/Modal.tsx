import React from 'react'
import { observer } from 'mobx-react-lite'

import './Modal.scss'

 const Modal:React.FC<any> = observer (({userData}) => {

    const {name, lastName} = userData.data

    return (
        <div className='modal-wrapper'>
            <div className='title-wrapper'>
              <h2>Здравствуйте,</h2>
              <p> {name} {lastName} </p>
            </div>
            <button
            className='modal-button'
            onClick={ () => userData.isClosePop(userData.data.isShowPop) }
            >
                Закрыть
            </button>
        </div>
    )
})

export default Modal
