import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

import styled from "styled-components";

const StMain = styled.div`
  width: 25rem;
`;

const StUl = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const StClick = styled.li`
  position: relative;
  color: ${(porps) => (!porps.region ? "#333" : "#ea9e94")};
  cursor: pointer;
  &:hover {
    color: #ea9e94;
  }
`;

const StNoInformation = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Main({ lists, setLists }) {
  const regions = ["서울", "경기", "인천", "대구", "부산", "제주"];

  const [seletedRegion, setSeletedRegion] = useState("전국");

  const filterList = lists.filter((regionsItem) => {
    if (seletedRegion === "전국") {
      return regionsItem;
    }
    return regionsItem.region === seletedRegion;
  });

  return (
    <StMain>
      <StUl>
        <StClick
          region={seletedRegion === "전국"}
          onClick={() => {
            setSeletedRegion("전국");
          }}
        >
          전국
        </StClick>
        {regions.map((region) => {
          return (
            <StClick
              region={seletedRegion === region}
              onClick={() => {
                setSeletedRegion(region);
              }}
            >
              {region}
            </StClick>
          );
        })}
      </StUl>
      <Form list={lists} setList={setLists} regions={regions} />
      {filterList.length === 0 ? (
        <StNoInformation>
          {seletedRegion}지역의 정보가 없습니다.
        </StNoInformation>
      ) : (
        <List list={filterList} />
      )}
    </StMain>
  );
}
