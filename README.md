# 📝 To-Do List Application with Quote Generator 🌟

## Project Description
The To-Do List Application is a simple and interactive web application built using React, TypeScript, Vite, and Bootstrap. This project provides a minimal setup to get React working efficiently with Vite, including Hot Module Replacement (HMR) for a smooth development experience. The application allows users to manage their tasks by adding, deleting, and marking tasks as completed. Additionally, the application features a quote generator that uses APIs to fetch and display random quotes, adding a motivational touch to the user experience.

## Features ✨
- **Add Task** ➕: Users can add new tasks to their to-do list.
- **Delete Task** ❌: Users can remove tasks from their to-do list.
- **Mark Task as Completed** ✅: Users can mark tasks as completed to keep track of their progress.
- **Real-Time Updates** 🔄: The application provides real-time updates to the UI without requiring a page reload, thanks to Vite's HMR.
- **TypeScript Support** 💻: The application is written in TypeScript, providing type safety and better development experience.
- **Bootstrap Integration** 🎨: The front end is styled using Bootstrap for responsive and modern design.
- **Linting** 🧹: ESLint is configured to ensure code quality and consistency.
- **Quote Generator** 💬: Fetches and displays random quotes using APIs to provide motivational quotes to users.

## Project Structure 📂
- `.eslintrc.cjs`: Configuration file for ESLint to enforce coding standards.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `index.html`: Main HTML file that serves the React application.
- `node_modules`: Directory containing all the installed Node.js dependencies.
- `package-lock.json`: Automatically generated file that describes the exact dependency tree.
- `package.json`: Contains project metadata, scripts, and list of dependencies.
- `public`: Directory for static assets like images and icons.
- `README.md`: Documentation file with information about the project.
- `src`: Directory containing the source code of the application.
  - `main.tsx`: Entry point of the React application.
  - `App.tsx`: Main component of the application.
  - `components`: Directory containing React components.
  - `styles`: Directory containing styling files.
- `tsconfig.app.json`: TypeScript configuration specific to the application.
- `tsconfig.json`: Base TypeScript configuration file.
- `tsconfig.node.json`: TypeScript configuration for Node.js.
- `vite.config.ts`: Configuration file for Vite, specifying how the project should be built and served.

## Installation and Setup 🛠️
1. **Clone the Repository**:
    ```sh
    git clone <repository-url>
    cd to-do
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Run the Development Server**:
    ```sh
    npm run dev
    ```

4. **Build for Production**:
    ```sh
    npm run build
    ```

5. **Preview the Production Build**:
    ```sh
    npm run serve
    ```

## Usage 🚀
- **Add a Task** ➕: Enter a task in the input field and press the "Add" button.
- **Delete a Task** ❌: Click the delete button next to the task you want to remove.
- **Mark as Completed** ✅: Click on the task to mark it as completed.
- **View a Random Quote** 💬: A random motivational quote is displayed on the main screen, fetched using an external API.
