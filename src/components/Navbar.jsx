import logo from "../images/logo.svg";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const Navbar = () => {
    return (
      <Router>
        <nav 
        data-aos="zoom-out" 
        data-aos-duration="3000"
        className="container flex flex-wrap justify-between items-center bg-slate-800 w-screen content-center mx-0 px-5 py-2 px-10 text-sky-600">
          <div className="mr-3 h-6 ">
            <img className="h-full" src={logo} alt="logo" />
          </div>
          <div className="text-sky-50">
            Virendra Khorwal
          </div>
          {/* <div>
            <ul className="flex justify-between space-x-9 text-blue-100 text-base cursor-pointer">
              <li className="hover:bg-blue-500 rounded-lg px-2 py-2">
                Home
              </li>
              <li className="hover:bg-blue-500 rounded-lg px-2 py-2">
                About
              </li>
              <li className="hover:bg-blue-500 rounded-lg px-2 py-2">
                Skills
              </li>
              <li className="hover:bg-blue-500 rounded-lg px-2 py-2">
                Projects
              </li>
            </ul>
          </div> */}
        </nav>
      </Router>
    );
};

export default Navbar;
