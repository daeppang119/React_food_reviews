import React from "react";
import { useParams } from "react-router-dom";
import Profile from "../assets/profile.png";

export default function Details({ lists, setLists }) {
  const params = useParams();

  const deletBtn = (id) => {
    return setLists(
      lists.filter((element) => element.id !== Number(params.id))
    );
  };

  const foundData = lists.find((item) => {
    return item.id === Number(params.id);
  });

  return (
    <>
      <div>
        <img src={Profile} alt="default profile " />
      </div>
      <div>
        <p>{foundData.region}</p>
        <p>{foundData.nickname}</p>
        <p>{foundData.context}</p>
        <p>{foundData.time}</p>
      </div>
      <div>
        <button onClick={() => {}}>수정</button>
        <button
          onClick={() => {
            deletBtn(foundData.id);
          }}
        >
          삭제
        </button>
      </div>
    </>
  );
}
