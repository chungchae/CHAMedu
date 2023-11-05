import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY, PRIMARY } from "../../colors";
import Header from "../../components/Header/HeaderMentee";
import styled from "styled-components";
import { useEffect, useState } from "react";
import ProfileImg from "../../assets/images/profile.png";
import { Typography } from "antd";

const MentorDetailPageMentee = () => {
  return (
    <Root>
      <Header></Header>
      <Container>
        <Profilecontainer>
          <Mentorcontainer>
            <MentorProfileImg src={ProfileImg} />
            <RateContainer></RateContainer>
          </Mentorcontainer>
        </Profilecontainer>
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Profilecontainer = styled.div`
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 30px;
  border-radius: 20px;
`;

const Mentorcontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const MentorProfileImg = styled.img`
  width:700px;
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

const RateTypo = styled(Typography)``;

export default MentorDetailPageMentee;
