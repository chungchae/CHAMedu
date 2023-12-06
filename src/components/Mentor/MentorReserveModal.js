import styled from "styled-components";
import { GRAY, PRIMARY } from "../../colors";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import ProImg from "../../assets/images/profile.png";
import "react-datepicker/dist/react-datepicker.css";
import { Input, Typography } from "antd";
import axios from "axios";

const MentorReserveModal = ({ isOpen, closeModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("11:00:00");
  const [timeList, setTimeList] = useState();
  const [consultationInfo, setConsultationInfo] = useState("논술 상담");
  console.log(selectedTime);
  const handleConsultationInfoChange = (e) => {
    setConsultationInfo(e.target.value);
  };

  useEffect(() => {
    // 조회하는거
    const getPathLastSegment = () => {
      const pathArray = window.location.pathname.split("/");
      return pathArray[pathArray.length - 1];
    };

    const mentorId = getPathLastSegment();
    //const userId = sessionStorage.getItem("userId");
    const getReserve = () => {
      axios
        .get(`http://localhost:8080/api/mentor-profile/request/${mentorId}`)
        .then((res) => {
          console.log(res);
          if (Array.isArray(res.data)) {
            //데이터가 빈배열로 넘어오다보니 자바스크립트가 object로 오판단
            // 그래서 빈 배열인 경우, 빈 배열로 넣어주기 위해서 array 판단
            setTimeList(res.data);
          } else {
            setTimeList([]); //빈 배열로 넣음
          }
        })
        .catch((error) => {
          console.error("Axios Error", error);
        });
    };
    getReserve();
  }, []);

  const clickHandler = () => {
    const getPathLastSegment = () => {
      const pathArray = window.location.pathname.split("/");
      return pathArray[pathArray.length - 1];
    };

    const mentorId = getPathLastSegment();

    // startDate 연도, 월, 일로 분리합니다.
    const [year, month, day] = startDate
      .toLocaleString()
      .slice(0, -3)
      .split(". ")
      .map(Number);

    // selectedTime을 시, 분, 초로 분리합니다.
    const [hours, minutes, seconds] = selectedTime?.split(":").map(Number);

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.log("@", formattedDate);

    const requestBody = {
      wishChatSchedule: formattedDate, // 여기에 선택된 시간을 포함 //13번째줄 저장한다음에 usestate
      chatTitle: consultationInfo,
    };
    const userId = sessionStorage.getItem("userId");
    axios
      .post(
        `http://localhost:8080/api/mentor-profile/request/${mentorId}/${userId}`,
        requestBody
      )
      .then((res) => {
        console.log("success", res);
      })
      .catch((error) => {
        console.error("Axios Error", error);
      });
  };

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
          {/* <ProfileContainer>
            <ProfileContainer2>
              <MentorProfileImg src={ProImg} />
              <EduTypo>동국대 컴퓨터공학과</EduTypo>
            </ProfileContainer2>
            <InfoTypo>
              <Input.TextArea
                value={consultationInfo}
                onChange={handleConsultationInfoChange}
                placeholder="상담 내용을 입력하세요"
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
            </InfoTypo>
          </ProfileContainer> */}
          <DateContainer>
            <DateWrapper>
              <DatePickerContainer>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  locale="pt-BR"
                  timeFormat="p"
                  timeIntervals={30}
                  dateFormat="Pp"
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
              </TimeContainer>
            </DateWrapper>
            <Wrapper>
              <TimeWrapper>
                <MenuTypo>선택한 시간</MenuTypo>
                <SelectedTime>
                  {startDate.toLocaleString().slice(0, -3)}
                </SelectedTime>
              </TimeWrapper>
              <StyledTextArea
                value={consultationInfo}
                onChange={handleConsultationInfoChange}
                placeholder="상담 내용을 입력하세요"
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
            </Wrapper>
            <ReserveButtonStyled
              onClick={() => {
                clickHandler();
              }}
            >
              상담 신청하기 →
            </ReserveButtonStyled>
          </DateContainer>
        </Container>
      </Root>
    </Modal>
  );
};

const TimeWrapper = styled.div`
  width: 250px;
`;

const DateWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 83%;
  margin-top: 30px;
  margin-bottom: 100px;
`;

const Gap = styled.div`
  width: 150px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const StyledTextArea = styled(Input.TextArea)`
  width: 50%; // 너비 조정
  max-width: 500px; // 최대 너비 설정
  margin-top: 20px; // 상단 여백
  // 기타 필요한 스타일 속성 추가
`;

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
  width: 100%;
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
  font-size: 35px;
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