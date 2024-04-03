import Image from "next/image";

export default function Home() {
  return (
    <div className="my-5">
      <div className="flex space-x-10">
        <div className="flex-[1] space-y-4">
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold">Creative <br /> Thoughs <br /> Agency</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt
            vitae non molestias, enim, earum reprehenderit in minima fugit
          </p>
          <div className=" buttons space-x-3">
            <button className="btn bg-blue-600">Learn More</button>
            <button className="btn bg-white text-color-dark">Contact </button>
          </div>
          <div className="w-full h-[50px] relative text-gray-600 ">
            <Image src="/brands.png" className="  grayscale-[100%] " fill  />
          </div>
        </div>
        <div className="md:flex-[1] relative">
          <Image src="/hero.gif" className="hidden md:block" fill />
        </div>
      </div>
    </div>
  );
}
