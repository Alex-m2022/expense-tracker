// project: Expense Tracker
// 12/4/2022
// app features: app takes in 3 inputs. expense name, expense date and total amount. expense will then be displayed at a table below
let expname = document.getElementById('expensename')
let expdate = document.getElementById('expensedate')
let expAmount = document.getElementById('expenseAmount')
let form = document.getElementById('form')
let errorElement = document.getElementById('error')
let errorElement2 = document.getElementById('error2')
let errorElement3 = document.getElementById('error3')

 // this function checks to see if the input fields are empty. if functions are empty, display error message then quit function
 
form.addEventListener('submit', (e) => {
    let messages =[]
    let datemessage = []
    let amountmessage = []

    if (expname.value === '' || expname.value === null) {
        messages.push('name is required')
    }
    if (messages.length > 0) {
        //e.preventDefault()
        errorElement.innerText = messages.join(' , ')
        return
    } else {
        errorElement.innerText = ''
        
    }

    if (expdate.value === '' || expdate.value === null) {
        datemessage.push('date is required')
    }
    if (datemessage.length > 0) {
        //e.preventDefault()
        errorElement2.innerText = datemessage.join(' , ')
        return
    } else {
        errorElement2.innerText = ''
    }


    if (expAmount.value === '' || expAmount.value === null ) {
        amountmessage.push('amount is required')
    }
    if (amountmessage.length > 0) {
        //e.preventDefault()
        errorElement3.innerText = amountmessage.join(' , ')
        return
    } else {
        errorElement3.innerText = ''
    }
    // if all fields are valid, execute rowadd function
    rowadd()

})
// rowadd will create table row and table data, and insert input into each td
let rowadd = () => {
    tbody = document.getElementById('mytable')
    tr = document.createElement('tr')

    tbody.appendChild(tr)
    let td1 = tr.appendChild(document.createElement('td'))
    let td2 = tr.appendChild(document.createElement('td'))
    let td3 = tr.appendChild(document.createElement('td'))
    let td4 = tr.appendChild(document.createElement('td'))
// btn allows user to delete entire data row
    let btn = document.createElement('button')
    btn.textContent = 'delete'
    td4.appendChild(btn)
    btn.addEventListener('click', () => {
        tr.remove()
    })
    
    td1.innerHTML = expname.value
    td2.innerHTML = expdate.value
    td3.innerHTML = '$' + expAmount.value

    let inputs = document.querySelectorAll('.inputfield')
    inputs.forEach(input => {
        input.value = '';
      });
}
/* next I want to make a function that adds a sum colum to the table, which adds all of the expenses up and displays the total
function sumcolum () {
}
*/
