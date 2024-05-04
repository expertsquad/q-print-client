interface thankYouPageProps {
  contact?: string;
  streetAddress?: string;
  payment?: string;
}

const ThankYouPageContactInfo = ({
  streetAddress,
  contact,
  payment,
}: thankYouPageProps) => {
  return (
    <div className="border p-5 md:p-10 rounded-lg flex flex-col gap-5 mt-5">
      <div className="text-base flex items-center justify-start pb-5 gap-5 border-b ">
        <span className="text-black-opacity-60">Contact</span>

        <span className="text-black-opacity-80">{contact}</span>
      </div>
      <div className="text-base flex items-center justify-start pb-5 gap-5  border-b ">
        <p className="text-black-opacity-60">Address</p>{" "}
        <span className="text-black-opacity-80">{streetAddress}</span>
      </div>
      <div className="text-base flex items-center justify-start gap-5 ">
        <p className="text-black-opacity-60">Payment</p>{" "}
        <p className="text-black-opacity-68">{payment}</p>
      </div>
    </div>
  );
};

export default ThankYouPageContactInfo;
