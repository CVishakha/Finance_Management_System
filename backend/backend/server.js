
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 5000;

// // Default route
// app.get("/", (req, res) => {
//   res.send("Welcome To Finance Management System");
// });

// // Sample API endpoint
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from backend!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// import express from "express";
// import cors from "cors";

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Sample API endpoint
// app.get("/", (req, res) => {
//   res.send("Backend is running!");
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/financeDB", { useNewUrlParser: true, useUnifiedTopology: true });

// const transactionSchema = new mongoose.Schema({
//   title: String,
//   amount: Number,
//   category: String,
//   description: String,
//   type: String,
//   date: String
// });

// const Transaction = mongoose.model("Transaction", transactionSchema);

// // Get all transactions
// app.get("/transactions", async (req, res) => {
//   const transactions = await Transaction.find();
//   res.json(transactions);
// });

// // Add a transaction
// app.post("/transactions", async (req, res) => {
//   const transaction = new Transaction(req.body);
//   await transaction.save();
//   res.json(transaction);
// });

// // Update a transaction
// app.put("/transactions/:id", async (req, res) => {
//   await Transaction.findByIdAndUpdate(req.params.id, req.body);
//   res.send("Transaction Updated");
// });

// // Delete a transaction
// app.delete("/transactions/:id", async (req, res) => {
//   await Transaction.findByIdAndDelete(req.params.id);
//   res.send("Transaction Deleted");
// });

