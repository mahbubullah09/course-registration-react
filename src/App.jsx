
import { useState } from 'react'
import './App.css'
import Cart from './component/cart'
import Courses from './component/courses'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courseName, setCourse] = useState([])
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
  const [remaingCredit, setRemainingCredit]= useState(20);
  
  const handleAddCourseName = (course) => {
    const isExist = courseName.find((courseName) => courseName.id == course.id);
    if(isExist){
      return toast.warn('Course is already added')
    }
    
    if((course.credit + credit) >20){
      return toast.info(`You have only ${remaingCredit} credit hour remaing to take`)   
    }
      const newCourse = [...courseName, course];
      setCourse(newCourse)
      const newCredit= credit+course.credit;
      setCredit(newCredit)
      const newPrice= price + course.price
      setPrice(newPrice)
      console.log(courseName.price)

      const newRemainingCredit= 20 - newCredit;
      setRemainingCredit(newRemainingCredit);
  }
  return (
    <>
      <div className=' max-w-6xl mx-auto  px-4'>
        <h2 className=' text-3xl text-center font-bold my-6'>Course Registration</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10'>
          <div className=' md:col-span-2 lg:col-span-3'>
          <Courses handleAddCourseName={handleAddCourseName} ></Courses>
          </div>
          <div >
          <Cart courseName={courseName} credit={credit} price={price} remaingCredit={remaingCredit} ></Cart>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
