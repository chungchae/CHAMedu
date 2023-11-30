import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { Input, Typography, Button, ConfigProvider, Select } from "antd";
import { PRIMARY } from "../../colors";
import ProImg from "../../assets/images/profile.png";
import TextArea from "antd/es/input/TextArea";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MentorModifyModal = ({ isOpen, closeModal }) => {
  const [nickname, setNickname] = useState("");
  const [education, setEducation] = useState("");
  const [college, setCollege] = useState("");
  const [intro, setIntro] = useState("");
  const [admissionSelect, setAdmissionSelect] = useState(""); //전형 옵션
  const [collegeSelect, setCollegeSelect] = useState(""); //단과대 옵션

  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const admissionOptions = [
    { value: "학종", label: "학종" },
    { value: "정시", label: "정시" },
    { value: "교과", label: "교과" },
    { value: "논술", label: "논술" },
  ];
  const collegeOptions = [
    { value: "공과대", label: "공과대" },
    { value: "자연대", label: "자연대" },
    { value: "문과대", label: "문과대" },
    { value: "예대", label: "예대" },
    { value: "체대", label: "체대" },
  ];

  const timeOptions = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  const handleAdmissionChange = (option) => {
    setAdmissionSelect(option);
  };
  const handleCollegeChange = (option) => {
    setCollegeSelect(option);
  };

  const handleTimeButtonClick = (time) => {
    setStartDate((prevDate) => {
      const newDate = new Date(prevDate);
      const [hours, minutes] = time.split(":");
      newDate.setHours(parseInt(hours, 10));
      newDate.setMinutes(parseInt(minutes, 10));

      // Toggle the selection of the time slot
      setSelectedTimes((prevSelectedTimes) => {
        if (prevSelectedTimes.includes(time)) {
          // Deselect the time slot
          return prevSelectedTimes.filter(
            (selectedTime) => selectedTime !== time
          );
        } else {
          // Select the time slot
          return [...prevSelectedTimes, time];
        }
      });

      return newDate;
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
            <TitleTypo>
              <span>치와와교수</span>의 프로필 수정하기
            </TitleTypo>
            <InfoContainer>
              <MentorProfileImg src={ProImg} />
              <InfoContainer2>
                <InfoTypo>닉네임</InfoTypo>
                <InfoInput />
                <InfoTypo>학력</InfoTypo>
                <InfoInput />
                <InfoTypo>자기소개</InfoTypo>
                <ContentInput />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <SelectContainer>
                    <InfoTypo>입시 전형 선택</InfoTypo>
                    <SelectBox
                      onChange={(option) => handleAdmissionChange(option)}
                      placeholder='입시 전형 선택'
                      options={admissionOptions}
                    />
                  </SelectContainer>
                  <SelectContainer>
                    <InfoTypo>단과대 선택</InfoTypo>
                    <SelectBox
                      onChange={(option) => handleCollegeChange(option)}
                      placeholder='단과대 선택'
                      options={collegeOptions}
                    />
                  </SelectContainer>
                </div>
              </InfoContainer2>
            </InfoContainer>
            <TimeContainer>
            <InfoTypo style={{ marginLeft: "7px" }}>상담 가능 시간 선택</InfoTypo>
              <TimeSelection>
                {timeOptions.map((time) => (
                  <TimeButton
                    key={time}
                    onClick={() => handleTimeButtonClick(time)}
                    selected={selectedTimes.includes(time)}
                  >
                    {time}
                  </TimeButton>
                ))}
              </TimeSelection>
            </TimeContainer>
            <ModifyButton>프로필 수정하기</ModifyButton>
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

export default MentorModifyModal;
