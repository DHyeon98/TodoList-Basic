import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

interface FormDataType {
  name: string;
  text: string;
}

function App() {
  const [formData, setFormData] = useState<FormDataType[]>([]);
  const handleSubmit = (name: string, text: string) => {
    setFormData((prev) => [
      ...prev,
      {
        name,
        text,
      },
    ]);
  };
  const handleDelete = () => {
    console.log(Date.now());
  };
  return (
    <main>
      <h1>React만으로 TodoList 개발</h1>
      <Form handleSubmit={handleSubmit} />
      <ul>
        {formData.map(({ name, text }, index) => {
          return (
            <li key={index}>
              <div>{name}</div>
              <div>{text}</div>
              <ul>
                <li>
                  <button type="button">수정</button>
                  <button type="button" onClick={handleDelete}>
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
