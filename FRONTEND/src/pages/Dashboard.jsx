// import React, { useState } from "react";
// import "../index.css";

// const Dashboard = ({ onLogout }) => {
// const [transactions, setTransactions] = useState([]);
// const [showForm, setShowForm] = useState(false);
// const [editIndex, setEditIndex] = useState(null);
// const [formData, setFormData] = useState({
//     title: "",
//     amount: "",
//     category: "",
//     description: "",
//     type: "",
//     date: "",
// });

// const handleFormChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editIndex !== null) {
//     const updatedTransactions = [...transactions];
//     updatedTransactions[editIndex] = formData;
//     setTransactions(updatedTransactions);
//     setEditIndex(null);
//     } else {
//     setTransactions([...transactions, formData]);
//     }
//     setShowForm(false);
//     setFormData({ title: "", amount: "", category: "", description: "", type: "", date: "" });
// };

// const handleEdit = (index) => {
//     setFormData(transactions[index]);
//     setEditIndex(index);
//     setShowForm(true);
// };

// const handleDelete = (index) => {
//     setTransactions(transactions.filter((_, i) => i !== index));
// };

// return (
//     <div className="dashboard-container">
//     <h1>WELCOME TO</h1>
//     <h1><h1>FINANCIAL MANAGEMENT DASHBOARD</h1></h1>
//     <br></br>
//     <h3><u>*** Effortless Expense Tracking for a Brighter Future ***</u></h3>

//     <br />
//     <br></br><br></br>
//     <div className="filter-options">
//         <select><option>Last Week</option></select>
//         <select><option>All</option></select>
//         <button>Reset Filter</button>
//     </div>
//     <br /><br></br>
//     <h3>Click Hear To  Add New Files</h3><br></br>
//     <button className="add-btn" onClick={() => { setShowForm(true); setEditIndex(null); }}>Add New</button>
//     <br></br> <br></br>
//     {showForm && (
//         <div className="modal">
//     <form onSubmit={handleFormSubmit}>
//             <label>Title:<input type="text" name="title" value={formData.title} onChange={handleFormChange} required /></label>
//             <label>Amount:<input type="number" name="amount" value={formData.amount} onChange={handleFormChange} required /></label>
//             <label>Category:<input type="text" name="category" value={formData.category} onChange={handleFormChange} required /></label>
//             <label>Description:<input type="text" name="description" value={formData.description} onChange={handleFormChange} /></label>
//             <label>Transaction Type:<input type="text" name="type" value={formData.type} onChange={handleFormChange} required /></label>
//             <label>Date:<input type="date" name="date" value={formData.date} onChange={handleFormChange} required /></label>
//             <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
//             <button type="button" onClick={() => setShowForm(false)}>Close</button>
//         </form>
//         </div>
//     )}
//     <table className="expense-table">
//         <thead>
// <tr>
//             <th>Date</th>
//             <th>Title</th>
//             <th>Amount</th>
//             <th>Type</th>
//             <th>Category</th>
//             <th>Action</th>
//         </tr>
//         </thead>
//         <tbody>
//         {transactions.map((transaction, index) => (
//             <tr key={index}>
//             <td>{transaction.date}</td>
//             <td>{transaction.title}</td>
//             <td>{transaction.amount}</td>
//             <td>{transaction.type}</td>
//             <td>{transaction.category}</td>
//             <td>
//                 <button onClick={() => handleEdit(index)}>Edit</button>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//             </td>
//             </tr>
//         ))}
//         </tbody>
//     </table>
//     <br />
//     <br></br><br></br>
//     <button onClick={onLogout} className="logout-btn">Logout</button>
//     </div>
// );
// };

// export default Dashboard;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const Dashboard = ({ onLogout }) => {
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    description: "",
    type: "",
    date: "",
  });

  // Fetch transactions from the backend
  useEffect(() => {
    axios.get("http://localhost:5000/transactions")
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (editIndex !== null) {
      // Update existing transaction
      try {
        await axios.put(`http://localhost:5000/transactions/${transactions[editIndex]._id}`, formData);
        const updatedTransactions = [...transactions];
        updatedTransactions[editIndex] = formData;
        setTransactions(updatedTransactions);
        setEditIndex(null);
      } catch (error) {
        console.error("Error updating transaction:", error);
      }
    } else {
      // Add a new transaction
      try {
        const response = await axios.post("http://localhost:5000/transactions", formData);
        setTransactions([...transactions, response.data]);
      } catch (error) {
        console.error("Error adding transaction:", error);
      }
    }

    setShowForm(false);
    setFormData({ title: "", amount: "", category: "", description: "", type: "", date: "" });
  };

  const handleEdit = (index) => {
    setFormData(transactions[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`http://localhost:5000/transactions/${transactions[index]._id}`);
      setTransactions(transactions.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>WELCOME TO</h1>
      <h2>FINANCIAL MANAGEMENT DASHBOARD</h2>
      <h3><u>*** Effortless Expense Tracking for a Brighter Future ***</u></h3>

      <div className="filter-options">
        <select><option>Last Week</option></select>
        <select><option>All</option></select>
        <button>Reset Filter</button>
      </div>

      <h3>Click Here To Add New Files</h3>
      <button className="add-btn" onClick={() => { setShowForm(true); setEditIndex(null); }}>Add New</button>

      {showForm && (
        <div className="modal">
          <form onSubmit={handleFormSubmit}>
            <label>Title:<input type="text" name="title" value={formData.title} onChange={handleFormChange} required /></label>
            <label>Amount:<input type="number" name="amount" value={formData.amount} onChange={handleFormChange} required /></label>
            <label>Category:<input type="text" name="category" value={formData.category} onChange={handleFormChange} required /></label>
            <label>Description:<input type="text" name="description" value={formData.description} onChange={handleFormChange} /></label>
            <label>Transaction Type:<input type="text" name="type" value={formData.type} onChange={handleFormChange} required /></label>
            <label>Date:<input type="date" name="date" value={formData.date} onChange={handleFormChange} required /></label>
            <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
            <button type="button" onClick={() => setShowForm(false)}>Close</button>
          </form>
        </div>
      )}

      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction._id}>
              <td>{transaction.date}</td>
              <td>{transaction.title}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={onLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Dashboard;


