import logo from '../images/logo.svg';
const Footer = () => {
    return (
      <div className="grid justify-center justify-items-center p-4 bg-slate-800 space-y-5">
        <div className="w-40">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-sky-50">
          copyright ©️ 2022. All rights are reserved.
        </div>
      </div>
    );
};

export default Footer;
