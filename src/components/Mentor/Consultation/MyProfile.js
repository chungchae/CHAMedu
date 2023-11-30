import styled from "styled-components";
import React, {useState} from 'react';
import { Button, Typography, Tag } from "antd";
import ProfileImg from "../../../assets/images/profile.png";
import StarIcon from "../../../assets/images/Star.png";
import MentorModifyModal from "../../../components/Mentor/MentorModifyModal";
import NoteIcon from "../../../assets/images/note_icon.png";
import ReviewSlider from "../ReviewSlider";


import {CONTAINER_WIDTH, HEADER_HEIGHT} from "../../../assets/system/layout";
import {GRAY, PRIMARY} from '../../../colors';

const MyProfile = () => {
  const [modalModifyOpen, setModalModifyOpen] = useState(false);
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
                <MentorProfileImg src={ProfileImg} />
                <RateContainer>
                    <RateStarImg src={StarIcon}></RateStarImg>
                    <RateTypo>4.5</RateTypo>
                    <ReviewTypo>진행한 상담 105건</ReviewTypo>
                </RateContainer>
                </Mentorcontainer>
                <Infocontainer>
                <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
                 <MentorNameTypo>치와와교수</MentorNameTypo>
                 <DepartmentTag color={"#99DDEC"}>논술</DepartmentTag>
               </div>

            <MentorEducationTypo>동국대 컴퓨터공학과 3학년</MentorEducationTypo>
                <MentorIntroTypo>
                    서울 수도권 대학 6개 논술 지원해 전부 합격했습니다. 과탐 논술은
                    물리 기하 및 벡터는 거의 공부 안하고 기출만 풀었어요. 친절하고
                    성의있게 상담해드립니다. 내신 안 좋은 분 최저 없는 논술 도전하시는
                    분 환영합니다.
                </MentorIntroTypo>
                <ButtonContainer>
                <ModifyButton onClick={openModifyModal}>
                프로필 수정하기
                </ModifyButton>
                <MentorModifyModal
                isOpen={modalModifyOpen}
                closeModal={closeModifyModal}
              />
            </ButtonContainer>
                </Infocontainer>
            </Profilecontainer>
            <Reviewcontainer>
                <TextContainer>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <IconImg src={NoteIcon} />
                    <ReviewTypo2>예정된 상담</ReviewTypo2>
                </div>
                
                </TextContainer>
                <ReviewSlider />
            </Reviewcontainer>
            </Container>
        </>
    );
}

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

const Reviewcontainer = styled.div`
  padding: 20px 0px;
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
  border-radius: 200px;
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
export default MyProfile;