

const Cart = () => {
    return (
        <div className='bg-white p-4 rounded-md w-1/4'>

            <div>
            <h4 className="font-bold text-[#2F80ED] py-2">Credit Hour Remaining 7 hr</h4>
            <hr />
            </div>

           

            <div>
                <h2 className=" font-bold text-lg py-2">Course Name</h2>
                <div className=" mt-6">

                <hr />
                </div>
            </div>

           <h4 className=" text-[#1c1b1b] text-opacity-80 font-semibold my-3">Total Credit Hour : 13</h4>

           <hr />

           <h4 className=" text-[#1c1b1b] text-opacity-80 font-semibold my-3">Total Price : 48000 USD</h4>
           <hr />
        </div>
    );
};

export default Cart;