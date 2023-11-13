import React from "react";
import Form from "./Form";
import List from "./List";

export default function Main({ list, setList }) {
  const region = ["전국", "서울", "경기도", "인천", "부산", "제주도"];

  return (
    <>
      {region.map(function (name) {
        return <button>{name}</button>;
      })}
      <Form list={list} setList={setList} />

      <h3>맛집리스트...🔥</h3>

      <List list={list} setList={setList} />
    </>
  );
}
