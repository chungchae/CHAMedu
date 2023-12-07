import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { Typography, Button, ConfigProvider, message } from "antd";
import { GRAY, PRIMARY } from "../../colors";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

const ReportModal = ({ roomId, isOpen, closeModal }) => {
  const [detail, setDetail] = useState("");
  const userId = sessionStorage.getItem("userId");

  //신고 POST API
  const ReportPost = () => {
    const data = {
      userId: userId,
      roomId: roomId,
      reportDetail: detail,
    };
    console.log("전송 데이터:", data);
    axios
      .post("/api/report/upload", data)
      .then((response) => {
        console.log("Report Upload API Response:", response.data);

        closeModal(); // 모달 창 닫기
        message.success("신고가 접수되었습니다."); // 신고 성공 메시지 표시
      })
      .catch((error) => {
        console.error("Report Upload API Error:", error);
        throw error;
      });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY.DEFAULT,
        },
      }}
    >
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={Modalstyle}>
        <Root>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <Container>
            <TitleTypo>채팅방 신고하기</TitleTypo>
            <InfoTypo>신고 사유 작성</InfoTypo>
            <ContentBox
              placeholder='신고 사유를 입력해주세요.'
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            ></ContentBox>
            <SubmitButton onClick={ReportPost}>등록</SubmitButton>
          </Container>
        </Root>
      </Modal>
    </ConfigProvider>
  );
};

const SubmitButton = styled(Button)`
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

const TitleTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 18px;
`;
const InfoTypo = styled(Typography)`
  width: 100%;
  color: ${GRAY.DARK};
  font-family: "esamanru";
  font-size: 15px;
`;
const ContentBox = styled(TextArea)``;

const Root = styled.div`
  width: 900px;
  height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Modalstyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "35px",
  },
};

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: black;

  &:hover {
    color: ${PRIMARY.LIGHT};
  }
`;

export default ReportModal;
