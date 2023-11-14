import styled from "styled-components";
import React from 'react';
import Person from "../../../assets/images/mypage_person.png";

const RequestContent = () => {
  const imageList = [
    {
      imageName: Person,
      name: "이한별",
      date: '2023-11-14',
      time: '13:00~13:30',
      title: '동국대학교 논술 문제유형관련 질문',
      onAccept: () => console.log('Accepted 1'),
      onReject: () => console.log('Rejected 1'),
    },
    {
      imageName: Person,
      name: "홍길동",
      date: '2023-12-14',
      time: '20:00~20:30',
      title: '논술 수학 범위 관련 질문',
      onAccept: () => console.log('Accepted 1'),
      onReject: () => console.log('Rejected 1'),
    },
    
  ];
    return (
        <>
         <RoundedBox>
            <HeaderText>상담 수락 대기 목록</HeaderText>
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
                  <RequestButton1 onClick={image.onAccept}>수락</RequestButton1>
                  <RequestButton2 onClick={image.onReject}>거절</RequestButton2>
                </RequestButtonWrapper>
              </RequestWrapper>  
            ))}
          </RoundedBox>
          </>
    );
}

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
  padding-bottom: 30px;
  padding-left: 20px;
  font-family: "esamanru";
`;


const RequestButton2 = styled.div`
  background-color: #C4C4C4;
  padding: 10px;
  color: #fff;
  border-radius: 15px;
`;

const RequestButton1 = styled.div`
  background-color: #89CC8B;
  padding: 10px;
  color: #fff;
  border-radius: 15px;
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

export default RequestContent;