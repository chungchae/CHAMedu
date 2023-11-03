import React from "react";
import Header from "../../components/Header/HeaderGuest";
import styled from "styled-components";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY } from "../../colors";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onClickJoinButton = () => {
    navigate('/user/join');
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
      
      <LoginForm>
        <InputField type="text" placeholder="아이디" />
        <InputField type="password" placeholder="비밀번호" />
        <ButtonSignup onClick={onClickJoinButton}>
          회원가입
        </ButtonSignup>
        <LoginButton>로그인</LoginButton>
      </LoginForm>
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
  background: white;
  font-size: 34px;
  margin-top: 10px;
  color: #4CAF4F;
  font-weight: bold;
`;

const Subtitle = styled.div`
  font-size: 16px;
  color: #333;
  margin-top: 16px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  width: 300px;
  padding: 10px;
  margin: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
}
`;

const ButtonSignup = styled.div`
  background-color: #4CAF4F;
  color: #fff;
  width: 60px;
  padding: 10px 20px;
  border-radius: 6px;
  margin-top: 10px; /* 수정된 부분: 비밀번호 아래로 이동 */
  font-size: 15px;
`;

const LoginButton = styled.button`
  background-color: #4CAF4F;
  color: #fff;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
`;

export default LoginPage;
