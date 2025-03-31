import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        if (todo.id) {
            dispatch(updateTodo(todo));
        }
    };

    const handleAdd = () => {
        dispatch(addTodo(todo));
    };

    return (
        <div className="todo-form">
            <input
                className="todo-input"
                type="text"
                placeholder="Enter a todo"
                value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
            />
            <button
                className="update-btn"
                onClick={handleUpdate}
                disabled={!todo.id}
            >
                Update
            </button>
            <button
                className="add-btn"
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    );
}
