import { PropTypes } from "prop-types";
const LoadingPage = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <>
            <h3>Loading...</h3>
        </>
    );
};

export default LoadingPage;

LoadingPage.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};
