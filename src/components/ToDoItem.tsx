import { useEffect, useRef, useState } from "react";
import type { TODO } from "../types/todo";
import { Check, Circle, CircleCheck, Pen, Trash, X } from "lucide-react";

interface Props {
    todo: TODO;
    updateToDo: (todo: TODO) => void;
    deleteToDo: (id: string) => void;
}

function ToDoItem({ todo, updateToDo, deleteToDo }: Props) {
    const [editMode, setEditMode] = useState(false);
    const [task, setTask] = useState(todo.task);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (editMode && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editMode]);

    const timePrefix = todo.done
        ? "Completed"
        : todo.updated
        ? "Updated"
        : "Created";

    function handleEdit() {
        if (task.trim() === "") return;
        setEditMode(false);
        updateToDo({
            ...todo,
            task,
            updated: true,
            updatedAt: Date.now(),
        });
    }

    return (
        <li className={`todo-item${todo.done ? " todo-done" : ""}${editMode ? " editing" : ""}`}>
            <div className="todo-row">
                <button
                    className="todo-status-btn"
                    title={todo.done ? "Mark as incomplete" : "Mark as complete"}
                    onClick={() =>
                        updateToDo({
                            ...todo,
                            done: !todo.done,
                            updated: true,
                            updatedAt: Date.now(),
                        })
                    }
                >
                    {todo.done ? <CircleCheck /> : <Circle />}
                </button>
                <div className="todo-content">
                    {editMode ? (
                        <input
                            className="todo-edit-input"
                            type="text"
                            value={task}
                            ref={inputRef}
                            maxLength={70}
                            onChange={(evt) => setTask(evt.target.value)}
                            onKeyDown={(evt) => {
                                if (evt.key === "Enter") handleEdit();
                            }}
                        />
                    ) : (
                        <span className="todo-task">{task}</span>
                    )}
                </div>
                <div className="todo-actions">
                    {editMode ? (
                        <>
                            <button
                                className="todo-action-btn"
                                title="Cancel edit"
                                onClick={() => {
                                    setEditMode(false);
                                    setTask(todo.task);
                                }}
                            >
                                <X />
                            </button>
                            <button
                                className="todo-action-btn"
                                title="Save changes"
                                onClick={handleEdit}
                                disabled={task === todo.task}
                            >
                                <Check />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="todo-action-btn"
                                title="Edit todo"
                                onClick={() => setEditMode(true)}
                            >
                                <Pen />
                            </button>
                            <button
                                className="todo-action-btn"
                                title="Delete todo"
                                onClick={() => deleteToDo(todo.id)}
                            >
                                <Trash />
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className="todo-meta">
                <span className="todo-time">{`${timePrefix} ${calculateTime(todo.updatedAt ?? todo.createdAt)}`}</span>
            </div>
        </li>
    );
}

function calculateTime(time: number) {
    const milliseconds = Date.now() - time;
    let timeValue: number;
    if (milliseconds > 24 * 60 * 60 * 1000) {
        timeValue = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
        return timeValue < 2 ? `${timeValue} day ago` : `${timeValue} days ago`;
    } else if (milliseconds > 60 * 60 * 1000) {
        timeValue = Math.floor(milliseconds / (60 * 60 * 1000));
        return timeValue < 2 ? `${timeValue} hour ago` : `${timeValue} hours ago`;
    } else if (milliseconds > 60 * 1000) {
        timeValue = Math.floor(milliseconds / (60 * 1000));
        return timeValue < 2 ? `${timeValue} minute ago` : `${timeValue} minutes ago`;
    } else {
        timeValue = Math.floor(milliseconds / 1000);
        return timeValue < 1
            ? "just now"
            : timeValue < 2
            ? "a second ago"
            : `${timeValue} seconds ago`;
    }
}

export default ToDoItem;
