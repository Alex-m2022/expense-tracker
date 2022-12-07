// project: Expense Tracker
// 12/4/2022
// app features: app takes in 3 inputs. expense name, expense date and total amount. expense will then be displayed at a table below

let addinput = () => {
    // storing input value into variables. i use document. the form name. the input name. value to grab the value
    let myname = document.sample.myname.value
    let mydate = document.sample.mydate.value
    let mynumb = document.sample.mynumb.value
    
    // grabbing my table and row so i can append to it later
    let mytable = document.getElementById('mytable')
    let tr = document.createElement('tr')
        
    // im making 4 table data elements and appending them into the table
    mytable.appendChild(tr)
    let td1 = tr.appendChild(document.createElement('td'))
    let td2 = tr.appendChild(document.createElement('td'))
    let td3 = tr.appendChild(document.createElement('td'))
    let td4 = tr.appendChild(document.createElement('td'))

    // im creating a delete button so that the user can delete the expense row.
    let btn = document.createElement('button')
    btn.textContent = 'delete'
    td4.appendChild(btn)
    btn.addEventListener('click', () => {
        tr.remove()
    })

    // setting the table data value to the user input value
    td1.innerHTML = myname
    td2.innerHTML = mydate
    td3.innerHTML = '$' + mynumb

    // clears the input value for the user to add the next input
    let inputs = document.querySelectorAll('.inputfield')
    inputs.forEach(input => {
        input.value = '';
      });
}

