import Heading from "./Heading";
import Text from "./Text";
import about from "../../assets/about.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="about">
      <div className="flex justify-center mt-10">
        <Heading>About Us</Heading>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between">
        <div className="md:w-3/4 px-10 leading-8 ">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            eaque, assumenda consectetur repellendus repellat cupiditate
            accusantium quam harum quibusdam laborum sint veniam perspiciatis
            optio architecto nobis necessitatibus nostrum eligendi incidunt ipsa
            maxime temporibus sunt earum culpa. Minima similique incidunt
            provident veritatis, sunt ipsum facere maxime laborum placeat
            asperiores suscipit odit, eius, earum soluta perferendis ab
            necessitatibus beatae nemo libero! Ex.
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste iusto
            odio eligendi deserunt dignissimos et velit necessitatibus veritatis
            tempora dolorem inventore facilis, natus recusandae vel commodi ab
            porro repellendus suscipit possimus numquam, atque consectetur
            blanditiis. Voluptatem impedit iste quisquam dolore?
          </Text>
        </div>
        <div className="px-10 mt-10">
          <Image src={about} alt="About us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
