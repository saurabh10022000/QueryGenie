## QueryGenie: OpenAI SQL Translator Web App

### Introduction

QueryGenie is a full-stack web application designed to simplify database interactions by translating natural language queries into SQL. Utilizing React for the client-side, Node.js with Express for the server-side, and the OpenAI API for language processing, QueryGenie allows users to effortlessly query the Chinook sample SQLite database through intuitive and easy-to-understand natural language commands.


https://github.com/user-attachments/assets/9c9f6ea0-e613-4a4b-891d-f363db06eba8


### Technologies

- **Client:** React
- **Server:** Node.js, Express
- **Database:** SQLite (Chinook Sample Database)
- **APIs:** OpenAI, LangChain

### Features

- **Natural Language to SQL Translation:** Converts user-entered natural language queries into SQL commands.
- **Query Execution on Chinook DB:** Executes the translated SQL queries on the Chinook sample database.
- <img width="1228" alt="Screenshot 2024-07-22 at 1 24 00 PM" src="https://github.com/user-attachments/assets/0ddcdf0e-6707-46e2-8924-f34a1f0ae1c9">

- **User-Friendly Query Results Display:** Presents the query results in a clear and accessible manner.

### Getting Started

#### Prerequisites

To run QueryGenie, ensure you have the following installed:

- Node.js (version 14 or later)
- npm (Node Package Manager) or yarn
- OpenAI API key

#### Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/empowerment-ai/full-stack-react-express-langchain-openai.git
   cd full-stack-react-express-langchain-openai
   ```

2. **Install Dependencies:**

   - **Client:**

     ```bash
     cd client && npm install
     ```

   - **Server:**

     ```bash
     cd server && npm install
     ```

3. **Set Up Environment:**

   Create a `.env` file in the server directory and add your OpenAI API key:

   ```plaintext
   OPENAI_API_KEY=your_key_here
   ```

4. **Run the Server:**

   ```bash
   cd server && npm start
   ```

5. **Run the Client:**

   ```bash
   cd client && npm start
   ```

### Usage

To use QueryGenie, type a natural language query into the input field. For example, you can enter, "Show me all albums by AC/DC." The application will then:

1. **Translate:** Convert the natural language query into an SQL command.
2. **Execute:** Run the SQL command on the Chinook sample database.
3. **Display:** Show the query results in an easy-to-read format on the web interface.

QueryGenie makes database querying accessible to everyone, removing the need for extensive SQL knowledge and streamlining data retrieval with the power of natural language processing.
