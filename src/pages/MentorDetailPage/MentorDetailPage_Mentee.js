import React from "react";
import { useState } from "react";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY, PRIMARY } from "../../colors";
import Header from "../../components/Header/HeaderMentee";
import styled from "styled-components";
import ProfileImg from "../../assets/images/profile.png";
import StarIcon from "../../assets/images/Star.png";
import NoteIcon from "../../assets/images/note_icon.png";
import { Button, Typography } from "antd";
import ReviewSlider from "../../components/Mentor/ReviewSlider";
import MentorReserveModal from "../../components/Mentor/MentorReserveModal";
import MentorReviewModal from "../../components/Mentor/MentorReviewModal";
import Bunting from "../../assets/images/buntingIcon.png";

const MentorDetailPageMentee = () => {
  const [modalReserveOpen, setModalReserveOpen] = useState(false);
  const openReserveModal = () => {
    setModalReserveOpen(true);
  };
  const closeReserveModal = () => {
    setModalReserveOpen(false);
  };

  const [modalReviewOpen, setModalReviewOpen] = useState(false);
  const openReviewModal = () => {
    setModalReviewOpen(true);
  };
  const closeReviewModal = () => {
    setModalReviewOpen(false);
  };

  return (
    <Root>
      <Header></Header>
      <Container>
        <Profilecontainer>
          <Mentorcontainer>
            <BuntingImg src={Bunting} alt='Bunting Icon' />
            <MentorProfileImg src={ProfileImg} />
            <RateContainer>
              <RateStarImg src={StarIcon}></RateStarImg>
              <RateTypo>4.5</RateTypo>
              <ReviewTypo>진행한 상담 105건</ReviewTypo>
            </RateContainer>
          </Mentorcontainer>
          <Infocontainer>
            <MentorNameTypo>치와와교수</MentorNameTypo>
            <MentorEducationTypo>동국대 컴퓨터공학과 3학년</MentorEducationTypo>
            <MentorIntroTypo>
              서울 수도권 대학 6개 논술 지원해 전부 합격했습니다. 과탐 논술은
              물리 기하 및 벡터는 거의 공부 안하고 기출만 풀었어요. 친절하고
              성의있게 상담해드립니다. 내신 안 좋은 분 최저 없는 논술 도전하시는
              분 환영합니다.
            </MentorIntroTypo>
            <ButtonContainer>
              <ReserveButton onClick={openReserveModal}>
                상담 예약하기 →
              </ReserveButton>
              <MentorReserveModal
                isOpen={modalReserveOpen}
                closeModal={closeReserveModal}
              />
            </ButtonContainer>
          </Infocontainer>
        </Profilecontainer>
        <Reviewcontainer>
          <TextContainer>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <IconImg src={NoteIcon} />
              <ReviewTypo2>후기 26개</ReviewTypo2>
            </div>
            <WriteReviewButtonContainer onClick={openReviewModal}>
              <WriteReviewTypo>후기 작성하기</WriteReviewTypo>
            </WriteReviewButtonContainer>
            <MentorReviewModal
              isOpen={modalReviewOpen}
              closeModal={closeReviewModal}
            />
          </TextContainer>
          <ReviewSlider />
        </Reviewcontainer>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px; //헤더 높이만큼 padding
  position: relative;
  background-color: ${GRAY.LIGHT};
`;

const Container = styled.div`
  flex-direction: column;
  width: ${CONTAINER_WIDTH}px;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const BuntingImg = styled.img`
  width: 50px;
  height: 60px;
  position: absolute;
  left: 100px;
`;

const Profilecontainer = styled.div`
  position: relative;
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
  position: relative;
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

const WriteReviewButtonContainer = styled.div`
  cursor: pointer;
`;

const WriteReviewTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  text-decoration: underline;
  color: ${GRAY.DARK};
`;

const MentorNameTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  font-weight: 700;
  padding-bottom: 7px;
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

const ButtonContainer = styled.div``;

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

const ReserveButton = styled(Button)`
  background-color: ${PRIMARY.DEFAULT};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${PRIMARY.LIGHT};
  }
`;

export default MentorDetailPageMentee;
