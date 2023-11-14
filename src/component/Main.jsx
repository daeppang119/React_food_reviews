import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function Main({ list, setList }) {
  console.log(list);
  const regions = ["서울", "수원", "인천", "대구", "부산", "제주"];

  // const [selectedRegion, setSelectedRegion] = useState("전국");
  const [isRegionShown, setIsRegionShown] = useState(true);
  const [isSeoulShown, setIsSeoulShown] = useState(true);
  const [isSuwonShown, setIsSuwonShown] = useState(true);
  const [isIncheonShown, setIsIncheonShown] = useState(true);
  const [isDaeguShown, setIsDaeguShown] = useState(true);
  const [isBusanShown, setIsBusanShown] = useState(true);
  const [isJejuShown, setIsJejuShown] = useState(true);

  return (
    <>
      <ul>
        <li>
          <a
            onClick={() => {
              setIsRegionShown(true);
              setIsSeoulShown(true);
              setIsSuwonShown(true);
              setIsIncheonShown(true);
              setIsDaeguShown(true);
              setIsBusanShown(true);
              setIsJejuShown(true);
            }}
          >
            전국
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsRegionShown(false);
              setIsSeoulShown(true);
              setIsSuwonShown(false);
              setIsIncheonShown(false);
              setIsDaeguShown(false);
              setIsBusanShown(false);
              setIsJejuShown(false);
            }}
          >
            서울
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsRegionShown(false);
              setIsSeoulShown(false);
              setIsSuwonShown(true);
              setIsIncheonShown(false);
              setIsDaeguShown(false);
              setIsBusanShown(false);
              setIsJejuShown(false);
            }}
          >
            경기
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsRegionShown(false);
              setIsSeoulShown(false);
              setIsSuwonShown(false);
              setIsIncheonShown(true);
              setIsDaeguShown(false);
              setIsBusanShown(false);
              setIsJejuShown(false);
            }}
          >
            인천
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsRegionShown(false);
              setIsSeoulShown(false);
              setIsSuwonShown(false);
              setIsIncheonShown(false);
              setIsDaeguShown(true);
              setIsBusanShown(false);
              setIsJejuShown(false);
            }}
          >
            대구
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsRegionShown(false);
              setIsSeoulShown(false);
              setIsSuwonShown(false);
              setIsIncheonShown(false);
              setIsDaeguShown(false);
              setIsBusanShown(true);
              setIsJejuShown(false);
            }}
          >
            부산
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIsRegionShown(false);
              setIsSeoulShown(false);
              setIsSuwonShown(false);
              setIsIncheonShown(false);
              setIsDaeguShown(false);
              setIsBusanShown(false);
              setIsJejuShown(true);
            }}
          >
            제주
          </a>
        </li>
      </ul>

      <Form list={list} setList={setList} regions={regions} />
      <h3>맛집리스트...🔥</h3>
      {isSeoulShown === true ? (
        <List
          list={list.filter((regionsItem) => regionsItem.region === regions[0])}
          setList={setList}
        />
      ) : (
        ""
      )}
      {isSuwonShown === true ? (
        <List
          list={list.filter((regionsItem) => {
            return regionsItem.region === regions[1];
          })}
          setList={setList}
        />
      ) : (
        ""
      )}
      {isIncheonShown === true ? (
        <List
          list={list.filter((regionsItem) => regionsItem.region === regions[2])}
          setList={setList}
        />
      ) : (
        ""
      )}
      {isDaeguShown === true ? (
        <List
          list={list.filter((regionsItem) => regionsItem.region === regions[3])}
          setList={setList}
        />
      ) : (
        ""
      )}
      {isBusanShown === true ? (
        <List
          list={list.filter((regionsItem) => regionsItem.region === regions[4])}
          setList={setList}
        />
      ) : (
        ""
      )}
      {isJejuShown === true ? (
        <List
          list={list.filter((regionsItem) => regionsItem.region === regions[5])}
          setList={setList}
        />
      ) : (
        ""
      )}
    </>
  );
}
