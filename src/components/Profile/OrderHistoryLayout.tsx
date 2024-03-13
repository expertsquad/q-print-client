// interface IOrder{
//     orderId: string,

// }

const OrderHistoryLayout = ({ orderedItem }: any) => {
  console.log(orderedItem, "ordered item");

  return (
    <div>
      {orderedItem?.map((item: any) => (
        <div key={item?._id}>
          <p>Order Id: {item?._id}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistoryLayout;
