import React, { useState } from "react";
import Header from "../../components/Header/HeaderGuest";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";

const MentorJoinPage = () => {
  const navigate = useNavigate();
  const onSignUpClick = () => {
    navigate("/welcome/join");
  };

  const infoList = ["이름", "닉네임", "아이디", "비밀번호"];
  const placeholderList = [
    "실명을 입력해주세요",
    "닉네임을 입력해주세요",
    "영문/숫자조합 8자 이상 20자 이하",
    "영문/숫자조합 8자 이상 20자 이하",
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
                <JungBok>중복확인</JungBok>
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
        </InfoWrapper>
        <InfoWrapper>
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
        </InfoWrapper>
        <InfoWrapper2></InfoWrapper2>
      </InfoListWrapper>
      <SignUp onClick={onSignUpClick}>회원가입</SignUp>
    </Root>
  );
};

const BigSelect = styled.select`
  height: 30px;
  width: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
    border-color: green; /* 원하는 초록색으로 변경 */
}
`;

const SmallInput = styled.input`
  width: 80px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
    border-color: green; /* 원하는 초록색으로 변경 */
}
`;

const JungBok = styled.div`
  padding: 10px;
  background-color: #dff1e0;
  border-radius: 4px;
  font-family: "esamanru";
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  margin: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
    border-color: green; /* 원하는 초록색으로 변경 */
  }
`;

const InfoTitle = styled.div`
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
  padding-bottom: 30px;
  font-family: "esamanru";
`;

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  position: relative;
`;
const SignUp = styled.div`
  background-color: #c9e6ca;
  color: #000000;
  width: 280px;
  padding: 13px 20px;
  border-radius: 6px;
  margin-top: 37px;
  margin-bottom: 100px;
  font-size: 15px;
  display: inline-flex;
  justify-content: space-around;
  cursor: pointer;
  font-family: "esamanru";
`;
export default MentorJoinPage;
