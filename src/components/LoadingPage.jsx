import { PropTypes } from "prop-types";
export const LoadingPage = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <>
            <h3>Loading...</h3>
        </>
    );
};

LoadingPage.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};
