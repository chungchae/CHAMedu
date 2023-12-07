import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import {
  Input,
  Typography,
  Button,
  ConfigProvider,
  Select,
  message,
} from "antd";
import { PRIMARY } from "../../colors";
import ProImg from "../../assets/images/profile.png";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

const ReportModal = ({ roomId, isOpen, closeModal }) => {
  const [detail, setDetail] = useState("");
  const userId = sessionStorage.getItem("userID");

  const data = { //API에 전송할 data 정의
    userId: userId,
    roomId: roomId,
    reportDetail: detail
  };

  const MentorModifyApi = (data) => {
    return axios
      .put("/api/mentee-mypage/profile/update", data)
      .then((response) => {
        console.log("Mentee Modify API Response:", response.data);
        
        closeModal(); // 모달 창 닫기
        window.location.replace("/user/mypage")
        message.success("수정 성공!"); // 수정 성공 메시지 표시
        return response.data;
      })
      .catch((error) => {
        console.error("Mentee Modify API Error:", error);
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
            
          </Container>
        </Root>
      </Modal>
    </ConfigProvider>
  );
};

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