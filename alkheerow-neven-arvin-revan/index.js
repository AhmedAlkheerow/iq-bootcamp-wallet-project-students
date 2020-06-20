// querying elemnts
const form = document.getElementById("formName")
const transaction = document.getElementById('make-transaction')
const ul = document.getElementById('ul-list')
const currentMoney = document.getElementById('current-money')
const currentSymbol = document.getElementById('current-symbol')
const currentNumber = document.getElementById('current-number')
const ghost = document.getElementById('ghost')
const addData = document.getElementById('submit-form');
const inputName = document.getElementById('inputName')
const formCheckInput = document.getElementsByClassName('form-check-input')
const balance = document.getElementById('inputBalance')
const description = document.getElementById('inputDescription')
const select = document.getElementById('wallets')
const navSelectcontainer = document.getElementById('button-select-container') 

// glovbal variables 
let income 
let expense 
let currentWallet;
let typeOfTransaction;
let arrOfWallet = []
let walletForm 
let amountOfMoney
let transactionNote
let transactionTag
document.addEventListener('DOMOnLoaded',()=>{

})
addData.addEventListener('submit',(e)=>{
    e.preventDefault()
    const w = new Wallet(inputName.value,"2342",parseInt(balance.value),description.value)
    const option = document.createElement('option')
    currentWallet = w
    arrOfWallet.push(w)
    option.value = arrOfWallet.indexOf(w)
    option.innerText = w.name
    select.appendChild(option)
    navSelectcontainer.style.display = 'inline'
    console.log(arrOfWallet)
    console.log(w.balance)
    ghost.remove();
    CreatHtml.createHtmlForWallet(currentWallet);
    console.log(inputName.value)
    console.log(balance.value)
    console.log(select.innerHTML)
    income = document.getElementById('income')
    expense = document.getElementById('expense')
    walletForm = document.getElementById('wallet-form')
    amountOfMoney = document.getElementById('make-transaction')
    transactionNote = document.getElementById('transaction-note')
    transactionTag = document.getElementById('transaction-tag')
    expense.addEventListener('click',()=>{
        typeOfTransaction = new Expense()
        console.log(typeOfTransaction instanceof Expense)
    })
    income.addEventListener('click',()=>{
        typeOfTransaction = new Income()
        console.log(typeOfTransaction instanceof Income)
    })
    walletForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        let t = new Transaction(amountOfMoney.value, transactionNote.value, transactionTag.value)
        currentWallet.listOfTransaction = t
        if(typeOfTransaction instanceof Expense){
            currentWallet.balance = currentWallet.balance - parseInt(t.amoundOfMony)
            console.log(currentWallet.balance)
            document.getElementById('current-money').innerText = currentWallet.balance
            document.getElementById('current-number').innerText = currentWallet.balance
        }else{
            currentWallet.balance = currentWallet.balance + parseInt(t.amoundOfMony)
            console.log(currentWallet.balance)
            document.getElementById('current-money').innerText = currentWallet.balance
            document.getElementById('current-number').innerText = currentWallet.balance
        }
        CreatHtml.createNewTransaction(currentWallet.listOfTransaction)
        console.log(currentWallet.listOfTransaction)
        console.log(t)
    })
})

select.addEventListener('change',()=>{
    currentWallet = arrOfWallet[parseInt(select.value)]
    CreatHtml.createHtmlForWallet(currentWallet);
     income = document.getElementById('income')
    expense = document.getElementById('expense')
    walletForm = document.getElementById('wallet-form')
    amountOfMoney = document.getElementById('make-transaction')
    transactionNote = document.getElementById('transaction-note')
    transactionTag = document.getElementById('transaction-tag')
    expense.addEventListener('click',()=>{
        typeOfTransaction = new Expense()
        console.log(typeOfTransaction instanceof Expense)
    })
    income.addEventListener('click',()=>{
        typeOfTransaction = new Income()
        console.log(typeOfTransaction instanceof Income)
    })
    walletForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        let t = new Transaction(amountOfMoney.value, transactionNote.value, transactionTag.value)
        currentWallet.listOfTransaction = t
        if(typeOfTransaction instanceof Expense){
            currentWallet.balance = currentWallet.balance - parseInt(t.amoundOfMony)
            console.log(currentWallet.balance)
            document.getElementById('current-money').innerText = currentWallet.balance
            document.getElementById('current-number').innerText = currentWallet.balance
        }else{
            currentWallet.balance = currentWallet.balance + parseInt(t.amoundOfMony)
            console.log(currentWallet.balance)
            document.getElementById('current-money').innerText = currentWallet.balance
            document.getElementById('current-number').innerText = currentWallet.balance
        }
        CreatHtml.createNewTransaction(currentWallet.listOfTransaction)
        console.log(currentWallet.listOfTransaction)
        console.log(t)
    })
    CreatHtml.createNewTransaction(currentWallet.listOfTransaction)
})
// class Wallet {
//     constructor(name, currency,balance, description, transactions) {
//         this.name = name;
//         this.currency= currency;
//         this.balance = balance;
//         this.description = description;
//         this.transactions = transactions
//     }

// }

// class Transaction {
//     constructor ( id,date, tags, note){
//         this.id=id;
//         this.date = date;
//         this.tags = tags;
//         this.note = note;

//     }
// }
// class Expense extends Transaction{

// }
// class Income extends Transaction{

// }

// class Currency {
//     constructor(id, name, symbol){
//         this.id = id;
//         this.name = name;
//         this.symbol = symbol;
//     }
// }
    


// ends of ahmed's section





// arvin start section




// arvin end section







// revan starts section


// revan end section 









// neven start section




// neven end section


