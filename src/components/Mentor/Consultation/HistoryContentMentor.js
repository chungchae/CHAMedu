import styled from "styled-components";
import React from "react";
import Person from "../../../assets/images/mypage_person.png";
import { GRAY } from "../../../colors";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const HistoryContentMentor = () => {
  //상담 내역 데이터
  const [historyData, setHistoryData] = useState([]);

  //상담 내역 API
  const getChatRequestData = () => {
    axios
      .get("/api/mentor-mypage/chat-log", { withCredentials: true })
      .then((res) => {
        console.log("기록데이터:", res);
        setHistoryData(res.data);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        console.log("Full Axios Response:", error.response);
      });
  };

  //페이지가 렌더링될 때
  useEffect(() => {
    getChatRequestData();
  }, []);

  return (
    <>
      <RoundedBox>
        <div style={{ width: "100%" }}>
          <HeaderText>상담 내역</HeaderText>
          <SubText>채팅은 30일 이후 만료됩니다.</SubText>
        </div>
        {historyData.length === 0 ? (
          <NoHistoryMessage>상담 내역이 없습니다.</NoHistoryMessage>
        ) : (
          historyData.map((history, index) => (
            <RequestWrapper key={index}>
              <RequestUserWrapper>
                <RequestImageWrapper>
                  <RequestImage src={Person} alt="Image" />
                  <div>{history.userName}</div>
                </RequestImageWrapper>
                <div>{history.startTime}</div>
                <div>{history.title}</div>
              </RequestUserWrapper>

              <RequestButtonWrapper>
                <CompleteFalse>{history.checkStatus}</CompleteFalse>
              </RequestButtonWrapper>
            </RequestWrapper>
          ))
        )}
      </RoundedBox>
    </>
  );
};

const SubText = styled.div`
  font-size: 15px;
  padding-bottom: 30px;
  padding-left: 20px;
  font-family: "esamanru";
  color: ${GRAY.DARK};
`;

const CompleteFalse = styled.div`
  font-family: "esamanru";
  font-weight: 500;
  color: gray;
  text-decoration: underline;
`;

const RoundedBox = styled.div`
  background-color: white;
  height: auto;
  width: calc(100% - 150px);
  margin-top: 10px;
  margin-left: 50px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.div`
  width: 100%;
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  font-family: "esamanru";
`;

const RequestImageWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const RequestUserWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 30px;
`;

const RequestButtonWrapper = styled.div`
  display: inline-flex;
  gap: 10px;
`;

const RequestImage = styled.img``;

const RequestWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: calc(100% - 120px);
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 5px;
  padding: 20px;
  justify-content: space-between;
  font-weight: 900;
`;

const NoHistoryMessage = styled.div`
  font-size: 18px;
  color: #999;
  margin-bottom: 20px;
`;

export default HistoryContentMentor;