import Header from "../../components/Header/HeaderGuest";
import styled from "styled-components";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY } from "../../colors";
import { Typography } from "antd";
import MainImg from "../../assets/images/main.png";
import BottomImg1 from "../../assets/images/Bottom1.png";
import BottomImg2 from "../../assets/images/Bottom2.png";
import BottomImg3 from "../../assets/images/Bottom3.png";

const MainPage = () => {
  return (
    <Root>
      <Header />
      <Container>
        <MainContainer>
          <ContentContainer>
            <MainDiv>
              현재 CHAMedu에서 <br />
              <span style={{ color: "green" }}>117</span>명이 상담중이에요
            </MainDiv>
            <DivGray>
              CHAMedu 회원이 되어 입시 고민에 대한 이야기를 나눠보세요
            </DivGray>
            <ButtonSignup
              onClick={() => {
                console.log("회원가입 누를 시 발생");
              }}
            >
              회원가입
            </ButtonSignup>
          </ContentContainer>
          <Imgcontainer src={MainImg} alt={"메인 이미지"} />
        </MainContainer>
      </Container>

      <Middlebox>
        대학 입시를 마친 선배들과
        <br /> 입시 상담을 할 수 있어요
      </Middlebox>

      <ContentOne>
        <ContentWrapper>
          <BottomImgcontainer src={BottomImg1} alt={"하단 이미지1"} />
          <BottomDivContainer>
            <BottomDivTop>
              원하는 멘토를 선택해 <br />
              예약 상담을 진행 <br />
            </BottomDivTop>
            <BottomDivBottom>
              멘티의 학교,입시 전형을 통해
              <br />
              맞는 상담을 선택할 수 있어요
            </BottomDivBottom>
          </BottomDivContainer>
        </ContentWrapper>

        <ContentWrapper>
          <BottomImgcontainer src={BottomImg2} alt={"하단 이미지2"} />
          <BottomDivContainer>
            <BottomDivTop>
              간단한 상담을 통해 <br /> 수익 창출
            </BottomDivTop>
            <BottomDivBottom>
              본인이 경험했던 입시 정보를 나누고
              <br /> 포인트를 얻어 수익을 낼 수 있어요
            </BottomDivBottom>
          </BottomDivContainer>
        </ContentWrapper>

        <ContentWrapper>
          <BottomImgcontainer src={BottomImg3} alt={"하단 이미지3"} />
          <BottomDivContainer>
            <BottomDivTop>
              커뮤니티에서 <br /> 입시정보 교환
            </BottomDivTop>
            <BottomDivBottom>
              상담 후기와 커뮤니티에서 다른 사용자들의 <br /> 의견을 볼 수
              있어요
            </BottomDivBottom>
          </BottomDivContainer>
        </ContentWrapper>
      </ContentOne>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  position: relative;
  background-color: ${GRAY.LIGHT};
`;

const Container = styled.div`
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding-right: 500px; /* Imgcontainer와 ContentContainer 사이에 간격 */
`;

const Middlebox = styled(Typography)`
  font-size: 30px;
  width: 100%;
  font-family: "esamanru";
  padding-top: 40px;
  color: #000000;
  text-align: center;
  background-color: #ffffff;
`;

const Imgcontainer = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 30px;
`;
const BottomImgcontainer = styled.img`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
`;

const BottomDivContainer = styled.div`
  margin-top: 20px;
`;

const BottomDivTop = styled.div`
  font-size: 30px;
  text-align: center;
  font-family: "esamanru";
`;

const BottomDivBottom = styled.div`
  color: gray;
  margin-top: 10px;
  text-align: center;
  font-family: "esamanru";
`;

const ContentWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #f7f7f7;
  padding: 20px 30px;
  border-radius: 8px;
`;

const ContentOne = styled.div`
  padding-top: 75px;
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  background-color: #fff;
  padding-bottom: 100px;
`;

const MainDiv = styled.div`
  font-size: 30px;
  /*font-weight: 900;*/
  color: #000000;
  margin-top: 50px;
  font-family: "esamanru";
`;

const DivGray = styled.div`
  color: gray;
  padding-top: 20px;
  white-space: nowrap;
  font-family: "esamanru";
`;

const ButtonSignup = styled.div`
  background-color: #4caf4f;
  color: #fff;
  width: 60px;
  padding: 10px 20px;
  border-radius: 6px;
  margin-top: 25px;
  margin-bottom: 100px;
  font-size: 15px;
  font-family: "esamanru";
`;

export default MainPage;
