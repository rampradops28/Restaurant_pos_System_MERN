# 🍽️ Restaurant POS System

A full-featured **Restaurant POS System** built using the **MERN Stack** to streamline restaurant operations, enhance customer experience, and manage orders, payments, and inventory with ease.

---

## ✨ Features

- **Order Management**  
  Efficiently manage customer orders with real-time updates and status tracking.

- **Table Reservations**  
  Simplify table bookings and manage reservations directly from the POS.

- **Authentication & RBAC**  
  Secure login with **Role-Based Access Control (RBAC)**:  
  - 👑 Admin: Manage users, tables, and overall system settings  
  - 👤 User: Place orders, view table availability  
  - 👨‍🍳 Waiter: Handle live orders and table updates

- **Payment Integration**  
  Integrated with **Razorpay** for seamless online payments.

- **Billing & Invoicing**  
  Automatically generate detailed bills and invoices for every order.

---

## 🏗️ Tech Stack

| Category                  | Technology                      |
|---------------------------|---------------------------------|
| 🖥️ Frontend               | React.js, Redux, Tailwind CSS   |
| 🔙 Backend                | Node.js, Express.js             |
| 🗄️ Database               | MongoDB Atlas                   |
| 🔐 Authentication         | JWT, bcrypt                     |
| 🛡️ RBAC                   | Role-Based Access Control       |
| 💳 Payment Gateway        | Razorpay                        |
| 📊 State Management       | Redux Toolkit                   |
| ⚡ Data Fetching & Caching | React Query                     |
| 🔗 APIs                   | RESTful APIs                    |

---

## 🚀 Getting Started

### 📦 Clone the Repository

```bash
git clone https://github.com/rampradops28/Restaurant_pos_System_MERN.git
cd Restaurant_pos_System_MERN
```

---

### 🔧 Backend Setup

#### 1. Navigate to Backend

```bash
cd Backend
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Create `.env` File

Create a `.env` file in the `Backend` directory and add:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

#### 4. Start the Backend Server

```bash
npm start
```

By default, the server runs at: [http://localhost:8000](http://localhost:8000)

---

### 🌐 Frontend Setup

#### 1. Navigate to Frontend

```bash
cd ../Frontend
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Create `.env` File

Create a `.env` file in the `Frontend` directory and add:

```env 
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

#### 4. Start the Frontend

```bash
npm run dev
```

Frontend will be available at: [http://localhost:5173](http://localhost:5173) (or as shown in your terminal)

---

## 📦 Deployment

### 🔙 Backend (Render)

The backend is deployed on Render:  
[https://restaurant-pos-system-mern.onrender.com](https://restaurant-pos-system-mern.onrender.com)

Ensure your backend environment variables are set in Render under the Environment tab.

### 🖥️ Frontend (Vercel)

Deploy the frontend folder using Vercel or Netlify.  
Set your production environment variables accordingly.

---

## 📬 Contact

Feel free to fork, open an issue, or contribute!

👤 Developed by [@rampradops28](https://github.com/rampradops28)  
🌟 Show some love by starring the repo!
