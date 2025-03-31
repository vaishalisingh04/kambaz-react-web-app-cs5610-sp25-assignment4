import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({
                                     todo,
                                 }: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();

    return (
        <li className="todo-item">
            <span className="todo-text">{todo.title}</span>
            <div className="todo-actions">
                <button
                    className="edit-btn"
                    onClick={() => dispatch(setTodo(todo))}
                >
                    Edit
                </button>
                <button
                    className="delete-btn"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
