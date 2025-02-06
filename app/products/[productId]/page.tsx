import Contact from "@/components/contact/ContactDrawer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getData } from "@/utils/request";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const page = async ({ params }) => {
  // const navigate =
  const product = await getData(`/public/product/${params.productId}`);
  console.log(product);
  return (
    <div className="p-2">
      <div className="mb-1">
        <Link
          href={"/products"}
          className="flex items-center gap-2 text-gray-600"
        >
          <ArrowLeft size={16} /> <p className="text-sm">Go back</p>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Carousel className="w-[65%]">
          <CarouselContent className="">
            {product.ProductImage.map((img) => {
              return (
                <CarouselItem key={img.id} className="h-56 rounded-lg md:h-72">
                  <img src={img.url} className="w-full h-full object-contain" />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="p-2">
        <h2 className="py-4 font-bold">{product.name}</h2>
        <p className="whitespace-pre-line text-gray-600">
          {product.description.trim()}
        </p>
      </div>
      <div className="p-2">
        <Contact />
      </div>
    </div>
  );
};

export default page;
