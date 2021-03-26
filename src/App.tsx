import React from 'react';
import { observer } from 'mobx-react-lite'

import Form from './components/Form/Form'
import Modal from './components/Modal/Modal'

import userData from './store/userData'

import './App.scss'

const App:React.FC = observer (() => {

  const { isShowPop, isNameErr, isLastNameErr } = userData.data

  return (
    <div className='App'>
        { !isShowPop && <Form userData={userData}/> }
        { isShowPop && !isNameErr && !isLastNameErr &&<Modal userData={userData}/> }
    </div>
  )
})

export default App
