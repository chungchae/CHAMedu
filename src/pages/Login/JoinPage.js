import React from "react";
import Header from "../../components/Header/HeaderGuest";
import styled from "styled-components";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { useNavigate } from "react-router-dom";
import Mentee from "../../assets/images/mentee.png";
import Mentor from "../../assets/images/mentor.png";

const JoinPage = () => {
  const navigate = useNavigate();

  const onBox1Click = () => {
    // Box1 클릭 시 수행할 작업 추가
    navigate('/mentee/join');
  }

  const onBox2Click = () => {
    // Box2 클릭 시 수행할 작업 추가
    navigate('/mentor/join');
    
  }
  const onClickLoginButton = () => {
    navigate('/user/login')
  }

  return (
    <Root>
      <Header />
       <Container>
        CHAMedu
      </Container>
      <Subtitle>
        바른 교육의 출발, 지금 시작해보세요!
      </Subtitle>
      <SubTitle2>당신은 어떤 분 인가요?</SubTitle2>
      
      <BoxWrapper>
        <Box1 onClick={onBox1Click}>
          <BoxDiv>저는 상담을 통해<br/>입시정보를 알고싶은</BoxDiv>
          <ImageWrapper src={Mentee} alt={"멘티"} />
          <BoxDiv><span>멘티 </span>입니다.</BoxDiv>
        </Box1>

        <Box1 onClick={onBox2Click}>
          <BoxDiv>저는 상담을 통해<br/>입시정보를 공유하고싶은</BoxDiv>
          <ImageWrapper src={Mentor} alt={"멘토"} />
          <BoxDiv><span>멘토 </span>입니다.</BoxDiv>
        </Box1>
      </BoxWrapper>

      <AlreadySingup>
        <div>이미 회원이신가요?</div>
        <AlreadyButton onClick={onClickLoginButton}>로그인</AlreadyButton>
      </AlreadySingup>
    </Root>
  );
};

const AlreadyButton = styled.div`
    color: #fff;
    background-color: #4CAF4F;
    width: 50px;
    border-radius: 8px;
    padding: 10px 8px;
`;

const AlreadySingup = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    gap: 40px;
    border-top: 1px solid gray;
    margin-top: 40px;
    padding-top: 40px;
    margin-bottom: 200px;
`;

const BoxDiv = styled.div`
    color: #000;
  font-size: 15px;
  font-weight: 700;
  margin-bottom:20px;
  text-align: center;

  & span {
    color: #4CAF4F;
  }
`;

const BoxWrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    width: 100%;
    gap: 40px;
    margin-top: 30px;
`;

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  position: relative;
`;

const Container = styled.div`
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  justify-content: center;
  background: white;
  font-size: 20px;
  margin-top: 10px;
  color: #4CAF4F;
  font-weight: bold;
`;

const ImageWrapper = styled.img`
  width: 250px;
  height: 250px;
  margin-bottom: 40px;
`;

const Subtitle = styled.div`
  font-size: 16px;
  color: #4CAF4F;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const SubTitle2 = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

const Box1 = styled.div`
  color: #fff;
  padding: 20px;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer; // 커서 모양 변경 (선택 사항)
  border: 1px solid gray;
  border-radius: 80px;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 70px 50px;
`;


export default JoinPage;