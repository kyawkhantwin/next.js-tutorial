import Image from "next/image";

export const metadata = {
  title:"About Page",
  description: "About Description",
};

function AboutPage() {
  return (
    <div className="my-10">
      <div className="flex space-x-10">
        <div className="flex-[1] space-y-10">
          <h1 className="text-lg text-blue-500  font-bold">About Agency</h1>
          <p className="text-3xl font-bold">
            We create didgital ideas that are bigger, bloder, braver and better.
          </p>
          <p className="text-sm"> 
            We create digital ideas that are bigger, bolder, braver and
            better.We believe in good ideas flexibility and precission. We're
            world's Our Specail Team best consulting & finance solution
            provider.Wide range of web an software development services.
          </p>

          <div className="flex justify-between items-center">
            <div className="">
               <p className="text-blue-600 text-xl font-bold">10 K+</p>
               <p className="text-[0.7rem]">Year of experience</p>
            </div>
            <div className="">
               <p className="text-blue-600 text-xl font-bold">234 K+</p>
               <p className="text-[0.7rem]">People reached</p>
            </div>
            <div className="">
               <p className="text-blue-600 text-xl font-bold">5 K+</p>
               <p className="text-[0.7rem]">Services and plugins</p>
            </div>
          </div>
         
        </div>
        <div className="md:flex-[1] relative">
          <Image src="/about.png" className="hidden md:block" fill />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
