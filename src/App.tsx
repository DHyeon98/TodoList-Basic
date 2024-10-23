import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

interface FormDataType {
  id: number;
  name: string;
  text: string;
}

function App() {
  const [formData, setFormData] = useState<FormDataType[]>([]);
  const handleSubmit = (name: string, text: string) => {
    if (!name || !text) return alert("빈칸을 채워주세요.");
    setFormData((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        text,
      },
    ]);
  };

  const handleDelete = (id: number) => {
    setFormData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdate = (id: number) => {
    const newName = prompt("변경할 이름");
    const newText = prompt("변경할 내용");
    setFormData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            name: newName || item.name,
            text: newText || item.text,
          };
        }
        return item;
      })
    );
  };
  return (
    <main>
      <h1>React만으로 TodoList 개발</h1>
      <Form handleSubmit={handleSubmit} />
      <ul>
        {formData.map(({ name, text, id }) => {
          return (
            <li key={id}>
              <div>{name}</div>
              <div>{text}</div>
              <ul>
                <li>
                  <button type="button" onClick={() => handleUpdate(id)}>
                    수정
                  </button>
                  <button type="button" onClick={() => handleDelete(id)}>
                    삭제
                  </button>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
