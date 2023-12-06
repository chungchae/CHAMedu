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
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import axios from "axios";

const MenteeModifyModal = ({ mentorData, isOpen, closeModal }) => {
  const [nickname, setNickname] = useState(""); //닉네임
  const [university, setUniversity] = useState(""); //동국대 컴퓨터공학과
  const [promotionText, setPromotionText] = useState(""); //자기소개
  const [admissionSelect, setAdmissionSelect] = useState(""); //전형 옵션
  const [collegeSelect, setCollegeSelect] = useState(""); //단과대 옵션


  const data = { //API에 전송할 data 정의
    nickName: nickname,
    info: promotionText,
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

  useEffect(() => {
    console.log("멘토데이터!!", mentorData);
    setNickname(mentorData.nickname || "");
    setUniversity(mentorData.university || "");
    setPromotionText(mentorData.promotionText || "");

    setAdmissionSelect(mentorData.admissionType || "");
    setCollegeSelect(mentorData.university || "");
  }, [mentorData]);



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
            <TitleTypo>
              <span>{mentorData.nickname}</span>의 프로필 수정하기
            </TitleTypo>
            <InfoContainer>
              <MentorProfileImg src={ProImg} />
              <InfoContainer2>
                <InfoTypo>닉네임</InfoTypo>
                <InfoInput
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <InfoTypo>자기소개</InfoTypo>
                <ContentInput
                  value={promotionText}
                  onChange={(e) => setPromotionText(e.target.value)}
                />
               
              </InfoContainer2>
            </InfoContainer>
            
            <ModifyButton onClick={() => MentorModifyApi(data)}>
              프로필 수정하기
            </ModifyButton>
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

const InfoContainer = styled.div`
    margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InfoContainer2 = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-right: 2cqh;
`;

const InfoInput = styled(Input)``;

const ContentInput = styled(TextArea)`
  height: 200px;
  vertical-align: top;
`;

const InfoTypo = styled(Typography)`
  padding: 5px 0px;
  font-family: "esamanru";
  font-size: 17px;
`;

const MentorProfileImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  margin-right: 50px;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const TimeSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TimeButton = styled.button`
  margin: 5px;
  padding: 8px;
  background-color: ${(props) => (props.selected ? PRIMARY.LIGHT : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border: 1px solid ${PRIMARY.LIGHT};
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${PRIMARY.LIGHT};
    color: white;
  }
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

const TitleTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 18px;
  span {
    padding-right: 1px;
    font-weight: 700;
  }
`;

const SelectBox = styled(Select)`
  width: 150px;
`;

const ModifyButton = styled(Button)`
  background-color: ${PRIMARY.LIGHT};
  color: white;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export default MenteeModifyModal;