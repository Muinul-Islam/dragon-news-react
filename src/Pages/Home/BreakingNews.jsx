import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div>
      <button className="relative btn btn-warning">Breaking News</button>
      <Marquee pauseOnHover={true} speed={70}>
        <Link className="mr-8">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link className="mr-8">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link className="mr-8">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link className="mr-8">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
