# Test Task: Wallet App

The project should be built with:

- **React.js** and **TypeScript**
- Test data stored in a **JSON file** and loaded by the app
- **FontAwesome** for icons (logos)

## Task Overview

### General Requirements

- **Screenshots**: Include screenshots of each completed screen.
- **Mobile Layout Only:** The app is designed exclusively for mobile screens.
- **Screens**: The app should include the following two screens:
    1. **TransactionsList**
    2. **TransactionDetail**

---

### TransactionsList Screen

The following blocks should be part of the `TransactionsList` screen:

#### 1. **Card Balance Block**
- **Maximum Card Limit:** `$1500`
- **Card Balance:** Randomly generated number
- **Available:** Calculated as the limit minus the balance

#### 2. **No Payment Due Block**
- Displays: `"You've paid your balance."`

#### 3. **Daily Points Block**
- Displays today's points, following the formula explained below.

#### 4. **Latest Transactions Block**
- Displays the **10 most recent transactions**.

---

### Transaction Properties

Each transaction contains the following properties:

- **Type:**
    - `"Payment"`: Represents card top-ups (amount displayed with a "`+`")
    - `"Credit"`: Represents card expenses
- **Amount**: The transaction amount
- **Transaction Name**: For example, `IKEA`, `Target`
- **Transaction Description**: Example: any text
- **Date**:
    - **For last week's transactions**: Display the **day name** (e.g., Monday, Tuesday)
    - **For older transactions**: Display the **date**
- **Pending Status:**
    - If the transaction is pending, display `"Pending"` before the description.
    - Example: See the first transaction in the UI mockup.
- **Authorized User:**
    - If performed by another person, display their **name** before the date.
    - Example: See the 1st and 3rd transactions in the mockup.
- **Icon:**
    - Use a random dark background with a standard icon from FontAwesome.

---

### Calculating Daily Points

The calculation of daily points is based on the **current day of the season**:

- **Day 1 (e.g., December 1):** `2 points`
- **Day 2 (e.g., December 2):** `3 points`
- **Day 3 or later:**
    - **Formula:**
        - `Daily Points = 100% of the points from the day before the previous one + 60% of the previous day's points.`
    - Round to the nearest whole number.
    - If points exceed `1000`, display in **"K" format** (e.g., `28745 → 29K`).

#### Example
- **September 1 (Autumn Day 1):** `2 points`
- **September 2 (Autumn Day 2):** `3 points`
- **September 3 (Autumn Day 3):**
    - `2 (from September 1) + 60% of 3 (from September 2)`
    - Total = **4 points**

---

### TransactionDetail Screen

When clicking on a transaction in the `TransactionsList`, a new screen (`TransactionDetail`) opens, displaying **all the transaction details** for the selected transaction.

---

### Notes

1. **Mobile-Only Layout:** No desktop or larger layouts are required.
2. The app must display a visually appealing interface with clean design elements.
3. Ensure all components function well with **randomly loaded JSON data** for transactions.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
