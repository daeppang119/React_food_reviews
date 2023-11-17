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
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const StCon = styled.div`
  width: 18rem;
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
                <StDay>{element.time}</StDay>
              </StCon>
            </StComments>
          );
        })}
      </ul>
    </div>
  );
}
