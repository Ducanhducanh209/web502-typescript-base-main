import TodoItem from "./TodoItem";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

type TodoListProps = { 
    todos: Todo[];
     onDelete: (id: number) => void;
      onToggle: (id: number) => void;
     };

     function TodoList({ todos, onDelete, onToggle }: TodoListProps) {
         return ( 
         <div> 
            {todos.map((todo) => (
                 <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} /> ))}
                  </div> 
                  );
                   }

                   export default TodoList;