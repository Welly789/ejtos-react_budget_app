import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    if (newBudget > 20000) {
        alert("The budget cannot exceed £20,000");
        setNewBudget(2000)
        return;
    }

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    if (newBudget < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending");
        setNewBudget(totalExpenses);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;