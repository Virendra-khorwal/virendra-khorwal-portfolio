import { IoLogoGithub, IoMdGlobe } from "react-icons/io";


const Card = (props) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="3000"
      className="bg-sky-50 w-72  p-4 cursor-pointer drop-shadow-md hover:drop-shadow-xl hover:scale-105 transition ease-linear rounded-md"
    >
      <div>
        <img
          className="w-72 h-72 rounded-md"
          src={
            props.image
              ? `./project-images/${props.id}.png`
              : "./project-images/default.png"
          }
          alt="Project 1"
        />
      </div>
      <div>
        <h1 className="text-2xl mt-2">{props.title}</h1>
        {/* <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        </p> */}
      </div>
      <div>
        <div className="flex text-2xl space-x-4 mt-4 mb-4">
          <a href={props.repo} target="_blank">
            <IoLogoGithub className="text-sky-400 hover:text-sky-600" />
          </a>
          {props.web && (
            <a href={props.web} target="_blank">
              <IoMdGlobe className="text-sky-400 hover:text-sky-600" />
            </a>
          )}
        </div>
        {props.tag.map((i) => (
          <div className="drop-shadow-md rounded-full bg-blue-500 inline py-1 px-2 text-xs text-sky-50 mr-4">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
