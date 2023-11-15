import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Profile from "../assets/profile.png";

const StComments = styled.li`
  border: 1px solid #666;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #ea9e94;
    color: #ea9e94;
  }
`;

const StProfile = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const StCon = styled.div`
  width: 10rem;
`;

const StProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const StNickname = styled.p`
  font-size: 12px;
  line-height: 2;
`;

const StContext = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StDay = styled.p`
  font-size: 10px;
  line-height: 2;
`;

export default function List({ list }) {
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

  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`details/${id}`);
  };

  return (
    <div>
      <ul>
        {list.map((element) => {
          return (
            <StComments
              onClick={() => {
                goToDetail(element.id);
              }}
            >
              <StProfile>
                <StProfileImg src={Profile} alt="default profile " />
              </StProfile>
              <StCon>
                <StNickname>{element.nickname}</StNickname>
                <StContext>{element.context}</StContext>
                <StDay>{timeString}</StDay>
              </StCon>
            </StComments>
          );
        })}
      </ul>
    </div>
  );
}
