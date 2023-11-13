import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import uuid from "react-uuid";

export default function Form({ list, setList }) {
  const [nickName, setNickName] = useState("");
  const [contents, setContents] = useState("");

  const id = uuid();

  const onSubmit = (e) => {
    e.preventDefault();

    const newList = {
      id: id,
      nickName: nickName,
      contents: contents,
    };

    setList([...list, newList]);

    setNickName("");
    setContents("");
  };

  return (
    <form onSubmit={onSubmit}>
      <span>닉네임</span>
      <Input value={nickName} setValue={setNickName} />
      <span>내용</span>
      <Input value={contents} setValue={setContents} />
      <Button />
    </form>
  );
}
