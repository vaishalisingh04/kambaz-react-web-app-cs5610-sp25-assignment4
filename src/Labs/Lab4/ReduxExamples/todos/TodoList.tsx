import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import "./TodoStyles.css";

export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);

    return (
        <div className="todo-container">
            <h1 className="todo-title">Todo List</h1>
            <TodoForm />
            <ul className="todo-list">
                {todos.map((todo: { id: string; title: string }) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}
