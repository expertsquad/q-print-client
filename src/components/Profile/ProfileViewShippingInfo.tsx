const ProfileViewShippingInfo = ({ shippingInformation }: any) => {
  return (
    <div className="border rounded-lg lg:p-8 p-2.5">
      <h1 className="lg:text-xl text-base text-black  mb-5">
        Shipping Information
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
        <div className="flex flex-col justify-start gap-4 ">
          <small className="text-gray-400 text-base">Country</small>
          <p className="text-base text-black">{shippingInformation?.country}</p>
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          <small className="text-gray-400 text-base">State</small>
          <p className="text-base text-black">{shippingInformation?.state}</p>
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          <small className="text-gray-400 text-base"> Zip Code</small>
          <p className="text-base text-black">{shippingInformation?.zipCode}</p>
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          <small className="text-gray-400 text-base">
            Company Name (optional)
          </small>
          <p className="text-base text-black">ExpertSquad</p>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-4 mt-10 ">
        <small className="text-gray-400 text-base">Street Address</small>
        <p className="text-base text-black">
          {/* Noakhali Chaprashirhat Road No. 13/x, House no. 1320/C, Flat No. 5D */}
          {shippingInformation?.streetAddress}
        </p>
      </div>
    </div>
  );
};

export default ProfileViewShippingInfo;
