/**
 * Basic imports
 */
import React from "react";
import { Todo } from "../../interfaces/todo";
import "./styles.css";
/**
 * Drag n Drop imports
 */
import { Droppable } from "react-beautiful-dnd";
/**
 * Component imports
 */
import SingleTodo from "../SingleTodo/SingleTodo";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos, setTodos, completedTodos, setCompletedTodos } = props;
  return (
    <div className="container">
      <Droppable droppableId="TodoList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "drag-active" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos-heading">Active Tasks</span>
            {todos.map((todo, index) => {
              return (
                <SingleTodo
                  index={index}
                  todo={todo}
                  todos={todos}
                  key={todo.id}
                  setTodos={setTodos}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="CompletedList">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${
              snapshot.isDraggingOver ? "drag-completed" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos-heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => {
              return (
                <SingleTodo
                  index={index}
                  todo={todo}
                  todos={completedTodos}
                  key={todo.id}
                  setTodos={setCompletedTodos}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
