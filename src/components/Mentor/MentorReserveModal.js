import styled from "styled-components";
import { GRAY, PRIMARY } from "../../colors";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import ProImg from "../../assets/images/profile.png";
import "react-datepicker/dist/react-datepicker.css";
import { Typography } from "antd";
import axios from "axios";

const MentorReserveModal = ({ isOpen, closeModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeList, setTimeList] = useState();

  useEffect(() => {  // 조회하는거
    const getPathLastSegment = () => {
      const pathArray = window.location.pathname.split('/');
      return pathArray[pathArray.length - 1];
    };
  
    const mentorId = getPathLastSegment(); 

    const getReserve = () => {
      axios.get(`http://localhost:8080/mentor-profile/request/${mentorId}`).then((res) => {
      
      console.log(res);
      if (Array.isArray(res.data)) { //데이터가 빈배열로 넘어오다보니 자바스크립트가 object로 오판단
        // 그래서 빈 배열인 경우, 빈 배열로 넣어주기 위해서 array 판단
        setTimeList(res.data);
      } else {
        setTimeList([]); //빈 배열로 넣음
      }
      
    }).catch((error) =>{
      console.error('Axios Error', error);
    })
    }
    getReserve();
  },[]);

  const clickHandler = () => { //진행중인 api , 클릭하는 순간 진행
    const getPathLastSegment = () => {
      const pathArray = window.location.pathname.split('/');
      return pathArray[pathArray.length - 1];
    };
  
    const mentorId = getPathLastSegment();
    
    axios.post(`http://localhost:8080/mentor-profile/request/${mentorId}`).then((res) => { // post로
      console.log("success", res); //selectedTime => 해당 페이지에서 selectedTime으로 선택된것을 post로 보냄
    }).catch((error) => {
      console.error('Axios Error', error)
    })
  } 

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

  const handleTimeButtonClick = (time) => {
    setStartDate((prevDate) => {
      const newDate = new Date(prevDate);
      const [hours, minutes] = time.split(":");
      newDate.setHours(parseInt(hours, 10));
      newDate.setMinutes(parseInt(minutes, 10));
      setSelectedTime(time);
      return newDate;
    });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={Modalstyle}>
      <Root>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <Container>
          <TitleTypo>
            <span>치와와교수</span>의 상담 예약하기
          </TitleTypo>
          <ProfileContainer>
            <ProfileContainer2>
              <MentorProfileImg src={ProImg} />
              <EduTypo>동국대 컴퓨터공학과</EduTypo>
            </ProfileContainer2>
            <InfoTypo>
              서울 수도권 대학 6개 논술 지원해 전부 합격했습니다. 과탐 논술은
              물리 기하 및 벡터는 거의 공부 안하고 기출만 풀었어요. 친절하고
              성의있게 상담해드립니다. 내신 안 좋은 분 최저 없는 논술 도전하시는
              분 환영합니다.
            </InfoTypo>
          </ProfileContainer>
          <DateContainer>
            <DatePickerContainer>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale='pt-BR'
                timeFormat='p'
                timeIntervals={30}
                dateFormat='Pp'
                inline
                minDate={new Date()}
              />
            </DatePickerContainer>
            <TimeContainer>
              <MenuTypo>상담 시간 선택</MenuTypo>
              <TimeSelection>
                {/* {timeOptions.map((time) => ( */}
                {timeList?.map((time) => (
                  <TimeButton
                    key={time}
                    onClick={() => handleTimeButtonClick(time)}
                    selected={time === selectedTime}
                  >
                    {time}
                  </TimeButton>
                ))}
              </TimeSelection>
              <MenuTypo>선택한 시간</MenuTypo>
              <SelectedTime>{startDate.toLocaleString().slice(0, -3)}</SelectedTime>
              <ReserveButtonStyled onClick={() => {clickHandler()}}>상담 신청하기 →</ReserveButtonStyled>
            </TimeContainer>
          </DateContainer>
        </Container>
      </Root>
    </Modal>
  );
};

const Root = styled.div`
  width: 900px;
  height: 600px;
  position: relative;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 83%;
`;

const TimeContainer = styled.div``;

const ProfileContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
`;

const ProfileContainer2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimeSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const DatePickerContainer = styled.div`
  height: 220px;
  margin-right: 50px;
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

const MentorProfileImg = styled.img`
  width: 250px;
  height: 125px;
  object-fit: cover;
  border-radius: 200px;
  padding: 0px 30px;
  padding-bottom: 20px;
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

const SelectedTime = styled.div`
  font-size: 16px;
`;


const TitleTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 18px;
  span {
    padding-right: 1px;
    font-weight: 700;
  }
`;

const EduTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 16px;
  color: ${GRAY.DARK};
`;

const InfoTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 16px;
  padding-right: 20px;
`;

const MenuTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 18px;
`;

const ReserveButtonStyled = styled.button`
  background-color: ${PRIMARY.DEFAULT};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 20px; 
  right: 20px; 

  &:hover {
    background-color: ${PRIMARY.LIGHT};
  }
`;


export default MentorReserveModal;
