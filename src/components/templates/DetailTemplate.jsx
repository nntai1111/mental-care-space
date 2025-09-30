import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // ví dụ bạn dùng lucide-react
import IconButton from "../atoms/IconButton";

const DetailTemplate = ({ detailSection }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white p-4 font-sans">
            <div className="flex justify-between items-center mb-4">
                <IconButton
                    icon={ArrowLeft}
                    variant="ghost"
                    size="md"
                    onClick={() => navigate("/challenge")}
                    title="Back"
                />
                <h1 className="text-2xl font-bold text-gray-800">Challenge Details</h1>
                <div className="w-6" />
            </div>
            {detailSection}
        </div>
    );
};

DetailTemplate.propTypes = {
    detailSection: PropTypes.node.isRequired,
};

export default DetailTemplate;
