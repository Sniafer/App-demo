import Image from "next/image";
import Heading from "./Heading";
import Text from "./Text";

const data = [
  {
    name: "Fast",
    image: "https://ik.imagekit.io/eig26kz5ktn/fast_tzOMwIcZxE.png",
  },
  {
    name: "Accessible",
    image: "https://ik.imagekit.io/eig26kz5ktn/access_1sDY6qnFFa.png",
  },
  {
    name: "Free",
    image: "https://ik.imagekit.io/eig26kz5ktn/free_6gOS_QaHs.png",
  },
];

const Product = () => {
  return (
    <div id="product">
      <div className="text-center mt-10 px-10">
        <Heading>Meet our App</Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          iure rem voluptates debitis esse! Eaque quam qui amet voluptates
          culpa, aliquid repellat nostrum sint in! At cupiditate tempora ea
          repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis, dolores nemo animi laboriosam perspiciatis sed! Illum aut
          reiciendis assumenda velit!
        </Text>
      </div>
      <div className="md:flex md:justify-around text-center mt-10 text-lg md:px-20">
        {data.map((item, i) => (
          <div key={i} className="mt-5">
            <Image
              src={item.image}
              width="180"
              height="180"
              className=" rounded-full object-cover"
            />
            <h3 className="font-bold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
