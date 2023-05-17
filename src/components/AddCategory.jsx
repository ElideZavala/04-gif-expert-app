import { useRef, useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [InputValue, setInputValue] = useState("");
    const inputCategory = {
        type: "text",
        placeholder: "Ingrese una categoría",
    };

    const onInputChange = (e) => {
        e.preventDefault();
        if (InputValue.trim().length <= 2) return;
        const newCategory = InputValue.trim();
        onNewCategory(newCategory);
        setInputValue("");
    };

    return (
        <form onSubmit={onInputChange}>
            <input
                type={inputCategory.type}
                placeholder={inputCategory.placeholder}
                value={InputValue}
                onChange={(e) => setInputValue(e.target.value)}
            ></input>
        </form>
    );
};

export default AddCategory;
