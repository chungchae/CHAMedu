import React from "react";
import Header from "../../components/Header/HeaderGuest";
import styled from "styled-components";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { useNavigate } from "react-router-dom";
import Mentee from "../../assets/images/mentee.png";
import Mentor from "../../assets/images/mentor.png";
import { GRAY, PRIMARY } from "../../colors";

const JoinPage = () => {
  const navigate = useNavigate();

  const onBox1Click = () => {
    navigate("/mentee/join");
  };

  const onBox2Click = () => {
    navigate("/mentor/join");
  };
  const onClickLoginButton = () => {
    navigate("/user/login");
  };

  return (
    <Root>
      <Header />
      <Container>
        <CHAMeduTypo>CHAMedu</CHAMeduTypo>
        <Subtitle>바른 교육의 출발, 지금 시작해보세요!</Subtitle>
        <SubTitle2>당신은 어떤 분 인가요?</SubTitle2>

        <BoxWrapper>
          <Box1 onClick={onBox1Click}>
            <BoxDiv>
              저는 상담을 통해
              <br />
              입시정보를 알고싶은
            </BoxDiv>
            <ImageWrapper src={Mentee} alt={"멘티"} />
            <BoxDiv>
              <span>멘티 </span>입니다.
            </BoxDiv>
          </Box1>

          <Box1 onClick={onBox2Click}>
            <BoxDiv>
              저는 상담을 통해
              <br />
              입시정보를 공유하고싶은
            </BoxDiv>
            <ImageWrapper src={Mentor} alt={"멘토"} />
            <BoxDiv>
              <span>멘토 </span>입니다.
            </BoxDiv>
          </Box1>
        </BoxWrapper>

        <AlreadySingup>
          <div>이미 회원이신가요?</div>
          <AlreadyButton onClick={onClickLoginButton}>로그인</AlreadyButton>
        </AlreadySingup>
      </Container>
    </Root>
  );
};

const AlreadyButton = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${GRAY.DEFAULT};
  width: 50px;
  border-radius: 8px;
  padding: 7px 8px;
  cursor: pointer;
`;

const AlreadySingup = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  gap: 20px;
  border-top: 1px solid gray;
  margin-top: 40px;
  padding-top: 40px;
  margin-bottom: 200px;
  font-family: "esamanru";
`;

const BoxDiv = styled.div`
  color: #000;
  font-size: 19px;
  text-align: center;
  font-family: "esamanru";
  & span {
    color: #4caf4f;
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
  flex-direction: column;
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

const CHAMeduTypo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  color: #4caf4f;
  font-weight: bold;
  font-family: "esamanru";
  padding-top: 30px;
`;

const ImageWrapper = styled.img`
margin: 20px 0px;;
  width: 250px;
  height: 250px;
  margin-bottom: 40px;
`;

const Subtitle = styled.div`
margin-top: 10px;
  font-size: 20px;
  color: #4caf4f;
  margin-bottom: 50px;
  font-family: "esamanru";
`;

const SubTitle2 = styled.div`
  font-size: 20px;
  font-family: "esamanru";
`;

const Box1 = styled.div`
  color: #fff;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #d3d3d3;
  border-radius: 50px;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 60px 50px;
  &:hover {
    border: 1px solid ${PRIMARY.LIGHT};
    box-shadow: 0 0 3px ${PRIMARY.LIGHT};
  }
`;

export default JoinPage;
