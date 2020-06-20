class Transaction{
    constructor(amoundOfMony, transactionNote, transactionTag){
        this._amoundOfMony = amoundOfMony
        this._transactionNote = transactionNote
        this._transactionTag = transactionTag
    }
    get amoundOfMony(){
        return this._amoundOfMony
    }
    get transactionNote(){
        return this._transactionNote
    }
    get transactionTag(){
        return this._transactionTag
    }
    set amoundOfMony(amoundOfMony){
        this.amoundOfMony = amoundOfMony
    }
    set transactionNote(transactionNote){
        this._transactionNote = transactionNote
    }
    set transactionTag(transactionTag){
        this._transactiontag = transactionTag
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