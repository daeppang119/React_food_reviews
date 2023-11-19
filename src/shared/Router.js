import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailsPage from "../pages/DetailsPage";
import Layout from "./Layout";

const Router = ({ lists, setLists }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<MainPage lists={lists} setLists={setLists} />}
          />
          <Route
            path="details/:id"
            element={<DetailsPage lists={lists} setLists={setLists} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
