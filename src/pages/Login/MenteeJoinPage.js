import React, { useState } from "react";
import Header from "../../components/Header/HeaderGuest";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { Input, ConfigProvider, Button, message } from "antd";
import { PRIMARY } from "../../colors";
import axios from "axios";

const MenteeJoinPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");
  /* const [admissionSelect, setAdmissionSelect] = useState(""); //전형 옵션
  const [collegeSelect, setCollegeSelect] = useState(""); //단과대 옵션 */

  const handleNameChange = (event) => {
    setName(event.target.value); // 입력된 값으로 상태를 업데이트합니다.
  };
  const handleIdChange = (event) => {
    setId(event.target.value); // 입력된 값으로 상태를 업데이트합니다.
  };
  const handlePwChange = (event) => {
    setPw(event.target.value); // 입력된 값으로 상태를 업데이트합니다.
  };
  const handleNicknameChange = (event) => {
    setNickname(event.target.value); // 입력된 값으로 상태를 업데이트합니다.
  };

  const isFormValid = () => {
    return (
      name !== "" &&
      id !== "" &&
      pw !== "" &&
      nickname !== ""
    );
  };

  const menteeJoinApi = () => {
    const data = {
      userId: id,
      password: pw,
      nickname: nickname,
      name: name,
    };
    axios
      .post(`/api/join/mentee`, data, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((res) => {
        console.log("Complete Response:", res);
        console.log("Response Status:", res.status);

        if (res.data === "멘티가 성공적으로 회원가입이 완료되었습니다.") {
          //세션에 유저아이디, 유저 유형 설정
        sessionStorage.setItem('userId', id);
        sessionStorage.setItem('role', "mentee");
        // 세션 스토리지에 저장된 값을 확인
        console.log("세션 스토리지 userId:", sessionStorage.getItem('userId'));
        console.log("세션 스토리지 role:", sessionStorage.getItem('role'));
          // If Join is successful, navigate to the main page
          navigate("/user/login");
          message.success("멘티님, 환영합니다!");
        }
        return res.data;
      })
      .then((res) => {
        console.log("Parsed Response:", res);
      })
      .catch((error) => {
        console.log("Axios Error:", error);
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
          <Title>멘티 회원가입</Title>
          <InfoListWrapper>
            <InfoWrapper>
              <InfoTitle>이름</InfoTitle>
              <StyledInput
                value={name}
                onChange={handleNameChange}
                placeholder='실명을 입력해주세요'
              />
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>닉네임</InfoTitle>
              <StyledInput
                value={nickname}
                onChange={handleNicknameChange}
                placeholder='닉네임을 입력해주세요'
              />
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>아이디</InfoTitle>
              <StyledInput
                value={id}
                onChange={handleIdChange}
                placeholder='영문/숫자조합 8자 이상 20자 이하'
              />
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>비밀번호</InfoTitle>
              <StyledInput
                value={pw}
                onChange={handlePwChange}
                placeholder='영문/숫자조합 8자 이상 20자 이하'
              />
            </InfoWrapper>
            <InfoWrapper2></InfoWrapper2>
          </InfoListWrapper>
          <SignUpButton
            type='primary'
            onClick={menteeJoinApi}
            disabled={!isFormValid()} // Disable button if the form is not valid
          >
            회원가입
          </SignUpButton>
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
  justify-content: center;
  padding-top: ${HEADER_HEIGHT}px;
`;

const Container = styled.div`
  flex-direction: column;
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 250px;
  margin: 1;
`;

const InfoTitle = styled.div`
  width: 110px;
  font-size: 20px;
  font-weight: 800;
`;

const InfoWrapper = styled.div`
  padding: 17px 0px;
  border-top: 1px solid #ccc;
  display: inline-flex;
  align-items: center;
  gap: 30px;
`;

const InfoWrapper2 = styled.div`
  border-bottom: 1px solid #ccc;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

const InfoListWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: #4caf4f;
  font-size: 30px;
  font-weight: 900;
  padding-bottom: 20px;
  font-family: "esamanru";
  padding-top: 20px;
`;

const SignUpButton = styled(Button)`
  width: 280px;
  margin-top: 37px;
  font-size: 15px;
  font-family: "esamanru";
`;
export default MenteeJoinPage;
