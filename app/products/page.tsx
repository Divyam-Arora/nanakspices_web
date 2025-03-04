import ContactCard from "@/components/contact/ContactCard";
import ProductCard from "@/components/product/ProductCard";
import { getData } from "@/utils/request";
import Link from "next/link";

const page = async () => {
  const categories: [] = await getData("/public/category").catch((err) =>
    console.log(err)
  );
  const category: { id: string } = categories?.find(
    (cat: { name: string }) => cat.name == "Spices"
  );
  const products = await getData(`/public/category/${category?.id}`);
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
