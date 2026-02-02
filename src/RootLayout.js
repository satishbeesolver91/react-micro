import { Outlet, useParams } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import LightBox from "./components/lightbox";
import { useEffect, useState } from "react";
import MicroContext from "./context/MicroContext";

const RootLayout = () => {
  const [data, setData] = useState({});
  const [content, setContent] = useState({});
  const { page } = useParams();

  const fetchCidData = async () => {
    const request = await fetch("/json-data/output-cid.json");
    const result = await request.json();
    setData(result[page]);
  };
  const fetchContentData = async () => {
    const request = await fetch("/json-data/output-content.json");
    const result = await request.json();
    setContent(result[page]);
  };


  useEffect(() => {
    fetchCidData();
    fetchContentData();
  }, []);
  return (
    <MicroContext.Provider value={{data, content}}>
      <LightBox />
      <div className="page-wrapper">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </MicroContext.Provider>
  );
};

export default RootLayout;
