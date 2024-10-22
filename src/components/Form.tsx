import { FormEvent, useRef } from "react";

interface FormType {
  handleSubmit: (name: string, text: string) => void;
}

export default function Form({ handleSubmit }: FormType) {
  const nameRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (nameRef.current && textRef.current)
      handleSubmit(nameRef.current.value, textRef.current.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input ref={nameRef} type="text" />
      <input ref={textRef} type="text" />
      <button type="submit">저장</button>
    </form>
  );
}
