
import PropTypes from 'prop-types';
const CoureseName = ({ courseName, idx}) => {
   
    return (
        <div>
            <div className='px-4  text-[#1c1b1b] text-opacity-50 text-sm'>
                <p>{++idx}.  {courseName.course_name}</p>

              
            </div>
            
        </div>
    );
};
CoureseName.propTypes = {
    
    
    courseName: PropTypes.array
    
}

export default CoureseName;