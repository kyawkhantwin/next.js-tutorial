"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({item}) => {
    
    const pathName= usePathname()
  return (
    <Link
      className={` ${pathName == item.path && "bg-color-white text-color-dark"} rounded-full px-4 py-2 hover:text-black hover:bg-white ease-in duration-75`}
      href={item.path}
      key={item.title}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
