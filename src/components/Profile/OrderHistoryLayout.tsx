const OrderHistoryLayout = ({ orderedItem }: any) => {
  console.log(orderedItem, "ordered item");

  return (
    <div>
      {orderedItem?.map((item: any) => (
        <div key={item?._id}>
          <p>Order Id: {item?.orderId}</p>
          <span>{item?.updatedAt}</span>
        </div>
      ))}
    </div>
  );
};

export default OrderHistoryLayout;
