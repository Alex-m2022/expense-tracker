// project: Expense Tracker
// 12/4/2022
// app features: app takes in 3 inputs. expense name, expense date and total amount. expense will then be displayed at a table below


/*idea: onclick submit button, append all three of user inputs to a in a object ie 
object () {
    name: asdfasgd
    date: 11/11/11
    amount: 1
}

then append object properties to new table row ie
create td>tr(append, object.name)
tr(object.date)
tr(object.amount)

if the user types in a incorrect date ie 1501/111, or january first display a error */

let expenseTab = []

let addinput = (ev) => {
    ev.preventDefault(); // stop the form from submitting
    let expenses = {
        NameExpense: document.getElementById('myname').value,
        date: document.getElementById('Date').value,
        amount: document.getElementById('Amount').value
    }
    expenseTab.push(expenses)
    Array.from(expenseTab)
    document.forms[0].reset() // clears the form for the next entries

    // now i need to create a tr with 4 tds. I will append my name, date, and amount value to the first 3 tds, as well as a delete 
    // button in the last td. the delete button will delete the entire row on click
    table = document.getElementById('mytable')
    trow = document.createElement('tr')
    table.appendChild(trow)
    for (i = 0; i < 4; i++) {
        td = document.createElement('td') 
        td.textContent = ''
        for (let z = 0; z < expenseTab.length; z++) {
            td.textContent += expenseTab[z]
            console.log(expenseTab[z])
        }
        trow.appendChild(td)

        /*for (let z = 0; z < expenseTab.length; z++) {
            td.textContent += expenseTab[z]
        } 
        /*tchild = trow.children 
        n = 1
        for (i = 0; i < tchild; i++) {
            td[i].id = 'value'+n
            n++
        } */
    }
    

}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('submit').addEventListener('click', addinput)
})