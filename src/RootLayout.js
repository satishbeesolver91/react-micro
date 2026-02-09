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

  const currentPage = page || "roofing";

  useEffect(() => {
    const loadJson = async () => {
      try {
        // CID Data
        const cidRes = await fetch("/json-data/output-cid.json");
        const cidJson = await cidRes.json();
        setData(cidJson[currentPage] || {});

        // Content Data
        const contentRes = await fetch("/json-data/output-content.json");
        const contentJson = await contentRes.json();
        setContent(contentJson[currentPage] || {});
      } catch (error) {
        console.error("JSON loading error:", error);
        setData({});
        setContent({});
      }
    };

    loadJson();
  }, [currentPage]); 

  return (
    <MicroContext.Provider value={{ data, content }}>
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
