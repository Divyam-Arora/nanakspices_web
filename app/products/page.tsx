import ContactCard from "@/components/contact/ContactCard";
import ProductCard from "@/components/product/ProductCard";
import { Input } from "@/components/ui/input";
import { getData } from "@/utils/request";
import Link from "next/link";
import React from "react";

const page = async () => {
  const categories: [] = await getData("/public/category");
  const category = categories.find((cat: any) => cat.name == "Spices");
  const products = await getData(`/public/category/${category.id}`);
  // console.log(products);
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="p-2">
        <h1 className="font-bold">Products</h1>
        {/* <Input /> */}
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {products.list.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
      <ContactCard />
    </div>
  );
};

export default page;
