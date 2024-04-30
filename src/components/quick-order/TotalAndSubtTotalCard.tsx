interface CardProps {
  subTotal: number;
  shippingFee: number;
}

const TotalAndSubtTotalCard = ({ subTotal, shippingFee }: CardProps) => {
  return (
    <div>
      <div className="pt-3">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-black text-opacity-50 text-[14px]">Subtotal</p>
          <p className="text-black text-opacity-50 text-[14px]">
            <b>{subTotal}</b> QAR
          </p>
        </div>
        <div className="flex justify-between items-center mb-2.5 pb-2 border-b">
          <p className="text-black text-opacity-50 text-[14px]">Shipping</p>
          <p className="text-black text-opacity-50 text-[14px]">
            {shippingFee}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <b className="text-black text-[14px]">Total</b>
          <b className="text-black text-[14px]">
            <b>{subTotal + shippingFee}</b> QAR
          </b>
        </div>
      </div>
    </div>
  );
};

export default TotalAndSubtTotalCard;
