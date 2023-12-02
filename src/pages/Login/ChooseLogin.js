import Header from "../../components/Header/HeaderGuest";
import styled from "styled-components";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { useNavigate } from "react-router-dom";
import { ConfigProvider, Button, Typography } from "antd";
import { GRAY, PRIMARY } from "../../colors";

const ChooseLogin = () => {
  const navigate = useNavigate();

  const onClickMentorButton = () => {
    navigate("/user/login/mentor");
  };
  const onClickMenteeButton = () => {
    navigate("/user/login/mentee");
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY.DEFAULT,
        },
      }}
    >
      <Root>
        <Header />
        <Container>
          <CHAMeduTypo>CHAMedu</CHAMeduTypo>
          <Subtitle>바른 교육의 출발, 지금 시작해보세요!</Subtitle>
          <SubTypo>로그인 옵션을 선택해주세요.</SubTypo>
            <LoginButton onClick={onClickMentorButton}>멘토 로그인</LoginButton>
            <LoginButton onClick={onClickMenteeButton}>멘티 로그인</LoginButton>
        </Container>
      </Root>
    </ConfigProvider>
  );
};
const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  position: relative;
  background-color: #fff;
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

const SubTypo = styled(Typography)`
  font-family: "esamanru";
  color: ${GRAY.DARK};
  margin-bottom: 10px;
`

const Subtitle = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #4caf4f;
  margin-bottom: 50px;
  font-family: "esamanru";
`;

const LoginButton = styled(Button)`
width: 300px;
height: 80px;
margin: 15px;
border-radius: 20px;
font-family: "esamanru";
`;

export default ChooseLogin;
