import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(setImages);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            {images.map(({ id, url, title }) => (
                <div key={id}>
                    <li>{title}</li>
                    <img src={url} alt={title} />
                </div>
            ))}
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
