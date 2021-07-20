import { Link } from "react-scroll";
import { BsFillCaretUpFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-2 md:px-10 px-2 mt-10 bg-gray-900">
      <div className="flex justify-between">
        <p>©2021</p>
        <Link
          to="home"
          smooth={true}
          className="hover:text-gray-50 flex items-center cursor-pointer"
        >
          <BsFillCaretUpFill className="mx-2" />
          Back to top
        </Link>
        <p>All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
