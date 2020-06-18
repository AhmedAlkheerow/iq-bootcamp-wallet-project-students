class Wallet {
    constructor(name, currencyType, balnce, description){
        this._name = name
        this._currencyType = currencyType
        this._balnce = balnce
        this._description = description
        this._listOfTransaction = []  //contain info about all transactions
    }
    get name(){
        return this._name
    }
    get currencyType(){
        return this._currencyType
    }
    get balnce(){
        return this._balnce
    }
    get description(){
        return this._description
    }
    get listOfTransaction(){
        return this._listOfTransaction
    }
    set name(name){
        this._name = name
    }
    set currencyType(currencyType){
        this._currencyType = currencyType
    }
    set balnce(balnce){
        this._balnce = balnce
    }
    set description(description){
        this._description = description
    }
}