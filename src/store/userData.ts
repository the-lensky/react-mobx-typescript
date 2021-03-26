import { makeAutoObservable } from 'mobx'

interface UserDataInterface {
    name:string,
    lastName:string,
    isNameErr:boolean,
    isLastNameErr:boolean,
    isShowPop:boolean
}

 export interface ClassInterface {
    data:UserDataInterface,
    addName(userName:string): void,
    addLastName(userLastName:string): void,
    showPop(isShowPop:boolean): void,
    onSubmit(userName:string, userLastName:string, showPop:boolean): void,
    isClosePop(isShowPop:boolean): void
    }


class UserData implements ClassInterface {
    
    data:UserDataInterface = {
        name:'',
        lastName: '',
        isNameErr:false,
        isLastNameErr:false,
        isShowPop: false,
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

    showPop(isShowPop:boolean){
        this.data = {...this.data, isShowPop: true }
    }

    onSubmit(userName:string, userLastName:string, showPop:boolean){

        this.addName(userName)
        this.addLastName(userLastName)

        if(!this.data.isNameErr && !this.data.isLastNameErr){
            this.showPop(showPop)
        }
    }
   
    isClosePop(isShowPop:boolean){
        this.data = {...this.data, isShowPop: !isShowPop}
    }
}

export default new UserData
 