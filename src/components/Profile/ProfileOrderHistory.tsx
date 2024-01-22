import Image from "next/image";
import React from "react";

const ProfileOrderHistory = () => {
  const orderHistory = [
    {
      orderId: "JHGUYT1258KJh",
      date: "Dec 2, 2023 ",
      orderStatus: "Order Placed",
      grandTotal: 1865,
      product: [
        {
          id: "JHGUYT1258KJh54544",
          productName:
            "Brother HL-L3270CDW Single Function Color Laser Printer",
          brand: "LG",
          price: 85,
          quantity: 5,
          totalPrice: 250,
        },
        {
          id: "JHGUYT1258KJhghdg4544",
          productName:
            "Brother HL-L3270CDW Single Function Color Laser Printer",
          brand: "Samsung",
          price: 55,
          quantity: 5,
          totalPrice: 485,
        },
        {
          id: "JHGUYfdsrtT1258KJh54544",
          productName:
            "Brother HL-L3270CDW Single Function Color Laser Printer",
          brand: "Acer",
          price: 89,
          quantity: 6,
          totalPrice: 856,
        },
      ],
    },
    {
      orderId: "JHGUYT12585458KJh",
      date: "Dec 6, 2023 ",
      orderStatus: "Packaging",
      grandTotal: 1865,
      product: [
        {
          id: "JHGUYT1258sfgsfd544",
          productName:
            "Brother HL-L3270CDW Single Function Color Laser Printer",
          brand: "LG",
          price: 85,
          quantity: 5,
          totalPrice: 250,
        },
        {
          id: "JHGUYT1sfgsdfgJhghdg4544",
          productName:
            "Brother HL-L3270CDW Single Function Color Laser Printer",
          brand: "Samsung",
          price: 55,
          quantity: 6,
          totalPrice: 485,
        },
        {
          id: "JHGUYfdsrtsdfgsdf8KJh54544",
          productName:
            "Brother HL-L3270CDW Single Function Color Laser Printer",
          brand: "Acer",
          price: 89,
          quantity: 2,
          totalPrice: 856,
        },
      ],
    },
    {
      orderId: "JHGUYT1gsfg8KJh",
      date: "Dec 2, 2023 ",
      orderStatus: "Shipped",
      grandTotal: 1865,
      product: [
        {
          id: "JHGUYT12adfasdfKJh54544",
          productName:
            "Brother HL-L3270CDW Single Function Color Laser Printer",
          brand: "LG",
          price: 85,
          quantity: 6,
          totalPrice: 2580,
        },
        {
          id: "JHGUYT12rtwertewJhghdg4544",
          productName:
            "Brother HL-L3270CDW Single Function Color Laser Printer",
          brand: "Samsung",
          price: 55,
          quantity: 4,
          totalPrice: 4895,
        },
        {
          id: "JHGUYswrtwertT1258KJh54544",
          productName:
            "Brother HL-L3270CDW Single Function Color Laser Printer",
          brand: "Acer",
          price: 882,
          quantity: 9,
          totalPrice: 8568,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col  gap-5">
        {orderHistory?.map((orderHistory) => (
          <div key={orderHistory?.orderId} className="border p-7 rounded-lg   ">
            <div className="flex items-center justify-between border-b  pb-5">
              <div className="">
                <h4 className="font-bold">Order Id: {orderHistory?.orderId}</h4>
                <small className="text-gray-500">{orderHistory?.date}</small>
              </div>
              <div
                className={`${
                  orderHistory?.orderStatus === "Order Placed"
                    ? "text-black py-1 px-4 bg-gray-100 rounded-3xl"
                    : orderHistory?.orderStatus === "Packaging"
                    ? "text-[#FA8232] py-1 px-4 bg-orange-50 rounded-3xl"
                    : orderHistory?.orderStatus === "Shipped"
                    ? "text-[#5A8BF2] py-1 px-4 bg-blue-50 rounded-3xl"
                    : ""
                }`}
              >
                {orderHistory?.orderStatus}
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-4">
              {orderHistory?.product?.map((product) => (
                <div
                  key={product?.id}
                  className="flex items-center justify-between "
                >
                  <div className="flex items-center justify-around gap-4">
                    <div className="w-[70px] h-[70px]  border flex items-center justify-center rounded-lg">
                      <Image
                        src="https://images.pexels.com/photos/19545978/pexels-photo-19545978/free-photo-of-a-person-eating-fruit-by-the-pool.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11"
                        height={50}
                        width={50}
                        alt="Product Image"
                        className="h-[50px] w-[50px] p-1"
                      />
                    </div>
                    <div>
                      <div className="flex flex-col md:items-center md:justify-between lg:items-center lg:justify-between ">
                        <div>
                          <h3 className="line-clamp-1 text-gray-800">
                            {product?.productName}
                          </h3>
                          <p className="text-[14px] text-gray-500">
                            {product?.brand}
                          </p>
                        </div>
                        <div>price here</div>
                      </div>
                    </div>
                  </div>

                  <div>Final Price</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileOrderHistory;
