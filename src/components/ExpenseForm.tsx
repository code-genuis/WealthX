import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { useExpenses } from '../context/ExpenseContext';
import type { Transaction } from '../types/expense';

const expenseCategories = ['Food', 'Transportation', 'Entertainment', 'Shopping', 'Bills', 'Other'];
const incomeCategories = ['Salary', 'Freelance', 'Investments', 'Business', 'Other'];

// Manually set exchange rate (Update this dynamically if using an API)
const PKR_TO_USD_RATE = 0.0036; // Example rate: 1 PKR = 0.0035 USD

interface ExpenseFormProps {
  transaction?: Transaction;
  onClose?: () => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ transaction, onClose }) => {
  const { addTransaction, editTransaction } = useExpenses();
  const [formData, setFormData] = useState({
    description: transaction?.description || '',
    amount: transaction?.amount || '',
    category: transaction?.category || 'Other',
    type: transaction?.type || 'expense',
    date: transaction?.date || new Date().toISOString().split('T')[0],
  });

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Convert PKR to USD
  const convertedAmount = Number(formData.amount) * PKR_TO_USD_RATE;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const transactionData = {
      description: formData.description,
      amount: Number(formData.amount),
      category: formData.category,
      type: formData.type as 'income' | 'expense',
      date: formData.date,
    };

    if (transaction) {
      editTransaction({ ...transactionData, id: transaction.id });
    } else {
      addTransaction(transactionData);
    }

    setFormData({
      description: '',
      amount: '',
      category: 'Other',
      type: 'expense',
      date: new Date().toISOString().split('T')[0],
    });

    if (onClose) onClose();
  };

  const categories = formData.type === 'expense' ? expenseCategories : incomeCategories;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData(prev => ({ 
            ...prev, 
            type: e.target.value as 'income' | 'expense',
            category: 'Other'
          }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <input
          type="text"
          required
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Amount (PKR)</label>
        <input
          type="number"
          required
          min="0"
          step="0.01"
          value={formData.amount}
          onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500">
          Converted: {formatCurrency(convertedAmount, 'USD')}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          required
          value={formData.date}
          onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className={`flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          formData.type === 'income' 
            ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
            : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
        }`}
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        {transaction ? 'Update' : 'Add'} {formData.type === 'income' ? 'Income' : 'Expense'}
      </button>
    </form>
  );
};
