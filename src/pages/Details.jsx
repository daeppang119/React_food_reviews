import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Profile from "../assets/profile.png";

export default function Details({ lists, setLists }) {
  const params = useParams();

  const foundData = lists.find((item) => {
    return item.id === Number(params.id);
  });

  const navigate = useNavigate();

  const deletBtn = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const delet = (id) => {
        return setLists(
          lists.filter((element) => element.id !== Number(params.id))
        );
      };
      delet(foundData);
      navigate("/");
      alert("삭제완료 되었습니다.");
    } else {
      return alert("취소됬습니다.");
    }
  };

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
            deletBtn();
          }}
        >
          삭제
        </button>
      </div>
    </>
  );
}
