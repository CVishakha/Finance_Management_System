# Finance Management System 

## Overview
This project is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to manage their finances by tracking their expenses and income. The application provides a user-friendly interface for CRUD (Create, Read, Update, Delete) operations on transactions, secure user authentication, and data visualization features to help users analyze their financial data.

## Features
- **User Authentication**: Secure sign-up and login
- **Transaction Management**: Users can add, view, edit, and delete income and expense records.
- **Data Visualization**: Charts to visualize income and expense trends.

## Tech Stack
- **Front-End**: React.js
  - **State Management**: React Hooks
  - **UI Components**: AntD, Bootstrap
  - **Data Visualization**: AntD

- **Back-End**: Node.js with Express.js
  - **API Design**: RESTful APIs for handling CRUD operations and user authentication.
  - **Authentication**: secure user authentication

- **Database**: MongoDB
  - **ODM**: Mongoose for schema-based data modeling.

- **Other Tools**:
  - **Version Control**: Git
  - **Deployment**: Vercel

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- Git

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mpatwa98/Finance_Management_System_Backend-.git
   cd Finance_Managent_System
   ```

2. **Install Dependencies**
   ```bash
   # Install server dependencies
   npm install
   
   # Navigate to the client directory and install dependencies
   cd client
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the server directory and add the following environment variables:
   ```bash
   MONGO_URL=your_mongo_connection_string
   ```

4. **Run the Application**
   ```bash
   # Run the server
   npm run server
   
   # Run the client
   npm run dev
   ```

5. **Access the Application**
   Open your browser and navigate to `http://localhost:5173`.

## Usage
1. **Sign Up / Login**: Create a new account or log in with existing credentials.
2. **Manage Transactions**: Add new income or expense transactions, update or delete existing ones.
3. **View Reports**: Access charts and reports to visualize your financial data over time.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.
