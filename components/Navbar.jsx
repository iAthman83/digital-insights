import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between lg:px-40 px-4 mt-4 items-center">
      <div className="bg-primary-brand p-2 px-4 rounded-full">
        <Image src="/images/logo.png" width={50} height={50} alt="logo" />
      </div>
      <nav className="flex flex-row space-x-4">
        <p>Blog</p>
        <p>About</p>
        <p>Contact</p>
      </nav>
    </div>
  );
};

export default Navbar;
