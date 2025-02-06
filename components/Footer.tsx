const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#1B303A] text-secondary p-4 mt-4">
      <p className="text-xs text-gray-400 text-center text-balance">
        Copyright &copy; {new Date().getFullYear()} by{" "}
        <span className="font-bold whitespace-nowrap">Sunil Industries</span>.
        All rights reserved.
      </p>
      {/* <p className="text-xs">
        contact{" "}
        <Link href={"mailto:mka1408@gmail.com"}>
          <span className="font-bold">mka1408@gmail.com</span>
        </Link>
      </p> */}
    </div>
  );
};

export default Footer;
