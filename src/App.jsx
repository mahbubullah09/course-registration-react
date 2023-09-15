
import { useState } from 'react'
import './App.css'
import Cart from './component/cart'
import Courses from './component/courses'

function App() {

  const [courseName, setCourse] = useState([])
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
  const [remaingCredit, setRemainingCredit]= useState(20);
  

  const handleAddCourseName = (course) => {
    console.log(course.course_name, course.price, course.credit)
    const isExist = courseName.find((courseName) => courseName.id == course.id);

   
    if (!isExist) {
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
      
    
    else {

      alert('alreaddy added')
    }

    

  }
  console.log(price)
  console.log(credit)

 






  return (
    <>
      <div className=' max-w-6xl mx-auto  px-4'>
        <h2 className=' text-3xl text-center font-bold my-6'>Course Registration</h2>
        <div className='flex gap-4'>
          <Courses handleAddCourseName={handleAddCourseName} ></Courses>
          <Cart courseName={courseName} credit={credit} price={price} remaingCredit={remaingCredit} ></Cart>
        </div>






      </div>
    </>
  )
}

export default App
