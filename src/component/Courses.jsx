import { useEffect, useState } from "react";
import Course from "./Course";


const Courses = () => {

    const [courses, setCourse] = useState([])

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourse(data))

    }, [])




    return (
        <div className=" w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
           

           

            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
           

        </div>
    );
};

export default Courses;