import spicesImage from "@/public/spices.jpg";
import Image from "next/image";
import Contact from "./ContactDrawer";

const ContactCard = () => {
  return (
    <div className="bg-[#C5C1AE] rounded-lg my-12 overflow-hidden flex flex-col md:flex-row">
      {/* <div className="object-bottom"> */}
      <Image src={spicesImage} className="object-cover md:w-1/2" alt="spices" />
      {/* </div> */}
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Quality spices for every scale!</h2>
        <p className="text-sm leading-7">
          Whether you are crafting family dinners or stocking store shelves,
          connect with us to experience premium flavors that make every dish
          extraordinary.
        </p>
        <div className="mt-auto">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
