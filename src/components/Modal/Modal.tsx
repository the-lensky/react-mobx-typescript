import ReactDOM from 'react-dom'
import { observer } from 'mobx-react-lite'

import './Modal.scss'

let node:any = null

const Modal:React.FC<any> = observer( ( {name, lastName }:any ) => {
    const onClose = () => {
        document.body.removeChild(node)
        node = null
    }
    return (
        <div 
            className='modal-wrapper'
            onClick={onClose}>
            <div
                className='modal-body'
                onClick={(e)=>e.stopPropagation()}
            >
                <h2>Здравствуйте,</h2>
                <p> {name} {lastName} </p>
                <button
                    className='modal-button'
                    onClick={onClose}
                    >
                    Закрыть
                </button>
            </div>
        </div>
    )
})

export const renderModal:React.FC<any> = (name, lastName,):any => {
    if (!node) {
        node = document.createElement('div')
        node.id = 'Modal'
        document.body.appendChild(node)
    }
    return ReactDOM.render(<Modal name={name} lastName={lastName} />, node)
}