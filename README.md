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
<<<<<<< HEAD
| 💳 **Payment Integration**| Razorpay    |
| 📊 **State Management**   | Redux Toolkit                 |
| ⚡ **Data Fetching & Caching** | React Query            |
| 🔗 **APIs**              | RESTful APIs                   |

---
<br>

  <tr>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/vesokdfpa1jb7ytm9abi.png" alt="Screenshot 3" width="300"/></td>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/setoqzhzbwbp9udpri1f.png" alt="Screenshot 4" width="300"/></td>
  </tr>
  <tr>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/fc4tiwzdoisqwac1j01y.png" alt="Screenshot 5" width="300"/></td>
  </tr>
</table>
=======
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

🔧 Backend Setup

### 📁 Navigate to Backend

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditcd backend   `

### 📥 Install Dependencies

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditnpm install   `

### 📝 Create .env File

Create a .env file in the backend directory and add the following:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   envCopyEditPORT=8000  MONGODB_URI=your_mongodb_connection_string  JWT_SECRET=your_jwt_secret  RAZORPAY_KEY_ID=your_razorpay_key_id  RAZORPAY_KEY_SECRET=your_razorpay_key_secret  RAZORPAY_WEBHOOK_SECRET=your_webhook_secret   `

### ▶️ Start the Backend Server

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditnpm start   `

By default, the server runs on:🔗 [http://localhost:8000](http://localhost:8000)

After deployment, make sure to update your frontend .env with the deployed backend URL.

🌐 Frontend Setup
-----------------

### 📁 Navigate to Frontend

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditcd ../frontend   `

### 📥 Install Dependencies

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditnpm install   `

### 📝 Create .env File

Create a .env file in the frontend directory and add the following:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   envCopyEditVITE_BACKEND_URL=https://restaurant-pos-system-mern.onrender.com  VITE_RAZORPAY_KEY_ID=your_razorpay_key_id   `

### ▶️ Start the Frontend

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditnpm run dev   `

Frontend will be available at:🔗 [http://localhost:5173](http://localhost:5173) (or as shown in your terminal)

📦 Deployment
-------------

### 🔙 Backend (Render)

The backend is deployed on Render:🔗 [https://restaurant-pos-system-mern.onrender.com](https://restaurant-pos-system-mern.onrender.com)

Ensure your backend environment variables are set in Render under the Environment tab.

### 🖥️ Frontend (Vercel)

Deploy the frontend folder using Vercel or Netlify. Don’t forget to set your production environment variables.

Ensure your backend environment variables are set in vercel under the Environment tab.

> 📂 Folder Structure (Overview)
> 
> **├── Backend**
> 
> **│ ├── config**
> 
> **│ ├── controllers**
> 
> **│ ├── middlewares**
> 
> **│ ├── models**
> 
> **│ ├── routes**
> 
> **│ ├── app.js**
> 
> **│ ├── package.json**
> 
> **│ └── sample.env**
> 
> **├── Frontend**
> 
> **│ ├── public**
> 
> **│ ├── src**
> 
> **│ │ ├── Animations**
> 
> **│ │ ├── assets**
> 
> **│ │ ├── components**
> 
> **│ │ ├── constants**
> 
> **│ │ ├── hooks**
> 
> **│ │ ├── https**
> 
> **│ │ ├── pages**
> 
> **│ │ ├── reactbits**
> 
> **│ │ ├── redux**
> 
> **│ │ └── utils**
> 
> **│ ├── package.json**
> 
> **│ ├── tailwind.config.js**
> 
> **│ └── vite.config.js**
> 
> **└── README.md**
> 
> **📬 Contact**
> 
> Feel free to fork, open an issue, or contribute!
> 
> 👤 Developed by [@rampradops28](https://github.com/rampradops28)🌟 Show some love by starring the repo!
> 
> Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   yamlCopyEdit  ---  Let me know if you want this directly uploaded to GitHub or saved as a file.   `
  
>>>>>>> a5a5b19f89ae82eff3f02acf9d4dc3dcad804428
