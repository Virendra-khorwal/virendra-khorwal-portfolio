 import { IoLogoGithub, IoLogoLinkedin, IoLogoDribbble } from "react-icons/io";
 const SocialMediaIcons = (props) => {
     return (
       <div className={`flex space-x-2.5 text-base my-2 flex-row text-sky-50 ${props.color} `}>
         <a
           className="hover:scale-150 hover:text-blue-500"
           target="_blank"
           href="https://github.com/Virendra-khorwal"
         >
           <IoLogoGithub size={30} />
         </a>
         <a
           className="hover:scale-150 hover:text-blue-500"
           target="_blank"
           href="https://www.linkedin.com/in/virendra-khorwal/"
         >
           <IoLogoLinkedin size={30} />
         </a>
         <a
           className="hover:scale-150 hover:text-blue-500"
           target="_blank"
           href="https://dribbble.com/designandcode_decode"
         >
           <IoLogoDribbble size={30} />
         </a>
       </div>
     );
 };

 export default SocialMediaIcons;