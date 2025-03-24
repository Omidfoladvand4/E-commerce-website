# 🛒 E-Commerce Store (React + Context API)

## 📌 Introduction
This is a simple **E-Commerce Store** built using **React.js** and **Context API**. Users can browse products, add them to their cart, and view the total price.

---

## 🚀 Technologies Used
- **React.js** ⚛️ (Frontend development)  
- **React Router** 🔀 (For navigation)  
- **Context API** 🌍 (State management for cart)   
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
 ┃ ┃ ├ 📂 Breadcrums   # Breadcrumb etc...
 navigation
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
### 1⃣   Clone the Repository
```bash
git clone https://github.com/omidfoladvand4/my-ecommerce-store.git
cd my-ecommerce-store
```

### 2⃣   Install Dependencies
```bash
npm install
```

### 3⃣   Start the Project
```bash
npm run dev

---
### live demo 
`https://e-commerce-website.liara.run/`
## 🎯 Features
✅ Browse product list  
✅ View product details  
✅ Add products to cart  
✅ Remove products from cart  
✅ Calculate total price   

---


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

