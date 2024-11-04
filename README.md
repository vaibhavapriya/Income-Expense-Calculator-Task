# Income Expense Calculator

This is a web-based Income Expense Calculator that allows users to track their income and expenses, providing a clear overview of their financial status. The application is built using HTML, CSS, and JavaScript, and is hosted on 
[Netlify](https://moonlit-squirrel-0e8e3f.netlify.app/).

## Features

- **Add Income and Expense**: Easily add income and expense entries with details like type, name, and amount.
- **Edit & Delete Entries**: Edit or delete entries as needed, with a dynamic interface that updates totals in real time.
- **Filter Options**: Filter entries by income, expenses, or view all.
- **Persistent Data**: Data is stored in `localStorage` to retain entries and totals even after refreshing the page.
- **Dynamic Balance**: Shows updated total income, total expenses, and net balance at the top.
- **Responsive Design**: The layout is optimized for both desktop and mobile views.

## Tech Stack

- **HTML**
- **CSS**
- **JavaScript**

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/vaibhavapriya/Income-Expense-Calculator-Task.git
    cd Income-Expense-Calculator-Task
    ```

2. **Open the `index.html` file** in your browser to view the app locally.

3. **Deploy to Netlify**:
    - [Sign up for a Netlify account](https://www.netlify.com/) if you don’t have one.
    - Netlify will provide a unique URL to access your hosted site.

## How the Calculator Balance

1. **Adding Entries**:
    - Click the **Income** or **Expense** button to open the popup form.
    - Enter the **type**, **name**, and **amount** of the entry.
    - Click **Submit** to add the entry, updating the totals at the top.

2. **Editing and Deleting Entries**:
    - Each entry has **Edit** and **Delete** buttons.
    - Edit the entry to change details and update the balance accordingly.
    - Delete an entry to remove it, and the balance and totals will update automatically.

3. **Filtering Entries**:
    - Use the **radio buttons** at the top to filter entries:
        - **All**: View both income and expense entries.
        - **Income**: View only income entries.
        - **Expense**: View only expense entries.

4. **Data Persistence**:
    - All entries are stored in `localStorage`. This includes individual income and expense entries, as well as the balance, total income, and total expense.
    - Refreshing the page or closing the browser will not erase the data.

5. **Reset Button**:
    - A reset button clears all data and entries, resetting the balance to zero.


This project is open source and available under the MIT License.
