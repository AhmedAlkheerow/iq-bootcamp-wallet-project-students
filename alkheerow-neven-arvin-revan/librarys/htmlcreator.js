class CreatHtml{
    static createHtmlForWallet(wallet){
        let walletContainer = document.getElementById("wallet-container");
        walletContainer.innerHTML = `
        <div class="container ">
            <form id="wallet-form">
                <h1 style="margin: 50px 0px;">Wallet Balance: <span id="current-money">$${wallet.balance}</span></h1>
                <div class="form-row">
            
                    <div class="col-md-4 mb-4">
                        <label for="makeTransaction">Make a transaction:</label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="make-transaction" placeholder="Select Money" required>
                            <div class="input-group-append">
                            <span class="input-group-text" id="current-symbol">$</span>
                            <span class="input-group-text" id="current-number">${wallet.balance}</span>
                            </div>
                        </div>
                        </div>
            
                        <div class="col-md-4 mb-3" style="margin:30px 0 0 !important;">
                        <div class="input-group-prepend">
                            <button class="form-control btn btn-outline-success " type="button" id="income">Income</button>
                            <button class="form-control btn btn-outline-danger" type="button" id="expense">Expense</button>
                        </div>
                    </div>
        
                </div>
        
                <div class="form-row">
        
                    <div class="col-md-4 mb-3">
                    <label for="transactionNote">Transaction Notes:</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="transaction-note" placeholder="write Note">
                    </div>
                    </div>
        
                    <div class="col-md-4 mb-3">
                    <label for="transactionTag">Transaction tags:</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="transaction-tag" placeholder="Enter tags">
                    </div>
                    </div>
        
                    <div class="col-md-4 mb-3" style="margin:30px 0 0 !important;">
                    <input type="submit" class="form-control mb-2 btn btn-secondary" value="Add Transaction">
                    </div>
        
                </div>
            </form>
            <ul id="transaction-container">

            </ul>
        </div>
        `
    }
    static createNewTransaction(listOfTransaction){
        listOfTransaction.forEach(element=>{
            const ul = document.getElementById('transaction-container')
            ul.insertAdjacentHTML("afterend", `
            <li>
                <div>
                <h1>${element.amoundOfMony}</h1>
                <div>
                <h2>${element.transactionNote}</h2>
                <h3>${element.transactionTag}</h3>
                </div>
                </div>

                <div>
                
                </div>
            </li>
            `)
        })
    }
}