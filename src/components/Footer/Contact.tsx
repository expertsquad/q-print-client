import React from 'react';
import Music from "@/assets/FooterSVG/Music";

const Contact = () => {
    return (
        <div className="flex  items-center gap-2.5 ">
            <div>
                <Music />
            </div>
            <div className='flex flex-col gap-2.5'>
                <span className="text-white text-sm">{`(219) 555-0114`}</span>
                <div className='md:bg-fuchsia-800 h-[1.5px] bg-green-600'></div>
            </div>


        </div>
    );
};

export default Contact;