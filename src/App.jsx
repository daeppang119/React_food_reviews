import React, { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";

export default function App() {
  // const initialState = [
  //   {
  //     id: 1,
  //     nickname: "테스트 제목 1",
  //     context: "테스트 내용 1",
  //     region: "서울",
  //   },
  //   {
  //     id: 2,
  //     nickname: "테스트 제목 2",
  //     context: "테스트 내용 2",
  //     region: "수원",
  //   },
  //   {
  //     id: 3,
  //     nickname: "테스트 제목 3",
  //     context: "테스트 내용 3",
  //     region: "대구",
  //   },
  //   {
  //     id: 4,
  //     nickname: "테스트 제목 1",
  //     context: "테스트 내용 1",
  //     region: "부산",
  //   },
  //   {
  //     id: 5,
  //     nickname: "테스트 제목 2",
  //     context: "테스트 내용 2",
  //     region: "인천",
  //   },
  //   {
  //     id: 6,
  //     nickname: "테스트 제목 3",
  //     context: "테스트 내용 3",
  //     region: "제주도",
  //   },
  // ];
  const [lists, setLists] = useState([]);

  return (
    <>
      <Header />
      <Main list={lists} setList={setLists} />
      <Footer />
    </>
  );
}
