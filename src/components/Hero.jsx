import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import heroImg from "../images/main.jpg";
import { IoLogoGithub, IoLogoLinkedin, IoLogoDribbble } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="flex flex-col my-7 h-4/5 my-44 items-center  place-content-center"
    >
      <div className="w-52">
        <img
          className="rounded-full ring-2 ring-offset-8 ring-8 ring-offset-transparent"
          src={heroImg}
          alt="Virendra"
        />
      </div>
      <h2 className="my-7 mb-2.5 text-4xl sm:text-2xl text-blue-50">
        👋 Hey there, <span className="text-blue-500">Virendra Khorwal</span>
      </h2>
      <span className="text-2xl text-yellow-300">
        <Typewriter
          words={[
            "<Web Developer/>",
            "<Android Developer/>",
            "<UI/UX Designer/>",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <div className="flex space-x-2.5 text-base my-2 flex-row text-sky-50">
        <a
          className="hover:scale-150 hover:text-blue-500 transition ease-linear"
          target="_blank"
          href="https://github.com/Virendra-khorwal"
        >
          <IoLogoGithub size={30} />
        </a>
        <a
          className="hover:scale-150 hover:text-blue-500 transition ease-linear"
          target="_blank"
          href="https://www.linkedin.com/in/virendra-khorwal/"
        >
          <IoLogoLinkedin size={30} />
        </a>
        <a
          className="hover:scale-150 hover:text-blue-500 transition ease-linear"
          target="_blank"
          href="https://dribbble.com/designandcode_decode"
        >
          <IoLogoDribbble size={30} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
