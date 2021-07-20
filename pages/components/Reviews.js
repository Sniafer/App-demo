import Heading from "./Heading";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Text from "./Text";

const data = [
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, harum qui. Illum cumque vel id perferendis, tempora ex expedita aut ratione optio velit molestias vitae magni ullam totam provident maxime vero est reiciendis fugiat asperiores suscipit deserunt excepturi minima. Earum.",
    image: "https://ik.imagekit.io/eig26kz5ktn/rew1_LF7rk2JHJPu.jpg",
  },
  {
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, harum qui. Illum cumque vel id perferendis, tempora ex expedita aut ratione optio velit molestias vitae magni ullam totam provident maxime vero est reiciendis fugiat asperiores suscipit deserunt excepturi minima. Earum.",
    image: "https://ik.imagekit.io/eig26kz5ktn/rew2_kmfuPmgaN7.jpg",
  },
  {
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, harum qui. Illum cumque vel id perferendis, tempora ex expedita aut ratione optio velit molestias vitae magni ullam totam provident maxime vero est reiciendis fugiat asperiores suscipit deserunt excepturi minima. Earum.",
    image: "https://ik.imagekit.io/eig26kz5ktn/rew3_6U0iAplun3.jpg",
  },
];

const Reviews = () => {
  return (
    <div id="reviews">
      <div className="flex justify-center mt-10 px-10">
        <Heading>Our Clients</Heading>
      </div>
      <div className="mt-10 md:px-10">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showIndicators={false}
          swipeable
          emulateTouch
        >
          {data.map((item, i) => (
            <div className="flex-row" key={i}>
              <div className="md:px-5 md:w-full">
                <Image
                  src={item.image}
                  width="120"
                  height="120"
                  className=" rounded-full object-cover"
                />
                <p>{item.name}</p>
              </div>
              <div className="md:px-20 px-10 italic">
                <Text>"{item.review}"</Text>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
