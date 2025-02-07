import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const ViewDetails = () => {

    const location = useLocation();
    const { project } = location.state || {};

    console.log(project);

    return (
        <div>
            abc
        </div>
    );
};

ViewDetails.propTypes = {
    project: PropTypes.object.isRequired,
};

export default ViewDetails;