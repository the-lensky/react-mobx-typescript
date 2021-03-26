import { makeAutoObservable } from 'mobx'
import { renderModal } from '../components/Modal/Modal'

interface UserDataInterface {
    name:string,
    lastName:string,
    isNameErr:boolean,
    isLastNameErr:boolean,
}

 export interface ClassInterface {
    data:UserDataInterface,
    addName(userName:string): void,
    addLastName(userLastName:string): void,
    onSubmit(userName:string, userLastName:string): void,
    }


class UserData implements ClassInterface {
    
    data:UserDataInterface = {
        name:'',
        lastName: '',
        isNameErr:false,
        isLastNameErr:false,
    }

    constructor(){
        makeAutoObservable(this)
    }
  
    addName(userName:string){
        if( userName !== ''){
            this.data = {...this.data, name:userName.toUpperCase(), isNameErr: false}  
        } else {
            this.data = {...this.data, isNameErr: true}
        }
    }

    addLastName(userLastName:string){
        if( userLastName !== ''){
            this.data = {...this.data, lastName:userLastName.toUpperCase(), isLastNameErr: false}  
        } else {
            this.data = {...this.data, isLastNameErr: true}
        }
    }
    
    onSubmit(userName:string, userLastName:string){

        this.addName(userName)
        this.addLastName(userLastName)

        if(!this.data.isNameErr && !this.data.isLastNameErr){
            renderModal(this.data.name,this.data.lastName)
        }
    }
    
}

export default new UserData
 