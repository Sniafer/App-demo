import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [show, setShow] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "home",
    },
    { name: "Our Product", path: "product" },
    { name: "Reviews", path: "reviews" },
    { name: "About Us", path: "about" },
  ];

  const handleNav = () => {
    show ? setShow(false) : setShow(true);
  };
  return (
    <div>
      <nav className="flex justify-between bg-gray-900 text-lg font-bold items-center fixed z-20 min-w-full ">
        <div>
          <Link to="home" smooth className="cursor-pointer" className="px-8">
            <Image
              src="https://ik.imagekit.io/eig26kz5ktn/Sniafi_YnbOIddnib7.png"
              alt="Sniafi"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div>
          <div className="md:flex hidden mx-10">
            {navItems.map((item, i) => (
              <Link
                to={item.path}
                smooth
                offset={-100}
                key={i}
                className="lg:mx-10 mx-5 hover:text-gray-50 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:hidden px-10">
          <GiHamburgerMenu size={30} onClick={handleNav} />
        </div>
      </nav>
      <div
        className={`md:hidden fixed z-10 w-full mt-20 px-2 bg-gray-900 transition duration-1000 ease-in-out transform ${
          show ? "translate-y-0" : "-translate-y-64"
        }`}
      >
        {navItems.map((item, i) => (
          <Link
            to={item.path}
            smooth
            offset={-100}
            key={i}
            className="block text-center py-4 text-lg hover:text-gray-50 cursor-pointer font-bold border-t-2"
            onClick={handleNav}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
