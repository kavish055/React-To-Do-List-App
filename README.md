# Modern ToDo List App

A clean, responsive, and user-friendly ToDo list application built with React and Vite. Organize your tasks, track progress, and stay productive with a beautiful and intuitive interface.

# links
 

[Source Code](https://github.com/kavish055/React-To-Do-List-App.git) | 
[Live Demo](https://to-do.ashar-kavish.info/)



## Features

- **Add & Manage Tasks** - Create new todos with ease and organize your daily work
- **Edit Tasks** - Update task descriptions inline with smooth editing
- **Mark Complete** - Track task progress by marking items as done
- **Delete Tasks** - Remove completed or unwanted tasks with confirmation
- **Filter View** - Show or hide completed tasks to focus on what matters
- **Time Tracking** - See when tasks were created, updated, or completed
- **Input Validation** - Real-time validation with helpful error messages
- **Smooth Animations** - Enjoy fluid transitions and polished interactions
- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop devices
- **Light/Dark Theme** - Switch between themes for comfortable viewing any time

## Tech Stack

- **React 19.1.1** - UI library
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe development
- **Lucide React** - Beautiful SVG icons
- **CSS3** - Modern styling with animations

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd todo-list

# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

The app will open at `http://localhost:5173`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## How to Use

1. **Add a Task** - Type your task in the input field and click "Add" or press Enter
2. **Complete a Task** - Click the circle icon to mark a task as complete
3. **Edit a Task** - Click the edit icon (pen) to modify the task description
4. **Delete a Task** - Click the delete icon (trash) to remove a task
5. **Filter Tasks** - Use the "Hide/Show Completed" button to filter your view
6. **Switch Theme** - Use the theme toggle in the header for light/dark mode

## Project Structure

\`\`\`
src/
├── components/
│   ├── Header.tsx       # App header with title
│   ├── Footer.tsx       # Footer with links
│   ├── NewToDo.tsx      # Input form for adding todos
│   ├── ToDoList.tsx     # List container
│   └── ToDoItem.tsx     # Individual todo item
├── types/
│   └── todo.ts          # TypeScript interfaces
├── App.tsx              # Main app component
├── index.css            # Global styles
└── main.tsx             # Entry point
\`\`\`

## Performance Features

- Fast development with Vite's HMR (Hot Module Replacement)
- Optimized production builds
- Responsive design with mobile-first approach
- Smooth CSS animations for better UX

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is open source and available for personal and educational use.
