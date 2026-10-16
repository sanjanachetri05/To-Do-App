# 📝 Interactive To-Do List

A dynamic task management application built with Vanilla JavaScript. This project focuses on the "Create" and "Delete" aspects of CRUD operations, providing a seamless user interface for daily task tracking.

## 🚀 Live Demo


## ✨ Key Features
- **Task Creation:** Add tasks instantly via the "Add" button or by pressing the `Enter` key.
- **Task Deletion:** Remove specific tasks from the DOM with a single click.
- **Completion Toggle:** Click on any task text to visually mark it as completed (strike-through effect).
- **Input Validation:** Prevents the addition of empty tasks using string trimming and alerts.
- **Responsive UI:** A clean, mobile-friendly design using CSS Flexbox.

## 🛠️ Technical Implementation
- **DOM Manipulation:** Uses `document.createElement()` and `.appendChild()` to update the UI without reloading the page.
- **Event Listeners:** Implements functional programming patterns to handle user interactions.
- **CSS Transitions:** Smooth hover effects and state changes for a better user experience (UX).

## 📂 Project Structure
```text
To-Do-List/
│
├── index.html    # Structure and UI elements
├── style.css     # Clean, modern layout and task states
└── script.js     # Logic for adding, toggling, and removing tasks
