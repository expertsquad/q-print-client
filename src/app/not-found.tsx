"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from "next/link";


import notFoundImg from "@/assets/images/404-computer.svg";
import Image from "next/image";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            // Redirect to previous page
            router.back();
        }, 5000); // Redirect after 5 seconds, adjust as needed

        return () => clearTimeout(redirectTimer);
    }, [router]);

    return (
        <div className="h-screen flex items-center justify-center px-5 bg-white dark:bg-gray-900">
            <div className="flex flex-col gap-5">
                <div className="">
                    <Image src={notFoundImg} alt="page not found image" />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center text-center dark:text-white">
                    <h2 className="font-bold md:text-3xl text-blue-500">404 Not Found</h2>
                    <h3 className="font-semibold md:text-2xl">Whoops! That page doesn’t exist.</h3>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-sm text-gray-500">You will be redirected to the previous page shortly...</p>
                     
                </div>
                <div className="flex items-center justify-center">
                    <Link href='/' className="px-3.5 py-2.5 rounded-md bg-blue-400 text-white text-center font-medium dark:text-white">Back to Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
