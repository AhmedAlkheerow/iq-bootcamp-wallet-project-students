class Wallet {
    constructor(name, currencyType, balance, description){
        this._name = name
        this._currencyType = currencyType
        this._balance = balance
        this._description = description
        this._listOfTransaction = []  //contain info about all transactions
    }
    get name(){
        return this._name
    }
    get currencyType(){
        return this._currencyType
    }
    get balance(){
        return this._balance
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
    set balance(balance){
        this._balance = balance
    }
    set description(description){
        this._description = description
    }
    set listOfTransaction(transaction){
        this._listOfTransaction.push(transaction) 
    }
}
