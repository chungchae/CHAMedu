import React from "react";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY, PRIMARY } from "../../colors";
import Header from "../../components/Header/HeaderMentee";
import styled from "styled-components";
import ProfileImg from "../../assets/images/profile.png";
import StarIcon from "../../assets/images/Star.png";
import { Button, Typography } from "antd";
import ReviewSlider from "../../components/Mentor/ReviewSlider";

const MentorDetailPageMentee = () => {
  return (
    <Root>
      <Header></Header>
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
            <MentorNameTypo>치와와교수</MentorNameTypo>
            <MentorEducationTypo>동국대 컴퓨터공학과 3학년</MentorEducationTypo>
            <MentorIntroTypo>
              서울 수도권 대학 6개 논술 지원해 전부 합격했습니다. 과탐 논술은
              물리 기하 및 벡터는 거의 공부 안하고 기출만 풀었어요. 친절하고
              성의있게 상담해드립니다. 내신 안 좋은 분 최저 없는 논술 도전하시는
              분 환영합니다.
            </MentorIntroTypo>
            <ButtonContainer>
            <ReserveButton /></ButtonContainer>
          </Infocontainer>
        </Profilecontainer>
        <Reviewcontainer>
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
`;

const Profilecontainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  margin: 30px;
  border-radius: 20px;
  padding: 25px;
`;

const Reviewcontainer = styled.div``;

const Mentorcontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
`;

const Infocontainer = styled.div`
  flex-direction: column;
  background-color: black;
`;

const MentorProfileImg = styled.img`
  width: 500px;
  height: 200px;
  object-fit: cover;
  border-radius: 200px;
  padding: 30px;
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

const MentorNameTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  font-weight: 700;
`;

const MentorEducationTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  color: ${GRAY.DARK};
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

const ReserveButton = styled(Button)`
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

export default MentorDetailPageMentee;
