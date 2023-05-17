import { useState } from "react";
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const styles = {
        button: {
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
            border: "none",
            cursor: "pointer",
            marginLeft: "10px",
        },
        li: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "3vmin",
        },
    };

    const deleteCategory = (index) => {
        setCategories((categories) =>
            categories.filter((category, i) => i !== index)
        );
    };

    const editCategory = (index) => {
        setCategories((categories) => {
            const newCategories = [...categories];
            newCategories[index] = "Editado";
            return newCategories;
        });
    };

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    };

    return (
        <>
            <h1>Lista de tareas por ahora</h1>
            <hr />
            <AddCategory onNewCategory={onAddCategory} />
            <hr />
            {/* <button>Agregar</button> */}
            <ol>
                {categories.map((category, index) => (
                    <li key={category} style={styles.li}>
                        {category}
                        <div>
                            <button
                                style={styles.button}
                                onClick={() => deleteCategory(index)}
                            >
                                Eliminar
                            </button>
                            <button
                                style={styles.button}
                                onClick={() => editCategory(index)}
                            >
                                Editar
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
        </>
    );
};
