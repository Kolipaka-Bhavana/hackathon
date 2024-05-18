document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('Form');
    const expenseTableBody = document.getElementById('Table').getElementsByTagName('tbody')[0];
    const summaryDiv = document.getElementById('summary');
    let expenses = [];

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;
        addExpense(amount, category, date);
        expenseForm.reset();
    });

    function addExpense(amount, category, date) {
        const expense = { amount, category, date, id: Date.now() };
        expenses.push(expense);
        renderExpenses();
        updateSummary();
    }

    function editExpense(id) {
        const expense = expenses.find(expense => expense.id === id);
        if (expense) {
            document.getElementById('amount').value = expense.amount;
            document.getElementById('category').value = expense.category;
            document.getElementById('date').value = expense.date;
            deleteExpense(id);
        }
    }

    function deleteExpense(id) {
        expenses = expenses.filter(expense => expense.id !== id);
        renderExpenses();
        updateSummary();
    }

    function renderExpenses() {
        expenseTableBody.innerHTML = '';
        expenses.forEach(expense => {
            const row = expenseTableBody.insertRow();
            row.insertCell(0).textContent = expense.amount;
            row.insertCell(1).textContent = expense.category;
            row.insertCell(2).textContent = expense.date;
            const actionsCell = row.insertCell(3);
            const editButton = document.createElement('button');
            editButton.textContent = 'RESET';
            editButton.addEventListener('click', () => editExpense(expense.id));
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'REMOVE';
            deleteButton.addEventListener('click', () => deleteExpense(expense.id));
            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
        });
    }

    function updateSummary() {
        const summary = expenses.reduce((acc, expense) => {
            if (!acc[expense.category]) {
                acc[expense.category] = 0;
            }
            acc[expense.category] += parseFloat(expense.amount);
            return acc;
        }, {});
        summaryDiv.innerHTML = '<h3>Expense Summary</h3>';
        for (const category in summary) {
            const p = document.createElement('p');
            p.textContent = `${category}: $${summary[category].toFixed(2)}`;
            summaryDiv.appendChild(p);
        }
    }
});
