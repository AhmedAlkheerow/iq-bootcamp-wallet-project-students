class Transaction{
    constructor(amoundOfMony, transactionNote, transactionTage){
        this._amoundOfMony = amoundOfMony
        this._transactionNote = transactionNote
        this._transactionTage = transactionTage
    }
    get amoundOfMony(){
        return this._amoundOfMony
    }
    get transactionNote(){
        return this._transactionNote
    }
    get transactionTage(){
        return this._transactiontage
    }
    set amoundOfMony(amoundOfMony){
        this.amoundOfMony = amoundOfMony
    }
    set transactionNote(transactionNote){
        this._transactionNote = transactionNote
    }
    set transactionTage(transactionTage){
        this._transactiontage = transactionTage
    }
    
}
class Expense{
    constructor(id){
        this._id = id;
    }
    get id(){
        return this._id
    }
    set id(id){
        this._id = id
    }
}
class Income{
    constructor(id){
        this._id = id;
    }
    get id(){
        return this._id
    }
    set id(id){
        this._id = id
    }
}