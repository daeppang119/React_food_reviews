import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import styled from "styled-components";

const StUl = styled.ul`
  display: flex;
`;

export default function Main() {
  const [lists, setLists] = useState([]);

  const regions = ["서울", "경기", "인천", "대구", "부산", "제주"];

  const [isRegionShown, setIsRegionShown] = useState(true);
  const [isSeoulShown, setIsSeoulShown] = useState(true);
  const [isSuwonShown, setIsSuwonShown] = useState(true);
  const [isIncheonShown, setIsIncheonShown] = useState(true);
  const [isDaeguShown, setIsDaeguShown] = useState(true);
  const [isBusanShown, setIsBusanShown] = useState(true);
  const [isJejuShown, setIsJejuShown] = useState(true);

  return (
    <div>
      <StUl>
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
      </StUl>
      <Form list={lists} setList={setLists} regions={regions} />
      {isSeoulShown === true ? (
        <List
          list={lists.filter(
            (regionsItem) => regionsItem.region === regions[0]
          )}
          setList={setLists}
        />
      ) : (
        ""
      )}
      {isSuwonShown === true ? (
        <List
          list={lists.filter((regionsItem) => {
            return regionsItem.region === regions[1];
          })}
          setList={setLists}
        />
      ) : (
        ""
      )}
      {isIncheonShown === true ? (
        <List
          list={lists.filter(
            (regionsItem) => regionsItem.region === regions[2]
          )}
          setList={setLists}
        />
      ) : (
        ""
      )}
      {isDaeguShown === true ? (
        <List
          list={lists.filter(
            (regionsItem) => regionsItem.region === regions[3]
          )}
          setList={setLists}
        />
      ) : (
        ""
      )}
      {isBusanShown === true ? (
        <List
          list={lists.filter(
            (regionsItem) => regionsItem.region === regions[4]
          )}
          setList={setLists}
        />
      ) : (
        ""
      )}
      {isJejuShown === true ? (
        <List
          list={lists.filter(
            (regionsItem) => regionsItem.region === regions[5]
          )}
          setList={setLists}
        />
      ) : (
        ""
      )}
    </div>
  );
}
