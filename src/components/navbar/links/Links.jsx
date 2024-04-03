import Image from "next/image";
import NavLink from "../navLink/NavLink";
import { useState } from "react";

const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className="">
      <div className="hidden md:inline space-x-2 md:space-x-4">
        {links.map((link, index) => (
          <NavLink key={index} item={link} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="rounded bg-white px-3 py-2 text-color-dark">
              LogOut
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
     
      <div className="flex flex-col items-end justify-center space-y-3">
      
      <Image src='/menu.png' className="md:hidden mt-2" width={20} height={20} onClick={() => setOpen((prev)=>!prev)}/>
        {open && links.map((link) => <NavLink item={link} />)}
      </div>
    </div>
  );
};

export default Links;
