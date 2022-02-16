function inputField(fieldId){
    const fieldBox = document.getElementById(fieldId);
    const inputAmount = parseFloat(fieldBox.value);
    fieldBox.value = '';
    console.log(inputAmount);
    return inputAmount;
    
}


// event handler for calculate button
document.getElementById('calc-btn').addEventListener('click', function(){
     //const incomeField = document.getElementById('income-box');
    // const incomeAmount = parseFloat(incomeField.value);
    // incomeField.value = '';
    const incomeAmount = inputField('income-box');

    // const foodField = document.getElementById('food-box');
    // const foodAmount = parseFloat(foodField.value);
    // foodField.value = '';
    const foodAmount = inputField('food-box');

    // const rentField = document.getElementById('rent-box');
    // const rentAmount = parseFloat(rentField.value);
    // rentField.value = '';
    const rentAmount = inputField('rent-box');


    // const clothField = document.getElementById('cloth-box');
    // const clothAmount = parseFloat(clothField.value);
    // clothField.value = '';
    const clothAmount = inputField('cloth-box');

    const totalExpensesField = document.getElementById('total-expenses');
    const totalExpensesAmount = parseFloat(totalExpensesField.innerText);
    console.log(totalExpensesAmount);
    const totalExpensesIs = foodAmount + rentAmount + clothAmount;
    totalExpensesField.innerText = totalExpensesIs;

    const balanceExpenseField = document.getElementById('balance');
    const balanceExpenseAmount = parseFloat(balanceExpenseField.innerText);
    const totalBalanceAfterExpense = incomeAmount - totalExpensesIs;
    balanceExpenseField.innerText = totalBalanceAfterExpense;

    document.getElementById('save-btn').addEventListener('click',function(){
    const percentField = document.getElementById('save-box');
    const percentToGet = parseFloat(percentField.value);
    const savingAmount = (percentToGet/100) * totalBalanceAfterExpense;
    console.log(savingAmount);

    const savingField = document.getElementById('saving-amount');
    const savingMoneyIs = parseFloat(savingField.innerText);
    savingField.innerText = savingAmount;

    const remainingField = document.getElementById('remainging-balance');
    const remaingingFieldValue = parseFloat(remainingField.innerText);
    remainingField.innerText = totalBalanceAfterExpense - savingAmount;
})
})
