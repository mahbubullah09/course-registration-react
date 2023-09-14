
import './App.css'
import Cart from './component/cart'
import Courses from './component/courses'

function App() {
 

  return (
    <>
      <div className=' max-w-6xl mx-auto  px-4'>
        <h2 className=' text-3xl text-center font-bold my-6'>Course Registration</h2>
     <div className='flex gap-4'>
     <Courses></Courses>
     <Cart></Cart>
     </div>
    





      </div>
    </>
  )
}

export default App
