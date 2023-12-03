import styled from "styled-components";
import React, { useState } from "react";
import { Button, Typography, Tag } from "antd";
import ProfileImg from "../../../assets/images/profile.png";
import StarIcon from "../../../assets/images/Star.png";
import MentorModifyModal from "../../../components/Mentor/MentorModifyModal";
import NoteIcon from "../../../assets/images/note_icon.png";
import Person from "../../../assets/images/mypage_person.png";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../../assets/system/layout";
import { GRAY, PRIMARY } from "../../../colors";
import { useEffect } from "react";
import axios from "axios";
import { translateAdmission } from "../../../utils/translate";
import { getAdmissionColor } from "../../../utils/color";

const MyProfile = () => {
  const [modalModifyOpen, setModalModifyOpen] = useState(false);
  const [mentorData, setMentorData] = useState({});
  const openModifyModal = () => {
    setModalModifyOpen(true);
  };
  const closeModifyModal = () => {
    setModalModifyOpen(false);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const getMentorMypageData = () => {
    axios
      .get("/api/mentor-mypage", { withCredentials: true })
      .then((res) => {
        console.log("Response:", res);
        setMentorData(res.data);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        // Log the entire response for more details
        console.log("Full Axios Response:", error.response);
      });
  };

  useEffect(() => {
    getMentorMypageData();
  }, []);

  const imageList = [
    {
      imageName: Person,
      name: "이한별",
      date: "2023-11-14",
      time: "13:00~13:30",
      title: "동국대학교 논술 문제유형관련 질문",
      onAccept: () => console.log("Accepted 1"),
      onReject: () => console.log("Rejected 1"),
    },
    {
      imageName: Person,
      name: "홍길동",
      date: "2023-12-14",
      time: "20:00~20:30",
      title: "논술 수학 범위 관련 질문",
      onAccept: () => console.log("Accepted 1"),
      onReject: () => console.log("Rejected 1"),
    },
  ];
  return (
    <>
      <Time>
        <IconImg src={NoteIcon} />
        <span>3시간 17분</span> 뒤 상담이 예정되어 있어요.
        <TimeSpan>확인하기</TimeSpan>
      </Time>
      <Container>
        <Profilecontainer>
          <Mentorcontainer>
          <MentorProfileImg src={mentorData.userImg || ProfileImg} />
            <RateContainer>
              <RateStarImg src={StarIcon}></RateStarImg>
              <RateTypo>{mentorData.avgScore}</RateTypo>
              <ReviewTypo>진행한 상담 {mentorData.requestRoomCount}건</ReviewTypo>
            </RateContainer>
          </Mentorcontainer>
          <Infocontainer>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <MentorNameTypo>{mentorData.nickname}</MentorNameTypo>
              <DepartmentTag color={getAdmissionColor(mentorData.admissionType)}>{translateAdmission(mentorData.admissionType)}</DepartmentTag>
            </div>

            <MentorEducationTypo>{mentorData.university}</MentorEducationTypo>
            <MentorIntroTypo>{mentorData.promotionText}</MentorIntroTypo>
            <ButtonContainer>
              <ModifyButton onClick={openModifyModal}>
                프로필 수정하기
              </ModifyButton>
              <MentorModifyModal
                mentorData = {mentorData}
                isOpen={modalModifyOpen}
                closeModal={closeModifyModal}
              />
            </ButtonContainer>
          </Infocontainer>
        </Profilecontainer>

        <TextContainer>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <IconImg src={NoteIcon} />
            <ReviewTypo2>예정된 상담</ReviewTypo2>
          </div>
        </TextContainer>
        <Waitingcontainer>
          {imageList.map((image, index) => (
            <RequestWrapper key={index}>
              <RequestUserWrapper>
                <RequestImageWrapper>
                  <RequestImage src={Person} alt='Image' />
                  <div>{image.name}</div>
                </RequestImageWrapper>
                <div>{image.date}</div>
                <div>{image.time}</div>
                <div>{image.title}</div>
              </RequestUserWrapper>
            </RequestWrapper>
          ))}
        </Waitingcontainer>
      </Container>
    </>
  );
};

const Time = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  & span {
    font-weight: 900;
  }
`;

const TimeSpan = styled.span`
  margin-left: 20px;
  color: gray;
  text-decoration: underline;
`;

const Container = styled.div`
  flex-direction: column;
  width: ${CONTAINER_WIDTH}px;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`;

const Profilecontainer = styled.div`
  background-color: white;
  display: flex;
  margin: 30px 0px;
  border-radius: 20px;
  padding: 40px;
`;
const Waitingcontainer = styled.div`
  background-color: white;
  margin: 30px 0px;
  border-radius: 20px;
  padding: 20px;
`;

const Mentorcontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
`;

const Infocontainer = styled.div`
  padding: 10px;
  flex-direction: column;
`;

const MentorProfileImg = styled.img`
  width: 500px;
  height: 250px;
  object-fit: cover;
  border-radius: 100px;
  padding: 0px 30px;
  padding-bottom: 20px;
`;

const RateContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DepartmentTag = styled(Tag)`
  display: flex;
  align-items: center;
  height: 27px;
  border: none;
  font-size: 14px;
  color: white;
  font-family: "esamanru";
`;

const RateStarImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const RateTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 18px;
  font-weight: 700;
  padding-right: 8px;
`;

const ReviewTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  color: ${GRAY.DARK};
`;

const ReviewTypo2 = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
`;

const MentorNameTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  font-weight: 700;
  padding-bottom: 7px;
  padding-right: 10px;
`;

const MentorEducationTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  color: ${GRAY.DARK};
  padding-bottom: 7px;
`;

const MentorIntroTypo = styled(Typography)`
  font-size: 16px;
  font-family: "esamanru";
  font-weight: 100;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: "row";
  width: 100%;
  justify-content: space-between;
`;

const IconImg = styled.img`
  margin-right: 5px;
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

const ModifyButton = styled(Button)`
  margin-left: 345px;
  margin-top: 90px;
  color: ${PRIMARY.DEFAULT};
  &:hover {
    color: ${PRIMARY.DEFAULT}!important;
    border-color: ${PRIMARY.DEFAULT}!important;
  }
  &:focus {
    color: ${PRIMARY.DEFAULT}!important;
    border-color: ${PRIMARY.DEFAULT}!important;
  }
`;
const RequestWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 5px;
  padding: 20px;
  justify-content: space-between;
  font-weight: 900;
`;
const RequestUserWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 30px;
`;

const RequestImageWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const RequestImage = styled.img``;

export default MyProfile;
