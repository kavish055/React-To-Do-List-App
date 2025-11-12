import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import type { TODO } from "./types/todo";

function App() {
    const [todos, setTodos] = useState<TODO[]>([]);
    const [hideCompleted, setHideCompleted] = useState(false);

    function addTodo(todo: TODO) {
        setTodos([todo, ...todos]);
    }

    function updateToDo(todo: TODO) {
        setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
    }

    function deleteToDo(id: string) {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    }

    const filtered = todos.filter((t) => !t.done);

    return (
        <div id="app" className="app-container">
            <Header />
            <main className="main-content">
                <section className="todo-input-section">
                    <NewToDo addTodo={addTodo} />
                </section>

                {todos.length > 0 && (
                    <section className="todo-stat-bar">
                        <p className="todo-remaining">
                            <span className="todo-count">{filtered.length}</span>
                            <span className="todo-separator"> / </span>
                            <span className="todo-total">{todos.length}</span>
                            <span className="todo-label"> tasks left</span>
                        </p>
                        <button
                            className={`btn-toggle-completed ${hideCompleted ? "active" : ""}`}
                            onClick={() => setHideCompleted(!hideCompleted)}
                        >
                            {hideCompleted ? "Show Completed" : "Hide Completed"}
                        </button>
                    </section>
                )}

                <section className="todo-list-section">
                    <ToDoList
                        todos={hideCompleted ? filtered : todos}
                        updateToDo={updateToDo}
                        deleteToDo={deleteToDo}
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
