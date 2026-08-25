# Masseging-app
# 💬 React Messaging App

A modern, responsive, and fully functional messaging application built with React.js. Features WhatsApp-like interface, local storage persistence, auto-reply simulation, and smooth animations.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the App](#-running-the-app)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Usage Guide](#-usage-guide)
- [Building for Production](#-building-for-production)
- [Troubleshooting](#-troubleshooting)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 💬 **Real-time Chat UI** - Clean and modern WhatsApp/Telegram-like interface
- 🔍 **Search Contacts** - Quickly find contacts by name
- 🟢 **Online/Offline Status** - Live status indicators for each contact
- 💾 **Local Storage Persistence** - Messages persist after browser refresh
- 🤖 **Auto-Reply Simulation** - Automatic replies after 1.5 seconds
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Modern UI** - Beautiful gradients and smooth animations
- ⚡ **Fast Performance** - Optimized React components with Context API

---

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18.2.0
- **Styling**: Pure CSS3 (No external UI libraries)
- **State Management**: React Context API
- **Data Persistence**: Browser LocalStorage
- **Build Tool**: Create React App (CRA)
- **Package Manager**: npm

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

### Required Software

1. **Node.js** (Version 14.0.0 or higher)
   - Download from: https://nodejs.org/
   - Verify installation:
```bash
     node --version
```

2. **npm** (Version 6.0.0 or higher)
   - Comes bundled with Node.js
   - Verify installation:
```bash
     npm --version
```

3. **Code Editor** (Recommended: VS Code)
   - Download from: https://code.visualstudio.com/

4. **Modern Web Browser**
   - Chrome, Firefox, Safari, or Edge (latest version)

---

## 🚀 Installation

Follow these steps to set up the project on your local machine:

### Step 1: Create a New React Project

Open your terminal or command prompt and run:

```bash
npx create-react-app messaging-app
```

This command will:
- Create a new folder named `messaging-app`
- Install React and all necessary dependencies
- Set up the development environment

### Step 2: Navigate to Project Directory

```bash
cd messaging-app
```

### Step 3: Create Folder Structure

Create the following folders and files inside the `src` directory:

```bash
# Create folders
mkdir src/components
mkdir src/context
mkdir src/data
mkdir src/hooks

# Create files (Windows)
type nul > src/components/Sidebar.jsx
type nul > src/components/ChatArea.jsx
type nul > src/components/MessageInput.jsx
type nul > src/components/MessageBubble.jsx
type nul > src/components/ContactItem.jsx
type nul > src/components/Header.jsx
type nul > src/context/ChatContext.jsx
type nul > src/data/mockData.js
type nul > src/hooks/useLocalStorage.js

# Create files (Mac/Linux)
touch src/components/Sidebar.jsx
touch src/components/ChatArea.jsx
touch src/components/MessageInput.jsx
touch src/components/MessageBubble.jsx
touch src/components/ContactItem.jsx
touch src/components/Header.jsx
touch src/context/ChatContext.jsx
touch src/data/mockData.js
touch src/hooks/useLocalStorage.js
```

### Step 4: Copy Code Files

Copy the code for each file from the project documentation into their respective files:

- `src/components/Sidebar.jsx`
- `src/components/ChatArea.jsx`
- `src/components/MessageInput.jsx`
- `src/components/MessageBubble.jsx`
- `src/components/ContactItem.jsx`
- `src/components/Header.jsx`
- `src/context/ChatContext.jsx`
- `src/data/mockData.js`
- `src/hooks/useLocalStorage.js`
- `src/App.jsx`
- `src/App.css`
- `src/index.css`

### Step 5: Install Dependencies (if needed)

```bash
npm install
```

This ensures all dependencies are properly installed.

---

## ▶️ Running the App

### Development Mode

To start the development server:

```bash
npm start
```

**What happens:**
- Runs the app in development mode
- Opens http://localhost:3000 in your default browser
- The page will reload if you make edits
- You will see any lint errors in the console

**Expected Output:**
