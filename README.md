# User Management System

A user management system built with next js, TypeScript, and Tailwind CSS

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Debugging Report](#debugging-report)

---

## Installation

To get started, clone the repository and install the required dependencies:

```bash
git clone <repository-url>
cd user-management-system
npm install
```

## usage

```bash
npm run dev
```

## features

- User Creation: Add new users with customizable attributes like username, status, and role.
- User Update: Edit existing user details, including names, status, and roles.
- Dynamic Layout: Responsive design with Tailwind CSS, hiding the sidebar on screens smaller than 791px.
- State Management: Local state management with React Hooks.
- Data Persistence: Persists user data in local storage for offline access.

## project-structure

- components/: Reusable React components, including Sidebar, Navbar, and user input forms.
- pages/: Main app pages for user management.
- hooks/: Custom React hooks for specific logic, such as handling user state.
- utils/: Utility functions for handling data transformations and validations.

## configuration

- Dependencies: Key dependencies include react-toastify for notifications, react-icons for icons, and styled-jsx for styling.

## debugging-report

1. ERESOLVE Dependency Conflict Error

```bash
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error While resolving: react-toastify@10.0.6
npm error Found: react@19.0.0-rc-02c0e824-20241028
```

2. SyntaxError: [object Object] is not valid JSON

```bash
SyntaxError: "[object Object]" is not valid JSON
```

- solution

```bash
 localStorage.setItem("Users", JSON.stringify(newUsers));
const parsedUsers = JSON.parse(localStorage.getItem("Users"));
```

3. Default Radio Button Selection Issue
   Issue: Radio buttons did not reflect the initial state of active status in user data.

- solution

```bash
    <input
    type="radio"
    name="status"
    value="active"
    checked={state === "active"}
    onChange={(e) => setState(e.target.value)}
    />
```
