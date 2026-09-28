
type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <span
        className={todo.completed ? "line-through text-gray-500" : ""}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="border border-black px-2 py-1"
      >
        Xóa
      </button>
    </div>
  );
}

export default TodoItem;
