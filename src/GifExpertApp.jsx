import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    // const styles = {
    //     button: {
    //         backgroundColor: "red",
    //         color: "white",
    //         borderRadius: "5px",
    //         padding: "5px",
    //         border: "none",
    //         cursor: "pointer",
    //         marginLeft: "10px",
    //     },
    //     li: {
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         margin: "3vmin",
    //     },
    // };

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
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
