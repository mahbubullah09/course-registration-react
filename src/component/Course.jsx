
import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen} from 'react-icons/fa';
const Course = (course) => {

    const { course_name,course_img,course_description,price,credit}= course.course;
    
   
    return (
        <div className='bg-white p-4 rounded-md'>
            <img src={course_img} alt="" />
            <h4 className=' my-2 text-lg font-semibold  md:h-12'>{course_name}</h4>
            <p className=' text-[#1c1b1b] text-opacity-60  text-sm md:h-20'>{course_description}</p>
            <div className='flex justify-between my-2'>
                <h5 className='flex items-center gap-1'><FaDollarSign></FaDollarSign> <span className='text-[#1c1b1b] text-opacity-60 text-base font-medium'>Price: {price}</span></h5>
                <h5 className='flex items-center gap-1'><FaBookOpen></FaBookOpen> <span className='text-[#1c1b1b] text-opacity-60 text-base font-medium'>Credit: {credit}hr</span></h5>

            </div>
          <div className='text-center  bottom-0  '>
          <button className=' mt-2 bg-[#2F80ED] min-w-full  rounded-lg  text-[#FFF] text-lg font-semibold py-2    '>Select</button>
          </div>

            
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object
    
}

export default Course;