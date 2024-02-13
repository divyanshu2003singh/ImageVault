
**README.md**

**Project Title:**  ImageVault

**Description:**

This project is a simple web application that allows users to sign up, log in, and upload images. Implement basic authentication and authorization mechanisms to ensure secure access to user data.

**Technologies Used:**

* **Backend:**
    * MongoDB
    * Express.js
    * Node.js
    * JWT (JSON Web Tokens)
* **Frontend:**
    * React.js
    * Axios

**Setup:**



2. **Install dependencies:**

   **Backend:**

     ```bash
     cd backend
     npm install
     ```

     **Frontend:**

     ```bash
     cd frontend
     npm install
     ```

3. **Configure environment variables:**

   **Backend:**

     there is a `config` file in the `backend` write your secret key and mongo URL.

     ```
    module.exports = {
    mongoURI: 'MONGOURL',
    secretOrKey: 'YOUR_SECRET'
  };

     ```

     Replace `<your-mongodb-uri>` with your actual MongoDB connection string and `<your-secret-key>` with a strong secret key used for JWT signing.

4. **Run the application:**

   **Backend:**

     ```bash
     npm start
     ```

   **Frontend:**

     ```bash
     npm start
     ```

**Usage:**

1. Open your web browser and go to http://localhost:3000 (for the frontend).
2. Register as a new user or log in with existing credentials.
3. After logging in, you will be redirected to the image upload page.
4. Upload images using the provided form.

