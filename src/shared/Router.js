import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../component/Main";
import Details from "../pages/Details";
import Layout from "./Layout";

const Router = () => {
  const initialState = [
    {
      id: "1",
      nickname: "대빵",
      context: "서울어디가 맛집일까?",
      region: "서울",
      time: "2023.11.15 AM11:44",
    },
    {
      id: "2",
      nickname: "대빵",
      context: "경기어디가 맛집일까?",
      region: "경기",
      time: "2023.11.15 AM11:44",
    },
    {
      id: "3",
      nickname: "대빵",
      context: "인천어디가 맛집일까?",
      region: "인천",
      time: "2023.11.15 AM11:44",
    },
    {
      id: "4",
      nickname: "대빵",
      context: "대구어디가 맛집일까?",
      region: "대구",
      time: "2023.11.15 AM11:44",
    },
    {
      id: "5",
      nickname: "대빵",
      context: "부산어디가 맛집일까?",
      region: "부산",
      time: "2023.11.15 AM11:44",
    },
    {
      id: "6",
      nickname: "대빵",
      context: "제주어디가 맛집일까?",
      region: "제주",
      time: "2023.11.15 AM11:44",
    },
  ];

  const [lists, setLists] = useState(initialState);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Main lists={lists} setLists={setLists} />}
          />
          <Route
            path="details/:id"
            element={<Details lists={lists} setLists={setLists} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
