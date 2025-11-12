import { useState, type FormEvent } from "react";
import type { TODO } from "../types/todo";

function NewToDo({ addTodo }: { addTodo: (todo: TODO) => void }) {
    const [task, setTask] = useState("");
    function handleSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        if (task.trim() === "") return;

        addTodo({
            id: crypto.randomUUID(),
            task,
            done: false,
            createdAt: Date.now(),
            updatedAt: null,
            updated: false,
        });
        setTask("");
    }

    return (
        <form className="new-todo-form" onSubmit={handleSubmit} autoComplete="off">
            <input
                className="todo-input"
                type="text"
                placeholder="Add a new task"
                value={task}
                maxLength={70}
                onChange={(evt) => setTask(evt.target.value)}
                aria-label="New to-do task"
            />
            <button className="todo-add-btn" type="submit" disabled={task.trim() === ""}>
                Add
            </button>
        </form>
    );
}
export default NewToDo;
