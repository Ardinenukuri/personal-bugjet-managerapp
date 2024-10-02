import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./css/ExpenseForm.css";

interface ExpenseFormProps {
  dispatch: React.Dispatch<any>;
  editingExpense: { amount: number; date: string; category: string } | null;
  editingIndex: number | null;
  setEditingIndex: (index: number | null) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ dispatch, editingExpense, editingIndex, setEditingIndex }) => {
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [category, setCategory] = useState<string>('General');
  const [newCategory, setNewCategory] = useState<string>('');
  const [color, setColor] = useState<string>('#ffffff');
  const [showNewCategoryFields, setShowNewCategoryFields] = useState<boolean>(false); // Toggle for new category fields

  const [categories, setCategories] = useState<{ name: string, color: string }[]>(() => {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      console.log('Retrieved categories from localStorage:', savedCategories); // Log the retrieved data
      return JSON.parse(savedCategories);
    } else {
      const defaultCategories = [
        { name: 'General', color: '#28a745' },
        { name: 'Food', color: '#ffcc00' },
        { name: 'Transportation', color: '#FFCE56' }
      ];
      localStorage.setItem('categories', JSON.stringify(defaultCategories)); // Save default categories if none found
      console.log('Saved default categories to localStorage:', defaultCategories); // Log the default categories
      return defaultCategories;
    }
  });

  useEffect(() => {
    if (editingExpense) {
      setAmount(editingExpense.amount);
      setDate(editingExpense.date);
      setCategory(editingExpense.category);
    }
  }, [editingExpense]);

  // Save categories to localStorage whenever they are updated
  useEffect(() => {
    console.log('Saving categories to localStorage:', categories); // Log the categories before saving
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingIndex !== null) {
      dispatch({
        type: 'EDIT_EXPENSE',
        payload: {
          index: editingIndex,
          updatedExpense: { amount, date, category }
        }
      });
      setEditingIndex(null);
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: { amount, date, category }
      });
    }

    // Reset form fields
    setAmount(0);
    setDate('');
    setCategory('General');
  };

  const handleAddCategory = () => {
    if (newCategory && color) {
      const updatedCategories = [...categories, { name: newCategory, color }];
      setCategories(updatedCategories);
      console.log('Added new category:', { name: newCategory, color }); // Log the newly added category
      setNewCategory('');
      setColor('#ffffff');
      setShowNewCategoryFields(false); // Hide new category fields after adding
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === 'addNew') {
      setShowNewCategoryFields(true);
    } else {
      setCategory(selectedCategory);
      setShowNewCategoryFields(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">{editingIndex !== null ? 'Edit Expense' : 'Add New Expense'}</h1>
      <div className="button-group mb-4">
        <Link to="/expenses-list" className="btn btn-primary">View Expenses List</Link>
        <Link to="/" className="btn btn-secondary">Go to Dashboard</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder="Amount"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            className="form-select"
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            ))}
            <option value="addNew">Add New Category</option>
          </select>
        </div>

        {/* Show new category fields if 'Add New Category' is selected */}
        {showNewCategoryFields && (
          <>
            <div className="mb-3">
              <label htmlFor="newCategory" className="form-label">New Category</label>
              <input
                type="text"
                className="form-control"
                id="newCategory"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter new category"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="color" className="form-label">Category Color</label>
              <input
                type="color"
                className="form-control"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
            </div>
            <button type="button" className="btn btn-info mb-3" onClick={handleAddCategory}>Add Category</button>
          </>
        )}

        <button type="submit" className="btn btn-success">
          {editingIndex !== null ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
