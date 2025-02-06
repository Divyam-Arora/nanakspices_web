"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import classes from "./ProductCart.module.css";
import { Drawer, DrawerContent } from "../ui/drawer";
import { getData } from "@/utils/request";
import { useParams, useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const { productId } = useParams();
  const router = useRouter();

  const showProductInfo = (id: string) => {
    setLoading(true);
    setInfoOpen(true);
    getData(`/public/product/${id}`)
      .then((data) => {
        setProductInfo(data);
      })
      .finally(() => setLoading(false));
  };

  console.log(productInfo);
  return (
    <div
      className={`flex flex-col gap-4 rounded-lg p-4 shadow-lg relative overflow-hidden ${classes.product}`}
      onClick={() => setInfoOpen(true)}
    >
      {/* <Dialog open={infoOpen} onOpenChange={setInfoOpen}>
        <DialogContent>
          <DialogHeader>Info</DialogHeader>
        </DialogContent>
      </Dialog> */}
      <Drawer
        open={infoOpen && productId?.length > 0}
        onOpenChange={setInfoOpen}
        onClose={() => router.back()}
        handleOnly={true}
      >
        <DrawerContent>{loading && <p>Loading...</p>}</DrawerContent>
      </Drawer>
      <div
        className={`absolute left-0 top-0 w-full h-full bg-slate-200 opacity-0 ${classes.backdrop}`}
      ></div>
      <div className="w-full aspect-square object-contain flex items-center justify-center">
        <img src={product.ProductImage[0].url} />
      </div>
      <div className="flex justify-center">
        <p className="text-slate-700 font-bold text-sm text-balance text-center">
          {product.name}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
