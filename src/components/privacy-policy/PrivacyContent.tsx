import React from 'react';

const PrivacyContent = (data: any) => {
    console.log(data);
    return (
        <div className="flex flex-col gap-2.5">
            <h3 className="font-bold md:text-xl text-lg">{data?.data?.title}</h3>
            <p>{data?.data?.description}</p>
        </div>
    );
};

export default PrivacyContent;