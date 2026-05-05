📝 Actodo - Vibrant Activity Manager
A colorful, interactive React application designed to help users manage their daily tasks. Featuring a striking, vibrant user interface, secure local authentication, and real-time dashboard elements, Actodo makes staying organized visually exciting.

✨ Features
Secure Authentication: User signup and login system with strict regex validation for strong passwords and valid usernames.

Dynamic Dashboard: A visually engaging landing page featuring a bright, "cyberpunk/tropical" color palette.

Real-Time Analog Clock: A custom-built, ticking analog clock component utilizing JavaScript date objects and dynamic CSS transforms.

Task Management: Fully functional Todo list. Users can add new activities (with empty-input protection) and delete completed tasks.

Custom Typography: Integrated with Google Fonts to use eye-catching Slab Serif typography (like Alfa Slab One/Roboto Slab) for headers and cards.

Seamless Navigation: Built with React Router for smooth, single-page application (SPA) transitions between the Login, Signup, and Todo dashboard pages.

🛠️ Tech Stack
Frontend Framework: React (initialized via Vite)

Styling: Tailwind CSS

Routing: React Router DOM

State Management: React useState and useEffect hooks

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You will need Node.js and npm (Node Package Manager) installed on your system.

Download Node.js

Installation
Clone the repository (or download the source code):

Bash
git clone https://github.com/your-username/actodo.git
cd actodo
Install the dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open the app:
Click the local server link provided in your terminal (usually http://localhost:5173) to view it in your browser.

💡 How to Use
Sign Up: Start by creating an account. Your username must be 3-15 characters (letters/numbers only) and your password must be at least 8 characters containing a mix of letters and numbers.

Log In: Use your newly created credentials to access the dashboard.

Manage Activities: Type a task into the input box and click "ADD" (or press Enter). If the input is empty, the button is disabled to prevent blank tasks.

Delete Tasks: Click the red "DEL" button next to any task to remove it from your list.

🎨 UI/UX Design
This project utilizes Tailwind CSS utility classes to create a responsive, modern design. The dashboard cards use a highly vibrant color palette (#FF0055, #00F0FF, #FAFF00) to create an energetic user experience, grounded by dark/slate background themes on the authentication pages.

Built with ❤️ using React & Tailwind CSS.