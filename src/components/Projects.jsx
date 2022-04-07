import Card from "./helper/Card";
import data from "../data/data";
import { IoIosOptions } from "react-icons/io";
import { useEffect, useState } from "react";
const Projects = () => {
  const [show, setShow] = useState("Web");
  const active = "bg-sky-100 py-1 px-3 rounded-full";

  return (
    <div className="grid bg-sky-50 p-32 md:p-12 sm:p-4 lg:p-12 xl:p-12 justify-items-center ">
      <div className="flex justify-center items-center space-x-1.5 text-3xl font-medium ">
        <IoIosOptions />
        <h1>Projects</h1>
      </div>

      <div className="inline-block list-none bg-sky-200 shadow-inner space-x-4 my-6 rounded-full py-2 px-4">
        <button
          onClick={() => setShow(" ")}
          className={show === " " ? active : ""}
        >
          All
        </button>
        <button
          onClick={() => setShow("Web")}
          className={show === "Web" ? active : ""}
        >
          Web
        </button>
        <button
          className={show === "Android" ? active : ""}
          onClick={() => setShow("Android")}
        >
          Android
        </button>
        <button
          className={show === "Mics" ? active : ""}
          onClick={() => setShow("Mics")}
        >
          Mics
        </button>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.map((item) => {
          if (show === item.type) {
            return (
              <Card
                title={item.title}
                repo={item.url}
                web={item.demo}
                tag={item.tag}
                id={item.id}
                image={item.image}
              />
            );
          } else if (show === " ") {
            return (
              <Card
                title={item.title}
                repo={item.url}
                web={item.demo}
                tag={item.tag}
                id={item.id}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Projects;
