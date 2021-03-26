import React,{ useState } from 'react'
import { observer } from 'mobx-react-lite'

import './Form.scss'

 const Form:React.FC<any> = observer(({userData}) => {
   
    const {isNameErr, isLastNameErr, isShowPop } = userData.data

    const [userName, setUserName] = useState<string>('')
    const [userLastName, setUserLastName] = useState<string>('')

    const errMesage = 'Поле не может быть пустым'

    return (
        <div className='form-wrapper' >
            <div className='input-wrapper' >
                <label>Имя</label>
                { isNameErr && <div className='input-error'> {errMesage} </div> }
                <input
                   className={`input-field ${isNameErr ? 'input-field-failure' : ''}`}
                   name='name'
                   value={userName}
                   onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserName(e.target.value)}
                   type='text'
                 />
            </div>
            <div className='input-wrapper' >
                <label>Фамилия</label>
                { isLastNameErr && <div className='input-error'> {errMesage} </div> }
                <input
                    className={`input-field ${isLastNameErr ? 'input-field-failure' : ''}`}
                    name='lastName' 
                    value={userLastName}
                    onChange={ (e:React.ChangeEvent<HTMLInputElement>) => setUserLastName(e.target.value)}
                    type='text'
                 />
            </div>
            <button
                type='submit'
                className='form-button'
                onClick={ () => userData.onSubmit( userName, userLastName, isShowPop )}
            >
                Готово
             </button>   
      </div>     
    )
})

export default Form