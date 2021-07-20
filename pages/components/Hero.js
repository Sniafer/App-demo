import Image from "next/image";
import HeroImg from "../../assets/hero.jpg";
import Heading from "./Heading";
import Text from "./Text";

const Hero = () => {
  return (
    <div id="home" className="flex md:flex-row flex-col md:justify-between">
      <div className="lg:w-1/2 md:w-3/4 py-4 px-10 leading-8 md:mt-32 mt-20 md:text-justify text-center">
        <Heading>
          Learn Smart<br></br>
          Learn Fast
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          scelerisque mauris. Nam ut pretium leo. Sed sagittis, lacus in
          scelerisque finibus, leo ligula vehicula est, nec dignissim metus
          massa eget tortor.
        </Text>
        <div className="flex justify-center">
          <button className="rounded-full bg-blue-800 px-6 py-4 mt-10 text-2xl hover:bg-blue-600 items-center">
            Get Started
          </button>
        </div>
      </div>
      <div className="py-4 px-10 lg:mt-10 md:mt-32">
        <Image src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
