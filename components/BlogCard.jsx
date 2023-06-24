import Image from "next/image";
const BlogCard = () => {
  return (
    <div className="flex flex-col space-y-2 bg-primary-bg w-72 hover:scale-105 transition-transform duration-200 ease-out rounded overflow-hidden">
      <div>
        <Image
          src="/images/laptop-min.jpeg"
          alt="laptop"
          width={300}
          height={50}
        />
      </div>
      <div className="flex flex-row">
        <p className="font-semibold text-sm text-primary-brand">
          Abu, June 13 2023
        </p>
      </div>
      <div>
        <h1 className="text-xl font-bold">How to Program</h1>
      </div>
      <div>
        <p className="line-clamp-2">
          This Blog is perfect if you have a blog idea and you want to share.
          Using its high-quality sections and components you can showcase your
          blog articles in a very beautiful and unique way.
        </p>
      </div>
      <div className="flex flex-row flex-wrap space-x-2">
        <p className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full">
          Programming
        </p>
        <p className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full">
          Cloud
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
