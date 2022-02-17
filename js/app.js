// common function for get input filed
function inputField(fieldId){
    const fieldBox = document.getElementById(fieldId);
    const inputAmount = parseFloat(fieldBox.value);
    if(isNaN(inputAmount) || inputAmount <= 0 ){
        alert('Input valid number please.');
    }
    fieldBox.value = '';
    return inputAmount;
    
}


// event handler for calculate button
document.getElementById('calc-btn').addEventListener('click', function(){
     
    const incomeAmount = inputField('income-box');
    const foodAmount = inputField('food-box');
    const rentAmount = inputField('rent-box');
    const clothAmount = inputField('cloth-box');

    // calculating tota expense
    const totalExpensesField = document.getElementById('total-expenses');
    const totalExpensesAmount = parseFloat(totalExpensesField.innerText);
    const totalExpensesIs = foodAmount + rentAmount + clothAmount;
    totalExpensesField.innerText = totalExpensesIs;

    //get and update balance after expense
    const balanceExpenseField = document.getElementById('balance');
    const balanceExpenseAmount = parseFloat(balanceExpenseField.innerText);
    const totalBalanceAfterExpense = incomeAmount - totalExpensesIs;
    balanceExpenseField.innerText = totalBalanceAfterExpense;

    // calculating percentage of saving money
    document.getElementById('save-btn').addEventListener('click',function(){
    const percentField = document.getElementById('save-box');
    const percentToGet = parseFloat(percentField.value);
    const savingAmount = (percentToGet/100) * incomeAmount;

    // get and update saving money
    const savingField = document.getElementById('saving-amount');
    const savingMoneyIs = parseFloat(savingField.innerText);
    savingField.innerText = savingAmount;

    // get and update remainging balance
    const remainingField = document.getElementById('remainging-balance');
    const remaingingFieldValue = parseFloat(remainingField.innerText);
    remainingField.innerText = totalBalanceAfterExpense - savingAmount;
})
})
