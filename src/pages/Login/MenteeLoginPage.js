import React, { useState } from "react";
import Header from "../../components/Header/HeaderGuest";
import styled from "styled-components";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { useNavigate } from "react-router-dom";
import { ConfigProvider, Input } from "antd";
import { PRIMARY } from "../../colors";
import axios from "axios";

const MenteeLoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value); // 입력된 값으로 상태를 업데이트합니다.
  };
  const handlePwChange = (event) => {
    setPw(event.target.value);
  };

  const onClickJoinButton = () => {
    navigate("/user/join");
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

const menteeLoginApi = () => {
  const data = {
    userId: id,
    password: pw,
  };

  axios.post(`/api/login/mentee`, data, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then((res) => {
      console.log('Complete Response:', res);
      console.log('Response Status:', res.status);

      if (res.data === 'Mentee Login successful') {
        //세션에 유저아이디, 유저 유형 설정
        sessionStorage.setItem('userId', id);
        sessionStorage.setItem('role', "mentee");
        // 세션 스토리지에 저장된 값을 확인
        console.log("세션 스토리지 userId:", sessionStorage.getItem('userId'));
        console.log("세션 스토리지 role:", sessionStorage.getItem('role'));
        navigate("/user/mentor");
      }

      return res.data;
    })
    .then((res) => {
      console.log('Parsed Response:', res);
    })
    .catch((error) => {
      console.log('Axios Error:', error);
    });
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

          <LoginForm>
            <InputField
              type='text'
              placeholder='아이디'
              value={id}
              onChange={handleIdChange}
            />
            <InputField
              type='password'
              placeholder='비밀번호'
              value={pw}
              onChange={handlePwChange}
            />
            <LabelTTTT>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              아이디 저장
            </LabelTTTT>

            <LoginButton onClick={menteeLoginApi}>로그인</LoginButton>

            <SignupTTTT>
              <div>아직 회원이 아니세요?</div>
              <ButtonSignup onClick={onClickJoinButton}>회원가입</ButtonSignup>
            </SignupTTTT>
          </LoginForm>
        </Container>
      </Root>
    </ConfigProvider>
  );
};

const SignupTTTT = styled.div`
  border-top: 1px solid gray;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 38px;
  padding: 20px;
  font-family: "esamanru";
  margin-top: 10px;
`;

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

const Subtitle = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #4caf4f;
  margin-bottom: 50px;
  font-family: "esamanru";
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled(Input)`
  width: 300px;
  margin-top: 10px;
`;

const ButtonSignup = styled.div`
  color: #4caf4f;
  width: 60px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  background-color: #4caf4f;
  color: #fff;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  font-family: "esamanru";
`;

const LabelTTTT = styled.label`
  display: inline-flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  justify-content: flex-end;

  font-size: 14px;
`;

export default MenteeLoginPage;
