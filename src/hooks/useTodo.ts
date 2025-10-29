import React from "react";

export const useTodo = () => {
  const [todoText, setTodoText] = React.useState("");
  const [todoList, setTodoList] = React.useState<Array<string>>([]);
  const [isValidTodoText, setIsValidTodoText] = React.useState(true);
  const [isDuplicateTodoText, setIsDuplicateTodoText] = React.useState(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // console.log("Enter pressed:", e.target.value);
      const value = e.target.value.trim();
      console.log("Submitted todo:", value);
      if (value === "") {
        setIsValidTodoText(false);
        return;
      }

      setTodoList([...todoList, value]);
      setTodoText("");
      // You can call your search or submit function here
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log("Typing:", e.target.value);
    const value = e.target.value.trim();
    if (value !== "") {
      setIsValidTodoText(true);
    }
    if (todoList.includes(value)) {
      setIsDuplicateTodoText(true);
    } else {
      setIsDuplicateTodoText(false);
    }
    setTodoText(value);
  };
  return {
    todoList,
    handleKeyPress,
    todoText,
    handleChange,
    isValidTodoText,
    isDuplicateTodoText,
  };
};
