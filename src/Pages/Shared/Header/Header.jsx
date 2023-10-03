import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center my-10">
      <img
        src={logo}
        alt=""
        className="mx-auto my-2
      "
      />
      <p className="text-xl my-2">Journalism Without Fear or Favour</p>
      <p className="text-lg">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
