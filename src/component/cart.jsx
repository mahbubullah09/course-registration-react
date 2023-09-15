import CoureseName from "./CoureseName";
import PropTypes from "prop-types";

const Cart = ({ courseName, credit, price, remaingCredit }) => {
  return (
    <div className="bg-white p-4 rounded-md w-1/4">
      <div>
        <h4 className="font-bold text-[#2F80ED] py-2">
          Credit Hour Remaining {remaingCredit} hr
        </h4>
        <hr />
      </div>

      <div>
        <h2 className=" font-bold text-lg py-2">Course Name</h2>
        <div className=" mt-6  list-decimal">
          {courseName.map((courseName, idx) => (
            <CoureseName
              key={idx}
              courseName={courseName}
              idx={idx}
            ></CoureseName>
          ))}

          <hr />
        </div>
      </div>

      <h4 className=" text-[#1c1b1b] text-opacity-80 font-semibold my-3">
        Total Credit Hour : {credit}
      </h4>

      <hr />

      <h4 className=" text-[#1c1b1b] text-opacity-80 font-semibold my-3">
        Total Price : {price} USD
      </h4>
      <hr />
    </div>
  );
};
Cart.propTypes = {
  courseName: PropTypes.array,
  credit: PropTypes.number,
  price: PropTypes.number,
  remaingCredit: PropTypes.number,
};

export default Cart;
