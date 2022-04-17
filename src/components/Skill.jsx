import SkillSlide from "./helper/SkillSlide";
import reactLogo from "../images/react.svg";
import js from "../images/javascript.svg";
import reactNat from "../images/react-native.svg";
import {IoMdCode} from "react-icons/io";
import figma from "../images/figma.svg";
const Skill = () => {
    return (
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-offset="300"
        className=" m-32 flex flex-col place-items-center "
      >
        <div className="flex justify-center items-center space-x-1.5 mb-32 ">
          <IoMdCode size={32} className="text-sky-50" />
          <h1 className="text-sky-50  font-medium text-3xl">Skills</h1>
        </div>

        <div className="grid gap-12">
          <SkillSlide image={reactLogo} skill="React JS" />
          <SkillSlide image={js} skill="Javascript" />
          <SkillSlide image={reactNat} skill="React Native" />
          <SkillSlide image={figma} skill="Figma" />
        </div>
      </div>
    );
};

export default Skill;
