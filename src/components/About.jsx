import image from "../images/main.jpg";
import { IoMdPerson } from "react-icons/io";
import { IoLogoGithub, IoLogoLinkedin, IoLogoDribbble } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const markdownCard =
    "![Virendra Khorwal Github stats](https://github-readme-stats.vercel.app/api?username=Virendra-khorwal&show_icons=true&theme=radical)";

  

  return (
    <div className="bg-blue-50 p-20 sm:p-4 md:p-4 lg:p-8 xl:p-8 flex justify-center">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="200"
        className="w-3/5 sm:w-full md:w-full lg:w-4/5 shadow-2xl p-10 rounded-md"
      >
        <div className="flex justify-center items-center space-x-1.5 font-medium text-3xl">
          <IoMdPerson />
          <h1>About</h1>
        </div>
        <div className="grid grid-cols-2 mt-7 sm:grid-cols-1 sm:justify-items-center ">
          <div>
            <img
              className="h-80 sm:h-64 sm:mb-4 rounded-md"
              src={image}
              alt="Virendra Khorwal"
            />
          </div>
          <div>
            <ReactMarkdown children={markdownCard} remarkPlugins={[remarkGfm]} />
            <p className="sm:text-sm mt-5 text-lg">
              I'm a student. Love to design and code. AI/ML enthusiast.
              Currently learning WEB 3.0. Always ready to work on projects.
            </p>
            <div className="mt-10">
              <div className="flex sm:grid sm:grid-cols-3 sm:justify-items-center space-x-2.5 text-base my-2 flex-row text-blue-500">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
