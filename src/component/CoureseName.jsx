import PropTypes from "prop-types";
const CoureseName = ({ courseName }) => {
  return (
    <li className=" text-[#1C1B1B99] text-sm">{courseName.course_name}</li>
  );
};
CoureseName.propTypes = {
  courseName: PropTypes.object,
};

export default CoureseName;
