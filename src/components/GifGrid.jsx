import { PropTypes } from "prop-types";
import { useEffect } from "react";

export const GifGrid = ({ category }) => {
    const getGifs = [
        {
            id: "ABC",
            title: "Cualquier cosa",
        },
        {
            id: "DEF",
            title: "Cualquier cosa 2",
        },
    ];

    useEffect(() => {
        return () => {};
    }, []);

    return (
        <>
            <h3>{category}</h3>
            {getGifs.map((img) => (
                <li key={img.id}>{img.title}</li>
            ))}
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
