// Ahmed's section starts
const form = document.getElementById("formName")
const transaction = document.getElementById('make-transaction')
const transactionNote = document.getElementById('transaction-note')
const transactionTag = document.getElementById('transaction-tag')
const ul = document.getElementById('ul-list')
const currentMoney = document.getElementById('current-money')
const currentSymbol = document.getElementById('current-symbol')
const currentNumber = document.getElementById('current-number')
const income = document.getElementById('income')
const expense = document.getElementById('expense')
const ghost = document.getElementById('ghost')
const addData = document.getElementById('submit-form');
const arrOfWallet = []
const inputName = document.getElementById('inputName')
const formCheckInput = document.getElementsByClassName('form-check-input')
const balance = document.getElementById('inputBalance')
const description = document.getElementById('inputDescription')
document.addEventListener('DOMOnLoaded',()=>{

})
addData.addEventListener('submit',(e)=>{
    e.preventDefault()
    let w = new Wallet(inputName.value,"2342",parseInt(balance.value),description.value)
    // +
    
    


    arrOfWallet.push(w)
    console.log(arrOfWallet)
    console.log(w.balance)
    ghost.remove();
    CreatHtml.createHtmlForWallet(w);
    console.log(inputName.value)
    console.log(balance.value)
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


