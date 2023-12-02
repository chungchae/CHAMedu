import React, { useState } from "react";
import Header from "../../components/Header/HeaderGuest";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { Input, Select, ConfigProvider, Button } from "antd";
import { PRIMARY } from "../../colors";

const MentorJoinPage = () => {
  const navigate = useNavigate();
  const onSignUpClick = () => {
    navigate("/welcome/join");
  };
  const [selectedHigh, setSelectedHigh] = useState('')
  const handleHigh = (event) => {
    setSelectedHigh(event.target.value)
  }

  const infoList = ["이름", "닉네임", "아이디", "비밀번호", "대학교/전공"];
  const placeholderList = [
    "실명을 입력해주세요",
    "닉네임을 입력해주세요",
    "영문/숫자조합 8자 이상 20자 이하",
    "영문/숫자조합 8자 이상 20자 이하",
    "예) 동국대학교 컴퓨터공학과",
  ];

  const [selectedUniv, setSelectedUniv] = useState("");
  const [selectedPhone, setSelectedPhone] = useState("");

  // 드롭다운의 값이 바뀌었을 때 호출될 함수입니다.
  const handleChange = (event) => {
    setSelectedUniv(event.target.value);
  };

  const handlePhone = (event) => {
    setSelectedPhone(event.target.value);
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
      <Title>멘토 회원가입</Title>
      <InfoListWrapper>
        {infoList.map((info, index) => {
          if (info === "아이디") {
            return (
              <InfoWrapper>
                <InfoTitle>{info}</InfoTitle>
                <StyledInput placeholder={placeholderList[index]}></StyledInput>
                <DuplicationButton>중복확인</DuplicationButton>
              </InfoWrapper>
            );
          } else {
            return (
              <InfoWrapper>
                <InfoTitle>{info}</InfoTitle>
                <StyledInput placeholder={placeholderList[index]}></StyledInput>
              </InfoWrapper>
            );
          }
        })}
        <InfoWrapper>
          <InfoTitle>전형</InfoTitle>
          <BigSelect value={selectedHigh} onChange={handleHigh} defaultValue="">
            <option value="" disabled hidden>
              선택
            </option>
            <option value="option1">학종</option>
            <option value="option2">정시</option>
            <option value="option3">교과</option>
            <option value="option4">논술</option>
          </BigSelect>
        </InfoWrapper>
       {/*  <InfoWrapper>
          <InfoTitle>휴대폰 번호</InfoTitle>
          <BigSelect
            value={selectedPhone}
            onChange={handlePhone}
            defaultValue=""
          >
            <option value="" disabled hidden>
              선택
            </option>
            <option value="option1">010</option>
            <option value="option2">011</option>
            <option value="option3">019</option>
          </BigSelect>{" "}
          ㅡ <SmallInput></SmallInput> ㅡ <SmallInput></SmallInput>
        </InfoWrapper> */}
        {/* <InfoWrapper>
          <InfoTitle>대학교</InfoTitle>
          <BigSelect
            value={selectedUniv}
            onChange={handleChange}
            defaultValue=""
          >
            <option value="" disabled hidden>
              선택
            </option>
            <option value="option1">동국대</option>
            <option value="option2">홍익대</option>
            <option value="option3">단국대</option>
          </BigSelect>
        </InfoWrapper> */}
        <InfoWrapper2></InfoWrapper2>
      </InfoListWrapper>
      <SignUpButton  type="primary" onClick={onSignUpClick}>회원가입</SignUpButton>
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
`;

const BigSelect = styled(Select)`
  height: 30px;
  width: 80px;
`;

const SmallInput = styled.input`
  width: 80px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
    border-color: green;
}
`;

const DuplicationButton = styled(Button)`
  font-family: "esamanru";
`;


const StyledInput = styled(Input)`
  width: 300px;
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
  justify-content: flex-start;
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
  width: 60%;
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
export default MentorJoinPage;
