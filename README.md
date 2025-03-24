# 🛒 E-Commerce Store (React + Context API)

## 📌 Introduction
This is a simple **E-Commerce Store** built using **React.js** and **Context API**. Users can browse products, add them to their cart, and view the total price.

---

## 🚀 Technologies Used
- **React.js** ⚛️ (Frontend development)  
- **React Router** 🔀 (For navigation)  
- **Context API** 🌍 (State management for cart)  
- **CSS (SASS / TailwindCSS)** 🎨 (Styling)  
- **Git & GitHub** 🛠️ (Version control)  

---

## 💁 Folder Structure
```
📆 my-ecommerce-store
 ├ 📂 public
 ┃ └ 📋 index.html
 ├ 📂 src
 ┃ ├ 📂 components
 ┃ ┃ ├ 📂 Assets       # Images & product data
 ┃ ┃ ├ 📂 Breadcrums   # Breadcrumb navigation
 ┃ ┃ └ 📋 CartItems.jsx  # Cart component
 ┃ ├ 📂 context
 ┃ ┃ └ 📋 ShopContext.jsx  # Context API state management
 ┃ ├ 📂 pages
 ┃ ┃ └ 📋 Product.jsx  # Product details page
 ┃ ├ 📋 App.jsx
 ┃ ├ 📋 index.js
 ┃ └ 📋 styles.css
 ├ 📋 package.json
 ├ 📋 README.md
 └ 📋 .gitignore
```

---

## ⚡ Installation & Setup
### 1⃣ Clone the Repository
```bash
git clone https://github.com/your-username/my-ecommerce-store.git
cd my-ecommerce-store
```

### 2⃣ Install Dependencies
```bash
npm install
```

### 3⃣ Start the Project
```bash
npm run dev
```
Your site will run at `http://localhost:3000`.

---
### live demo 
`https://e-commerce-website.liara.run/`
## 🎯 Features
✅ Browse product list  
✅ View product details  
✅ Add products to cart  
✅ Remove products from cart  
✅ Calculate total price  
✅ Responsive design  

---

## 🛠 How `Context API` Works
### **1. Creating Context (`ShopContext.jsx`)**
```jsx
import React, { createContext, useState } from "react";
import all_products from '../components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextprovider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (id) => {
        setCartItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const removeFromCart = (id) => {
        setCartItems(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
    };

    return (
        <ShopContext.Provider value={{ all_products, cartItems, addToCart, removeFromCart }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextprovider;
```

### **2. Using `useContext` in `CartItems.jsx`**
```jsx
import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const CartItems = () => {
    const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cart-items'>
            {all_products.map(product => cartItems[product.id] > 0 && (
                <div key={product.id}>
                    <p>{product.name} - {cartItems[product.id]} pcs</p>
                    <button onClick={() => removeFromCart(product.id)}>❌ Remove</button>
                </div>
            ))}
        </div>
    );
};

export default CartItems;
```

---

## 🛧 Development Notes & Debugging
1⃣ **Check `useContext` Value**  
- If `null` or `undefined`, ensure `ShopContextprovider` is wrapped correctly in `App.jsx`:
```jsx
import ShopContextprovider from './context/ShopContext';

function App() {
  return (
    <ShopContextprovider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </ShopContextprovider>
  );
}
```

2⃣ **Validate `cartItems` Values**  
- Ensure `cartItems[item]` is not `undefined` before using it in calculations.

---

## 🔗 Useful Links
- [React.js Docs](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Context API Docs](https://react.dev/reference/react/useContext)
- [TailwindCSS](https://tailwindcss.com/)

---

## 🐜 License
📄 This project is released under the **MIT License**. 🚀

