import ToDoItem from "./ToDoItem";
import type { TODO } from "../types/todo";

interface Props {
    todos: TODO[];
    updateToDo: (todo: TODO) => void;
    deleteToDo: (id: string) => void;
}
function ToDoList({ todos, ...props }: Props) {
    if (todos.length === 0) {
        return (
            <div className="empty-todo-list">
                <div className="empty-content">
                    <span className="empty-icon" aria-label="No todos">🗒️</span>
                    <h2 className="empty-title">No todos yet!</h2>
                    <p className="empty-desc">Start by adding your first task above.</p>
                </div>
            </div>
        );
    }
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} {...props} />
            ))}
        </ul>
    );
}
export default ToDoList;
