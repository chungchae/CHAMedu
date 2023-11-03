import Header from "../../components/Header/HeaderMentee";
import styled from "styled-components";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY } from "../../colors";
import { Typography } from "antd";
import MainImg from "../../assets/images/main.png"
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
            <HeaderTypo>현재 CHAMedu에서</HeaderTypo>
            <HeaderTypo>
              <span style={{ color: 'green' }}>117</span>명이 상담중이에요
            </HeaderTypo>
            <Headerbottom>
              CHAMedu 회원이 되어 입시 고민에 대한 이야기를 나눠보세요
            </Headerbottom>
          </ContentContainer>
          <Imgcontainer src={MainImg} alt={"메인 이미지"} />
        </MainContainer>
      </Container>

      <Middlebox>
        대학 입시를 마친 선배들과<br /> 입시 상담을 할 수 있어요
        
      </Middlebox>
      
      <ContentContainer>
      <BottomImgcontainer src={BottomImg1} alt={"하단 이미지1"} />
      </ContentContainer>
      <bottomcontainer>
        원하는 멘토를 선택해 <br /> 예약 상담을 진행
        <HeaderTypo>
        멘티의 학교,입시 전형을 통해 맞는 상담을 선택할 수 있어요
        </HeaderTypo>
      </bottomcontainer>
      <ContentContainer>
      <BottomImgcontainer src={BottomImg2} alt={"하단 이미지2"}/>
      <bottomcontainer>
        간단한 상담을 통해 <br/> 수익 창출
        <HeaderTypo>
        본인이 경험했던 입시 정보를 나누고<br/> 포인트를 얻어 수익을 낼 수 있어요
        </HeaderTypo>
      </bottomcontainer>
      </ContentContainer>
      <ContentContainer>
      <BottomImgcontainer src={BottomImg3} alt={"하단 이미지3"}/>
      <Bottomcontainer>
      커뮤니티에서 <br/> 입시정보 교환
        <HearderTypo>
        상담 후기와 커뮤니티에서 다른 사용자들의 <br/> 의견을 볼 수 있어요
        </HearderTypo>
      </Bottomcontainer>
      </ContentContainer>
      

      
     
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

const HeaderTypo = styled(Typography)`
  font-size: 24px;
  margin-top: 20px;
  overflow: hidden;
  font-family: "esamanru";
`;

const Headerbottom = styled(Typography)`
  font-size: 10px;
  font-family: "esamanru";
  padding-top: 40px;
  padding-bottom: 150px;
  color: #7D7D7D;
`;

const Middlebox = styled(Typography)`
  font-size: 30px;
  width: 100%;
  font-family: "esamanru";
  padding-top: 40px;
  color: #000000;
  text-align: center;
  background-color: #FFFFFF;
`;


const Imgcontainer = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 10px;
`;
const BottomImgcontainer = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 30px;
  margin-left: 50px;
  background-color: #FFFFFF;
`;

const Bottomcontainer=styled(Typography)`
  font-size: 20px;
  width: 40%;
  font-family: "esamanru";
  padding-top: 30px;
  color: #000000;
  background-color: #FFFFFF;
`;
const Boxcontainer=styled`
`;
export default MainPage;
