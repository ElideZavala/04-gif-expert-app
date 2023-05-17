import { PropTypes } from "prop-types";

const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} title={title} />
            <p>{title}</p>
        </div>
    );
};

export default GifItem;

GifItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
