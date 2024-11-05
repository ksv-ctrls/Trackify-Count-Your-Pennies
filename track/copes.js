let expenses=[];
let totalAmount=0;
const categorySelect=document.getElementById('category-select');
const amountInput=document.getElementById('amount-input');
const dateInput=document.getElementById('date-input');
const addBtn=document.getElementById('add-btn');
const expensesTableBody=document.getElementById('expense-table-body');
let totalAmountCell=document.getElementById('Total-amount');
addBtn.addEventListener('click', function()
{
    const category=categorySelect.value;
    const amount=parseFloat(amountInput.value);
    const date=dateInput.value;
    if (category==='')
    {
        alert('Please select category')
        return ;
    }
    if(isNaN(amount)||amount<=0)
    {
        alert('Please select a valid amount')
        return;
    }
    if(date==='')
    {
        alert('Please select date')
        return;
    }
    expenses.push({category,amount,date})
    totalAmount=(totalAmount+amount);
    totalAmountCell.textContent=totalAmount;
    const newRow=expensesTableBody.insertRow();
    const categoryCell=newRow.insertCell();
    const amountCell=newRow.insertCell();
    const dateCell=newRow.insertCell();
    const deleteCell=newRow.insertCell();
    const deleteBtn=document.createElement('Button');
    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expenses),1)
        totalAmount=(totalAmount-expense.amount);
        totalAmountCell.textContent=totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    const expense=expenses[expenses.length-1];
    categoryCell.textContent=expense.category;
    amountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);

});
for (const expense of expenses)
{
    totalAmount=(totalAmount+expense.amount);
    totalAmountCell.textContent=totalAmount;
    const newRow=expensesTableBody.insertRow();
    const categoryCell=newRow.insertCell();
    const amountCell=newRow.insertCell();
    const dateCell=newRow.insertCell();
    const deleteCell=newRow.insertCell();
    const deleteBtn=document.createElement('Button');
    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expenses),1)
        totalAmount=(totalAmount-expense.amount);
        totalAmountCell.textContent=totalAmount;
        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent=expense.category;
    amountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);
}