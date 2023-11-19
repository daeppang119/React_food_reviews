import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import styled from "styled-components";
import { updateList } from "../../redux/modules/list";

const StP = styled.p`
  line-height: 2;
  font-size: 12px;
`;
const StNicknameInput = styled.input`
  height: 2rem;
  margin: 0.25rem 0;
  padding: 0 1rem;
`;

const StContextInput = styled.textarea`
  margin: 0.25rem 0;
  padding: 1rem;
`;

const StRadio = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Form({ regions }) {
  const dispatch = useDispatch();
  const [nickNameInputValue, setNickNameInputValue] = useState("");
  const [contextInputValue, setContextInputValue] = useState("");

  const [checkedName, setCheckedName] = useState("서울");

  function makeChekBox(name) {
    return (
      <div>
        <input
          type="radio"
          checked={name === checkedName}
          onChange={() => {
            setCheckedName(name);
          }}
        />
        <label>{name}</label>
      </div>
    );
  }

  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
  let time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
  };

  let amPm = time.date < 12 ? "AM" : "PM";

  let timeString = `${time.year}.${time.month}.${time.date} ${amPm}${time.hours}:${time.minutes}`;

  const id = uuid();

  const onSubmit = (e) => {
    e.preventDefault();

    const newList = {
      id: id,
      nickname: nickNameInputValue,
      context: contextInputValue,
      region: checkedName,
      time: timeString,
    };

    if (nickNameInputValue === "") {
      return alert("닉네임이 입력되지 않았습니다.");
    } else if (contextInputValue === "") {
      return alert("내용이 입력되지 않았습니다.");
    }

    dispatch(updateList(newList));

    setNickNameInputValue("");
    setContextInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <StP>닉네임</StP>
      <StNicknameInput
        placeholder="최대 10글자까지 작성할 수 있습니다."
        maxlength="10"
        value={nickNameInputValue}
        onChange={(e) => {
          const { value } = e.target;
          setNickNameInputValue(value);
        }}
      />
      <StP>내용</StP>
      <StContextInput
        // cols="30"
        rows="5"
        placeholder="최대 100글자까지 작성할 수 있습니다."
        maxlength="100"
        value={contextInputValue}
        onChange={(e) => {
          const { value } = e.target;
          setContextInputValue(value);
        }}
      ></StContextInput>
      <StRadio>{regions.map(makeChekBox)}</StRadio>
      <button>등록</button>
    </form>
  );
}
