import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../component/Main";
import Details from "../pages/Details";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
