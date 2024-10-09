import { Link } from "react-router-dom";

const BreadCrumbs = ({ links }) => {
  return (
    <div className="breadcrumbs bg-gray-100 py-2 px-2 rounded">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        {links.map((link, idx) => (
          <li key={idx}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
