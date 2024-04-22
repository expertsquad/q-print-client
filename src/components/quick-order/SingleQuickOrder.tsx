"use client";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
import React, { useState } from "react";

const SingleQuickOrder = ({ id }: string | any) => {
  const { data } = useGetProductByIdQuery(id);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return <div></div>;
};

export default SingleQuickOrder;
