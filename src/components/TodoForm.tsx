
import { useState } from "react";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim() === "") return;

    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
        className="border border-black px-2 py-1"
      />

      <button
        type="submit"
        className="border border-black px-3 py-1 ml-2"
      >
        Thêm
      </button>
    </form>
  );
}

export default TodoForm;

