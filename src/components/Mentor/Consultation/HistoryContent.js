import styled from "styled-components";
import React from 'react';
import Person from "../../../assets/images/mypage_person.png";

const HistoryContent = () => {
  const imageList = [
    {
      imageName: Person,
      name: "이한별",
      date: '2023-11-14',
      time: '13:00~13:30',
      title: '동국대학교 논술 문제유형관련 질문',
      complete: false,
    },
    {
      imageName: Person,
      name: "홍길동",
      date: '2023-12-14',
      time: '20:00~20:30',
      title: '논술 수학 범위 관련 질문',
      complete: true,
    },
    {
      imageName: Person,
      name: "김철수",
      date: '2023-10-21',
      time: '20:00~20:30',
      title: '내신 점수 질문',
      complete: true,
    }
  ];
    return (
        <>
         <RoundedBox>
            <HeaderText>상담 내역</HeaderText>
            <SubText>채팅은 30일 이후 만료됩니다.</SubText>
            {imageList.map((image, index) => (
              <RequestWrapper key={index}>
                <RequestUserWrapper>
                  <RequestImageWrapper>
                    <RequestImage src={Person} alt="Image"/>
                    <div>{image.name}</div>
                  </RequestImageWrapper>
                  <div>{image.date}</div>
                  <div>{image.time}</div>
                  <div>{image.title}</div>
                </RequestUserWrapper>

                <RequestButtonWrapper>
                  {image.complete ? <CompleteTrue>만료됨</CompleteTrue> : <CompleteFalse>채팅조회</CompleteFalse>}
                  
                </RequestButtonWrapper>
              </RequestWrapper>  
            ))}
          </RoundedBox>
          </>
    );
}

const SubText = styled.div`
  font-size: 10px;
  padding-top: 5px;
  padding-bottom: 30px;
  padding-left: 20px;
  font-family: "esamanru";
  color: gray;
`;

const CompleteTrue = styled.div`
    font-family: "esamanru";
    font-weight: 500;
    color: gray;
`;

const CompleteFalse = styled.div`
    font-family: "esamanru";
    font-weight: 500;
    color: gray;
    text-decoration: underline;
`;

const RoundedBox = styled.div`
  background-color: white;
  height: auto;
  width: calc(100% - 150px);
  margin-top: 10px;
  margin-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
`;

const HeaderText = styled.div`
  font-size: 14px;
  padding-top: 30px;
  padding-left: 20px;
  font-family: "esamanru";
`;

const RequestImageWrapper = styled.div`
    display: inline-flex;
    align-items: center;
`;

const RequestUserWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap:30px;

`;

const RequestButtonWrapper = styled.div`
  display: inline-flex;
    gap: 10px;
`;

const RequestImage = styled.img``;

const RequestWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin: 5px;
    padding: 20px;
    justify-content: space-between;
    font-weight: 900;
`;

export default HistoryContent;