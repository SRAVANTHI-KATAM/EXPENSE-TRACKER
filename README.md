# 💰 Expense Tracker Web App

A **clean and interactive Expense Tracker** built using **HTML, CSS, JavaScript, and Chart.js**.  
It allows you to add income and expense entries, store them in browser `localStorage`, and visualize your financial summary through a responsive **Pie Chart**.

---

## 🌟 Features

✅ Add income or expense with description and amount  
✅ Live total balance, income, and expense calculation  
✅ Visual breakdown with a Pie Chart (powered by Chart.js)  
✅ Stores all data in browser using `localStorage` (no backend needed)  
✅ Responsive and user-friendly interface  
✅ Lightweight – no frameworks required

---

## 🖼️ Live Preview

> _Host it using GitHub Pages or Netlify to get a live link here._

---

## 📸 Screenshots

| 📱 Add Income/Expense | 📊 Visualize with Chart.js |
|-----------------------|----------------------------|
| ![Add Transaction](assets/add-transaction.png) | ![Pie Chart](assets/chart.png) |

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| `HTML5`    | Page structure |
| `CSS3`     | Styling and layout |
| `JavaScript` | App logic and dynamic rendering |
| `Chart.js` | Drawing the pie chart |
| `localStorage` | Saving user data persistently |

---

## 🧠 How It Works

1. User adds a description and amount.
2. Positive amount → Income; Negative → Expense.
3. The transaction is displayed in history.
4. Balance, income, and expense are recalculated.
5. Pie chart updates dynamically.
6. All data is saved in `localStorage` (persists even after refresh).

---

## 🧪 Example Usage

| Description        | Amount  | Type     |
|--------------------|---------|----------|
| `Salary`           | `+25000` | Income   |
| `Electricity Bill` | `-2000`  | Expense  |
| `Grocery`          | `-1500`  | Expense  |
| `Freelance Work`   | `+5000`  | Income   |

**Result:**
- **Balance**: ₹26,500  
- **Income**: ₹30,000  
- **Expense**: ₹3,500  
- Pie chart reflects income vs expense split.

---

## 📂 File Structure


    ExpenseTracker/
    │
    ├── index.html # Main HTML file
    ├── style.css # Styling file
    ├── script.js # JavaScript logic
    └── README.md # Project documentation
## Navigate to the project directory :
    cd expense-tracker
## Open in your browser :
    Open index.html directly in your browser
## 💾 Data Storage :
  This project uses the browser's built-in localStorage to save your transactions:

  - ✔️ No account or login required

  - ✔️ All transactions persist on page reload

  - ❌ Data will be cleared only if you clear browser cache or use Incognito mode
## 🧩 Possible Enhancements :
 Here are a few features you can consider adding:
 Category tags for transactions (e.g., Food, Bills, Travel)

  - Monthly summary view

  - Light/Dark mode switch

  - Export to PDF/CSV

  - Delete/edit individual transactions

  - Filter transactions by type or date
## 📄 License:
This project is licensed under the MIT License – feel free to use, modify, and distribute for personal or commercial purposes.



