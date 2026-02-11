import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MicroList = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const loadKeys = async () => {
      const res = await fetch("/json-data/output-cid.json");
      const json = await res.json();

      const keys = Object.keys(json);
      setPages(keys);
    };

    loadKeys();
  }, []);

  return (
    <div className="button-group">
      {pages.map((page) => (
        <Link key={page} to={`/${page}`} className="button w-button">
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default MicroList;
