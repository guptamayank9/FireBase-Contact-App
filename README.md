# 📱 Firebase Contact App

A simple and responsive **Contact Management Application** built using **React, Firebase, and Tailwind CSS**.

This app allows users to **add, update, delete, and manage contacts** with real-time database support using Firebase Firestore.

---

## 🚀 Features

* ➕ Add new contacts
* ✏️ Update existing contacts
* ❌ Delete contacts
* 🔍 Search contacts (optional enhancement)
* ⚡ Real-time UI updates without refresh
* 📦 Toast notifications for actions
* 📱 Responsive UI (mobile + desktop)

---

## 🛠️ Tech Stack

* **React.js** – Frontend library
* **Firebase Firestore** – Database
* **Tailwind CSS** – Styling
* **Formik** – Form handling
* **React Toastify** – Notifications
* **React Icons** – Icons

---

## 📂 Project Structure

```
src/
│── Components/
│   ├── Navbar.jsx
│   ├── Contact.jsx
│   ├── Modal.jsx
│   ├── AddAndUpdate.jsx
│
│── config/
│   └── firebase.js
│
│── hooks/
│   └── useDisclose.jsx
│
│── App.jsx
│── main.jsx
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/guptamayank9/FireBase-Contact-App.git
cd FireBase-Contact-App
```

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup Firebase

* Go to Firebase Console
* Create a new project
* Enable **Firestore Database**

Create a file:

```
src/config/firebase.js
```

Add your config:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

### 4. Run the project

```bash
npm run dev
```

---

## 📸 How it works

* Click ➕ icon → open modal
* Add contact → saved in Firebase
* Edit icon → update contact
* Delete icon → remove contact instantly
* Toast shows success message

---


## 🤝 Contributing

Feel free to fork this repo and improve it.
Pull requests are always welcome!

---

## 📧 Contact

If you have any questions, feel free to reach out.

---

⭐ If you like this project, don’t forget to star the repo!
