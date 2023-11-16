import React, { useState } from "react";
import uuid from "react-uuid";
import Input from "./Input";
import styled from "styled-components";

const StRadio = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Form({ list, setList, regions }) {
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

    setList([...list, newList].reverse());

    setNickNameInputValue("");
    setContextInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <p>닉네임</p>
      <Input value={nickNameInputValue} setValue={setNickNameInputValue} />
      <p>내용</p>
      <Input value={contextInputValue} setValue={setContextInputValue} />
      <StRadio>{regions.map(makeChekBox)}</StRadio>
      <button>등록</button>
    </form>
  );
}
