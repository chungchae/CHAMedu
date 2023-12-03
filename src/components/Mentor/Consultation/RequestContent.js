import styled from "styled-components";
import React from "react";
import Person from "../../../assets/images/mypage_person.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button, ConfigProvider, Typography } from "antd";
import { PRIMARY } from "../../../colors";

const RequestContent = () => {
  //상담 신청 데이터
  const [requestData, setRequestData] = useState([]);

  //상담 신청 목록 API
  const getChatRequestData = () => {
    axios
      .get("/api/mentor-mypage/chat-request", { withCredentials: true })
      .then((res) => {
        console.log("신청데이터:", res);
        setRequestData(res.data);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        console.log("Full Axios Response:", error.response);
      });
  };

  //상담 수락 API
  const acceptChatRequest = (roomId) => {
    const requestData = { roomId, answer: true };
    axios
      .post("/api/mentor-mypage/chat-request/answer", requestData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("상담 수락 성공:", res);
      })
      .catch((error) => {
        console.error("상담 수락 실패:", error);
        console.log("Full Axios Response:", error.response);
      });
  };

  //상담 거절 API
  const refuseChatRequest = (roomId) => {
    const requestData = { roomId, answer: false };
    axios
      .post("/api/mentor-mypage/chat-request/answer", requestData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("상담 거절 성공:", res);
      })
      .catch((error) => {
        console.error("상담 거절 실패:", error);
        console.log("Full Axios Response:", error.response);
      });
  };

  //페이지가 렌더링될 때
  useEffect(() => {
    getChatRequestData();
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY.DEFAULT,
        },
      }}
    >
      <RoundedBox>
        <HeaderText>상담 수락 대기 목록</HeaderText>
        {requestData.map((request, index) => (
          <RequestWrapper key={index}>
            <RequestUserWrapper>
              <RequestImageWrapper>
                <RequestImage src={Person} alt='Image' />
                <NameTypo>{request.menteeName}</NameTypo>
              </RequestImageWrapper>
              <ContentTypo>{request.startDate}</ContentTypo>
              <ContentTypo>{request.durationTime}</ContentTypo>
              <ContentTypo>{request.chatTitle}</ContentTypo>
            </RequestUserWrapper>

            <RequestButtonWrapper>
              <RequestButton1
                type='primary'
                onClick={() => acceptChatRequest(request.roomId)}
              >
                수락
              </RequestButton1>
              <RequestButton2 onClick={() => refuseChatRequest(request.roomId)}>
                거절
              </RequestButton2>
            </RequestButtonWrapper>
          </RequestWrapper>
        ))}
      </RoundedBox>
    </ConfigProvider>
  );
};

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
  padding-bottom: 30px;
  padding-left: 20px;
  font-family: "esamanru";
`;

const NameTypo = styled(Typography)`
  width: 80px;
  font-size: 15px;
`;

const ContentTypo = styled(Typography)`
  font-size: 15px;
`;

const RequestButton2 = styled(Button)`
  border-radius: 15px;
`;

const RequestButton1 = styled(Button)`
  border-radius: 15px;
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
  margin-bottom: 10px;
  justify-content: space-between;
  font-weight: 900;
`;

export default RequestContent;
