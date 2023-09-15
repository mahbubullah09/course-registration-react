import { useEffect, useState } from "react";
import Course from "./Course";
import PropTypes from "prop-types";

const Courses = ({ handleAddCourseName }) => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div className="  grid grid-cols-1 min-[380px]:mx-10   md:grid-cols-2 md:mx-0 lg:grid-cols-3 gap-4 ">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleAddCourseName={handleAddCourseName}
        ></Course>
      ))}
    </div>
  );
};
Courses.propTypes = {
  handleAddCourseName: PropTypes.func,
  handleAddCredit: PropTypes.func,
};

export default Courses;
