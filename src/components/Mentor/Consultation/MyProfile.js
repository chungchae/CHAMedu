import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Button, Typography, Tag, ConfigProvider } from "antd";
import ProfileImg from "../../../assets/images/profile.png";
import StarIcon from "../../../assets/images/Star.png";
import MentorModifyModal from "../../../components/Mentor/MentorModifyModal";
import ChatModal from "../../Chat/ChatModal";
import NoteIcon from "../../../assets/images/note_icon.png";
import Person from "../../../assets/images/mypage_person.png";
import { CONTAINER_WIDTH } from "../../../assets/system/layout";
import { GRAY, PRIMARY } from "../../../colors";
import { translateAdmission } from "../../../utils/translate";
import { getAdmissionColor } from "../../../utils/color";
import axios from "axios";

const MyProfile = () => {
  const [modalModifyOpen, setModalModifyOpen] = useState(false);
  //멘토 정보 데이터
  const [mentorData, setMentorData] = useState({});
  //예정 상담 데이터
  const [planData, setPlanData] = useState();

  const openModifyModal = () => {
    setModalModifyOpen(true);
  };
  const closeModifyModal = () => {
    setModalModifyOpen(false);
  };

  const [chatModalOpen, setChatModalOpen] = useState(false);
  const openChatModal = () => {
    setChatModalOpen(true);
  };
  const closeChatModal = () => {
    setChatModalOpen(false);
  };

  //멘토 데이터 API
  const getMentorMypageData = () => {
    axios
      .get("/api/mentor-mypage", { withCredentials: true })
      .then((res) => {
        console.log("Response:", res);
        setMentorData(res.data);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        console.log("Full Axios Response:", error.response);
      });
  };

  //예정 상담 데이터 API
  const getChatPlanData = () => {
    axios
      .get("/api/mentor-mypage/chat-plans", { withCredentials: true })
      .then((res) => {
        console.log("플랜데이터:", res);
        setPlanData(res.data);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        console.log("Full Axios Response:", error.response);
      });
  };

  useEffect(() => {
    getMentorMypageData();
    getChatPlanData();
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY.DEFAULT,
        },
      }}
    >
      <Time>
        <IconImg src={NoteIcon} />
        <span>3시간 17분</span> 뒤 상담이 예정되어 있어요.
        <TimeSpan>확인하기</TimeSpan>
      </Time>
      <Container>
        <Profilecontainer>
          <Mentorcontainer>
            <MentorProfileImg src={/* mentorData.userImg ||  */ ProfileImg} />
            <RateContainer>
              <RateStarImg src={StarIcon}></RateStarImg>
              <RateTypo>{mentorData.avgScore}</RateTypo>
              <ReviewTypo>
                진행한 상담 {mentorData.requestRoomCount}건
              </ReviewTypo>
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
              <DepartmentTag
                color={getAdmissionColor(mentorData.admissionType)}
              >
                {translateAdmission(mentorData.admissionType)}
              </DepartmentTag>
            </div>

            <MentorEducationTypo>{mentorData.university}</MentorEducationTypo>
            <MentorIntroTypo>{mentorData.promotionText}</MentorIntroTypo>
            <ButtonContainer>
              <ModifyButton onClick={openModifyModal}>
                프로필 수정하기
              </ModifyButton>
              <MentorModifyModal
                mentorData={mentorData}
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
          {planData && planData.length > 0 ? (
            planData.map((plan, index) => (
              <RequestWrapper key={index}>
                <RequestUserWrapper>
                  <RequestImageWrapper>
                    <RequestImage src={Person} alt='Image' />
                    <div>{plan.menteeName}</div>
                  </RequestImageWrapper>
                  <div>{plan.startDate}</div>
                  <div>{plan.durationTime}</div>
                  <div>{plan.chatTitle}</div>
                </RequestUserWrapper>
                <ChatButton onClick={openChatModal}>채팅 조회</ChatButton>
                {/* <ChatModal
                isOpen={chatModalOpen}
                closeModal={closeChatModal}
                roomId={plan.roomId}
              /> */}
              </RequestWrapper>
            ))
          ) : (
            <NoPlanMessage>예정된 상담이 없습니다.</NoPlanMessage>
          )}
        </Waitingcontainer>
      </Container>
    </ConfigProvider>
  );
};

const ChatButton = styled(Button)`
font-family: "esamanru";`;

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
  position: relative;
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
font-family: "esamanru";
position: absolute;
right: 30px;
bottom: 30px;
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

const NoPlanMessage = styled.div`
  font-size: 18px;
  color: #999;
  margin-bottom: 20px;
`;

export default MyProfile;