// app.listen(5000, () => console.log("Server running on port 5000"));

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/financeDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const transactionSchema = new mongoose.Schema({
//   title: String,
//   amount: Number,
//   category: String,
//   description: String,
//   type: String,
//   date: String,
// });

// const Transaction = mongoose.model("Transaction", transactionSchema);

// // Get all transactions
// app.get("/transactions", async (req, res) => {
//   const transactions = await Transaction.find();
//   res.json(transactions);
// });

// // Add a transaction
// app.post("/transactions", async (req, res) => {
//   const transaction = new Transaction(req.body);
//   await transaction.save();
//   res.json(transaction);
// });

// // Update a transaction
// app.put("/transactions/:id", async (req, res) => {
//   await Transaction.findByIdAndUpdate(req.params.id, req.body);
//   res.send("Transaction Updated");
// });

// // Delete a transaction
// app.delete("/transactions/:id", async (req, res) => {
//   await Transaction.findByIdAndDelete(req.params.id);
//   res.send("Transaction Deleted");
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/financeDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const transactionSchema = new mongoose.Schema({
//   title: String,
//   amount: Number,
//   category: String,
//   description: String,
//   type: String,
//   date: String,
// });

// const Transaction = mongoose.model("Transaction", transactionSchema);

// // Get all transactions
// app.get("/transactions", async (req, res) => {
//   const transactions = await Transaction.find();
//   res.json(transactions);
// });

// // Add a transaction
// app.post("/transactions", async (req, res) => {
//   const transaction = new Transaction(req.body);
//   await transaction.save();
//   res.json(transaction);
// });

// // Update a transaction
// app.put("/transactions/:id", async (req, res) => {
//   await Transaction.findByIdAndUpdate(req.params.id, req.body);
//   res.send("Transaction Updated");
// });

// // Delete a transaction
// app.delete("/transactions/:id", async (req, res) => {
//   await Transaction.findByIdAndDelete(req.params.id);
//   res.send("Transaction Deleted");
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");


// type TransactionType = {
//   title: string;
//   amount: number;
//   category: string;
//   description: string;
//   type: string;
//   date: string;
// };

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/financeDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// const transactionSchema = new mongoose.Schema<TransactionType>({
//   title: { type: String, required: true },
//   amount: { type: Number, required: true },
//   category: { type: String, required: true },
//   description: { type: String },
//   type: { type: String, required: true },
//   date: { type: String, required: true },
// });

// const Transaction = mongoose.model<TransactionType>("Transaction", transactionSchema);

// // Get all transactions
// app.get("/transactions", async (req, res) => {
//   try {
//     const transactions = await Transaction.find();
//     res.json(transactions);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching transactions" });
//   }
// });

// // Add a transaction
// app.post("/transactions", async (req, res) => {
//   try {
//     const transaction = new Transaction(req.body);
//     await transaction.save();
//     res.json(transaction);
//   } catch (error) {
//     res.status(400).json({ error: "Error saving transaction" });
//   }
// });

// // Update a transaction
// app.put("/transactions/:id", async (req, res) => {
//   try {
//     await Transaction.findByIdAndUpdate(req.params.id, req.body);
//     res.json({ message: "Transaction Updated" });
//   } catch (error) {
//     res.status(400).json({ error: "Error updating transaction" });
//   }
// });

// // Delete a transaction
// app.delete("/transactions/:id", async (req, res) => {
//   try {
//     await Transaction.findByIdAndDelete(req.params.id);
//     res.json({ message: "Transaction Deleted" });
//   } catch (error) {
//     res.status(400).json({ error: "Error deleting transaction" });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bodyParser from "body-parser";

// type TransactionType = {
//   title: string;
//   amount: number;
//   category: string;
//   description?: string;
//   type: string;
//   date: string;
// };

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/financeDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error("MongoDB Connection Error:", err));

// const transactionSchema = new mongoose.Schema<TransactionType>({
//   title: { type: String, required: true },
//   amount: { type: Number, required: true },
//   category: { type: String, required: true },
//   description: { type: String },
//   type: { type: String, required: true },
//   date: { type: String, required: true },
// }, { timestamps: true });

// const Transaction = mongoose.model<TransactionType>("Transaction", transactionSchema);

// // Get all transactions
// app.get("/transactions", async (req, res) => {
//   try {
//     const transactions = await Transaction.find();
//     res.status(200).json(transactions);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching transactions" });
//   }
// });

// // Add a transaction
// app.post("/transactions", async (req, res) => {
//   try {
//     const transaction = new Transaction(req.body);
//     await transaction.save();
//     res.status(201).json(transaction);
//   } catch (error) {
//     res.status(400).json({ error: "Error saving transaction" });
//   }
// });

// // Update a transaction
// app.put("/transactions/:id", async (req, res) => {
//   try {
//     const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedTransaction) return res.status(404).json({ error: "Transaction not found" });
//     res.status(200).json({ message: "Transaction Updated", updatedTransaction });
//   } catch (error) {
//     res.status(400).json({ error: "Error updating transaction" });
//   }
// });

// // Delete a transaction
// app.delete("/transactions/:id", async (req, res) => {
//   try {
//     const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);
//     if (!deletedTransaction) return res.status(404).json({ error: "Transaction not found" });
//     res.status(200).json({ message: "Transaction Deleted" });
//   } catch (error) {
//     res.status(400).json({ error: "Error deleting transaction" });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/financeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const transactionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true },
  date: { type: String, required: true },
}, { timestamps: true });

const Transaction = mongoose.model("Transaction", transactionSchema);

// Get all transactions
app.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Error fetching transactions" });
  }
});

// Add a transaction
app.post("/transactions", async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: "Error saving transaction" });
  }
});

// Update a transaction
app.put("/transactions/:id", async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTransaction) return res.status(404).json({ error: "Transaction not found" });
    res.status(200).json({ message: "Transaction Updated", updatedTransaction });
  } catch (error) {
    res.status(400).json({ error: "Error updating transaction" });
  }
});

// Delete a transaction
app.delete("/transactions/:id", async (req, res) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!deletedTransaction) return res.status(404).json({ error: "Transaction not found" });
    res.status(200).json({ message: "Transaction Deleted" });
  } catch (error) {
    res.status(400).json({ error: "Error deleting transaction" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
