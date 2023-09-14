
import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen} from 'react-icons/fa';
const Course = (course) => {

    const {id, course_name,course_img,course_description,price,credit}= course.course;
    
   
    return (
        <div className='bg-white p-4 rounded-md'>
            <img src={course_img} alt="" />
            <h4>{course_name}</h4>
            <p>{course_description}</p>
            <div className='flex justify-between'>
                <h5 className='flex items-center gap-1'><FaDollarSign></FaDollarSign> Price : {price}</h5>
                <h5 className='flex items-center gap-1'><FaBookOpen></FaBookOpen> Credit : {credit}hr</h5>

            </div>
            <button>Select</button>

            
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object
    
}

export default Course;