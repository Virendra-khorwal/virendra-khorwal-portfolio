
const SkillSlide = (props)=> {
    return (
      <div className="flex">
        <div className="bg-white flex w-80 h-14 overflow-visible relative items-center rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
          <div className="ml-32"> {props.skill} </div>
          <img
            className="w-20 h-20 p-5 rounded-full bg-white absolute -inset-y-3 -left-3 drop-shadow-md"
            src={props.image}
          ></img>
        </div>
      </div>
    );
};

export default SkillSlide;