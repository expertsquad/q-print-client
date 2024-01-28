const OrderDetailsCard = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="[font-size:_clamp(1em,4vw,1.3em)] text-center my-5">
        Order Details
      </h2>
      {/* order code and total */}
      <div className="border p-5 md:p-10 lg:p-10 rounded-lg flex flex-col gap-5">
        <div className="text-base flex items-center justify-between ">
          <p className="text-gray-500">Order code:</p>{" "}
          <p className="text-gray-800">#0123_45678</p>
        </div>
        <div className="text-base flex items-center justify-between ">
          <p className="text-gray-500">Date:</p>{" "}
          <p className="text-gray-800">October 19, 2023</p>
        </div>
        <div className="text-base flex items-center justify-between ">
          <p className="text-gray-500">Total:</p>{" "}
          <p className="text-gray-800">1,345.00 QAR</p>
        </div>
        <div className="text-base flex items-center justify-between ">
          <p className="text-gray-500">Payment method:</p>{" "}
          <p className="text-gray-800">Credit Card</p>
        </div>
      </div>
      {/* product and product total */}

      <div className="flex flex-col border p-5 md:p-10 lg:p-10 rounded-lg">
        {/* product */}
        <div className="flex justify-between items-center pb-3 border-b">
          <div>
            <p className="text-base">Request a printing</p>
            <p className="text-base">1 X 1500 QAR</p>
          </div>
          <div className="main-text-color font-bold text-xl">1500 QAR</div>
        </div>

        {/* sub total and quantity  */}
        <div className="mt-7">
          <div className="text-base flex items-center justify-between pb-5">
            <p className="text-gray-500">Sub Total</p>{" "}
            <p className="text-gray-800">1480 QAR</p>
          </div>
          <div className="text-base flex items-center justify-between  pb-5 border-b">
            <p className="text-gray-500">Shipping</p>{" "}
            <p className="text-gray-800">20 QAR</p>
          </div>
        </div>

        {/* grand total */}
        <div className="mt-5 flex justify-between items-center">
          <p>Total</p>
          <div className=" font-bold text-xl">1500 QAR</div>
        </div>
      </div>
      {/* contact shipping paymet */}
      <div className="border p-5 md:p-10 lg:p-10 rounded-lg flex flex-col gap-5">
        <div className="text-base flex items-center justify-start pb-5 gap-5 border-b ">
          <p className="text-gray-500">Contact</p>{" "}
          <p className="text-gray-800">akrc.upwork@gmail.com</p>
        </div>
        <div className="text-base flex items-center justify-start pb-5 gap-5  border-b ">
          <p className="text-gray-500">Address</p>{" "}
          <p className="text-gray-800">
            Noakhali Chaprashirhat Road No. 13/x, House no. 1320/C, Flat No. 5D
          </p>
        </div>
        <div className="text-base flex items-center justify-start gap-5 ">
          <p className="text-gray-500">Payment</p>{" "}
          <p className="text-gray-800">Cash on Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
