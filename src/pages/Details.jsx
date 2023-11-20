import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Profile from "../assets/profile.png";

const StCard = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 50%;
`;

const StCon = styled.div`
  width: 13rem;
`;

export default function Details({ lists, setLists }) {
  const [isEditBtn, setIsEditBtn] = useState(false);

  const params = useParams();

  const foundData = lists.find((item) => {
    return item.id === params.id;
  });

  const [editText, setEditText] = useState(foundData.context);

  const navigate = useNavigate();

  const editBtn = () => {
    setIsEditBtn(true);
  };

  const deletBtn = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const delet = (id) => {
        return setLists(lists.filter((element) => element.id !== params.id));
      };
      delet(foundData);
      navigate("/");
      alert("삭제완료 되었습니다.");
    } else {
      return alert("취소됬습니다.");
    }
  };

  const completeBtn = () => {
    const changeEdit = lists.map((item) => {
      return item.id === foundData.id
        ? {
            ...item,
            context: editText,
          }
        : item;
    });

    setLists(changeEdit);
    setIsEditBtn(false);
  };

  return (
    <StCard>
      <div>
        <StProfileImg src={Profile} alt="default profile " />
      </div>
      <StCon>
        <div>
          <p>{foundData.region}</p>
          <p>{foundData.nickname}</p>
          {isEditBtn === true ? (
            <textarea
              value={editText}
              onChange={(e) => {
                setEditText(e.target.value);
              }}
            >
              {foundData.context}
            </textarea>
          ) : (
            <p>{foundData.context}</p>
          )}
          <p>{foundData.time}</p>
        </div>
        <div>
          {isEditBtn === true ? (
            <>
              <button onClick={completeBtn}>수정완료</button>
              <button
                onClick={() => {
                  setIsEditBtn(!isEditBtn);
                }}
              >
                수정취소
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                editBtn();
              }}
            >
              수정
            </button>
          )}

          <button
            onClick={() => {
              deletBtn();
            }}
          >
            삭제
          </button>
        </div>
      </StCon>
    </StCard>
  );
}
