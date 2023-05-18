import { PropTypes } from "prop-types";
// import GifItem from "./GifItem";
import { GifItem } from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
import { LoadingPage } from "./LoadingPage";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3 className="subtitle">{category}</h3>
            <LoadingPage isLoading={isLoading} />
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
