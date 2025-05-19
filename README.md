# 🍽️ **Restaurant POS System**

A full-featured **Restaurant POS System** built using the **MERN Stack** to streamline restaurant operations, enhance customer experience, and manage orders, payments, and inventory with ease.

---

## **✨ Features**

- 🍽️ **Order Management**  
  Efficiently manage customer orders with real-time updates and status tracking.

- 🪑 **Table Reservations**  
  Simplify table bookings and manage reservations directly from the POS.

- 🔐 **Authentication & RBAC**  
  Secure login with **Role-Based Access Control (RBAC)**:  
  - 👑 Admin: Manage users, tables, and overall system settings  
  - 👤 User: Place orders, view table availability  
  - 👨‍🍳 Waiter: Handle live orders and table updates

- 💸 **Payment Integration**  
  Integrated with **Razorpay** for seamless online payments.

- 🧾 **Billing & Invoicing**  
  Automatically generate detailed bills and invoices for every order.

---

## **🏗️ Tech Stack**

| **Category**             | **Technology**                |
|--------------------------|-------------------------------|
| 🖥️ **Frontend**          | React.js, Redux, Tailwind CSS |
| 🔙 **Backend**           | Node.js, Express.js           |
| 🗄️ **Database**          | MongoDB Atlas                 |
| 🔐 **Authentication**    | JWT, bcrypt                   |
| 🛡️ **RBAC**              | Role-Based Access Control     |
| 💳 **Payment Gateway**   | Razorpay                      |
| 📊 **State Management**  | Redux Toolkit                 |
| ⚡ **Data Fetching**     | React Query                   |
| 🔗 **APIs**              | RESTful APIs                  |

---

## **🚀 Getting Started**

### **📦 Clone the Repository**

```bash
git clone https://github.com/rampradops28/Restaurant_pos_System_MERN.git
cd Restaurant_pos_System_MERN


Make sure to set the VITE_BACKEND_URL in environment variables during deployment.
---

🔧 Backend Setup
📁 Navigate to Backend
bash
Copy
Edit
cd backend
📥 Install Dependencies
bash
Copy
Edit
npm install
📝 Create .env File
Create a .env file in the backend directory and add the following:

env
Copy
Edit
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
▶️ Start the Backend Server
bash
Copy
Edit
npm start
By default, the server runs on:
🔗 http://localhost:8000

After deployment, make sure to update your frontend .env with the deployed backend URL.

🌐 Frontend Setup
📁 Navigate to Frontend
bash
Copy
Edit
cd ../frontend
📥 Install Dependencies
bash
Copy
Edit
npm install
📝 Create .env File
Create a .env file in the frontend directory and add the following:

env
Copy
Edit
VITE_BACKEND_URL=https://restaurant-pos-system-mern.onrender.com
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
▶️ Start the Frontend
bash
Copy
Edit
npm run dev
Frontend will be available at:
🔗 http://localhost:5173 (or as shown in your terminal)

📦 Deployment
🔙 Backend (Render)
The backend is deployed on Render:
🔗 https://restaurant-pos-system-mern.onrender.com

Ensure your backend environment variables are set under the Environment tab in Render.

🖥️ Frontend (Vercel/Netlify)
Deploy the frontend folder using Vercel or Netlify. Set your production environment variables:

env
Copy
Edit
VITE_BACKEND_URL=https://restaurant-pos-system-mern.onrender.com
VITE_RAZORPAY_KEY_ID=your_live_razorpay_key_id
✅ Environment Variables Reference
🔙 Backend .env
env
Copy
Edit
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
🖥️ Frontend .env
env
Copy
Edit
VITE_BACKEND_URL=https://restaurant-pos-system-mern.onrender.com
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
 
## 🖼️ **Project Screenshots**

<table>
  <tr>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/ibjxvy5o1ikbsdebrjky.png" alt="Screenshot 1" width="300"/></td>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502773/ietao6dnw6yjsh4f71zn.png" alt="Screenshot 2" width="300"/></td>
  </tr>
  <tr>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/vesokdfpa1jb7ytm9abi.png" alt="Screenshot 3" width="300"/></td>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/setoqzhzbwbp9udpri1f.png" alt="Screenshot 4" width="300"/></td>
  </tr>
  <tr>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/fc4tiwzdoisqwac1j01y.png" alt="Screenshot 5" width="300"/></td>
  </tr>
</table>

  
