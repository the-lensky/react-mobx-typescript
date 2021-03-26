import { observer } from 'mobx-react-lite'

import Form from './components/Form/Form'
import userData from './store/userData'

import './App.scss'

const App:React.FC = observer (() => {
  return (
    <div className='App'>
       <Form userData={userData}/> 
    </div>
  )
})

export default App
