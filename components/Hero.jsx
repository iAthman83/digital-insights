import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="lg:px-40 px-4 flex flex-col md:flex-row py-8">
      <div className="flex flex-col space-y-4 justify-end  flex-1">
        <h1 className="capitalize text-3xl md:text-5xl font-semibold">
          A blog for all ages and website lovers
        </h1>
        <p>
          This Blog is perfect if you have a blog idea and you want to share.
          Using its high-quality sections and components you can showcase your
          blog articles in a very beautiful and unique way.
        </p>
        <Link
          href="/contact"
          className="bg-primary-brand flex justify-center text-primary-bg w-44 py-2 rounded"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex justify-center flex-1">
        <Image
          src="/images/hero.webp"
          alt="extended family hero image"
          width={500}
          height={100}
        />
      </div>
    </div>
  );
};

export default Hero;
