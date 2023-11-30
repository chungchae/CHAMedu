import styled from "styled-components";
import React, {useState} from 'react';
import { Button, Typography, Tag } from "antd";
import ProfileImg from "../../../assets/images/profile.png";
import StarIcon from "../../../assets/images/Star.png";
import MentorReserveModal from "../MentorReserveModal";
import NoteIcon from "../../../assets/images/note_icon.png";
import ReviewSlider from "../ReviewSlider";
import {CONTAINER_WIDTH, HEADER_HEIGHT} from "../../../assets/system/layout";
import {GRAY, PRIMARY} from '../../../colors';
import Person from "../../../assets/images/mypage_person.png";

const MenteeMyProfile = () => {
    const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const imageList = [
    {
      imageName: Person,
      name: "논술 전문가",
      date: '2023-09-12',
      time: '13:00~13:30',
      title: '동국대학교 논술 문제유형관련 질문',
      onAccept: () => console.log('Accepted 1'),
      onReject: () => console.log('Rejected 1'),
    },
    {
      imageName: Person,
      name: "수시를 수시로",
      date: '2023-10-15',
      time: '20:00~20:30',
      title: '논술 수학 범위 관련 질문',
      onAccept: () => console.log('Accepted 1'),
      onReject: () => console.log('Rejected 1'),
    },
    {
        imageName: Person,
        name: "논술을 논하라",
        date: '2023-10-15',
        time: '20:00~20:30',
        title: '논술 공부 방법 질문',
        onAccept: () => console.log('Accepted 1'),
        onReject: () => console.log('Rejected 1'),
      },
    
  ];
    return (
        <>
        <Time>
        <IconImg src={NoteIcon} />
        <BoldText>3시간 17분</BoldText> 뒤 상담이 예정되어 있어요. 
        <TimeSpan>확인하기</TimeSpan>
        </Time>
        <Container>
            <Profilecontainer>
                
                <Infocontainer>
                <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
                 <MentorNameTypo>김몽실</MentorNameTypo>
               </div>

                <MentorEducationTypo>필동고등학교 2학년, 자연계열</MentorEducationTypo>
                <MentorIntroTypo>
                필동고등학교 2학년에 재학 중입니다.
                컴퓨터공학과를 희망하며, 준비 중인 전형은 정시와 논술입니다.
                </MentorIntroTypo>
                
                </Infocontainer>
            </Profilecontainer>
            <RoundedBox>
            <HeaderText>상담 신청 내역</HeaderText>
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
                  <RequestButton1 onClick={image.onAccept}>요청됨</RequestButton1>
                  
                </RequestButtonWrapper>
              </RequestWrapper>  
            ))}
          </RoundedBox>
            </Container>
            
        </>
    );
}

const Time = styled.div`
    margin-left: 30px;
    margin-top: 20px;
    font-family: "esamanru";
`;

const BoldText = styled.span`
    font-weight: 600;
`;

const TimeSpan = styled.span`
    margin-left: 20px;
    color: gray;
    text-decoration: underline;
    cursor: pointer;
`;

const Container = styled.div`
  flex-direction: column;
  width: ${CONTAINER_WIDTH}px;
  align-items: center;
  justify-content: center;
    margin-left: 30px;
`;

const Profilecontainer = styled.div`
  background-color: white;
  display: flex;
  margin: 30px 0px;
  border-radius: 20px;
  padding: 30px;
`;



const Infocontainer = styled.div`
padding: 10px;
  flex-direction: column;
`;


const MentorNameTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  font-weight: 700;
  padding-bottom: 7px;
  padding-right: 10px;
`;

const MentorEducationTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  color: ${GRAY.DARK};
  padding-bottom: 7px;
`;

const MentorIntroTypo = styled(Typography)`
  font-size: 16px;
  font-family: "esamanru";
  font-weight: 100;
`;




const IconImg = styled.img`
  margin-right: 5px;
  width: 25px;
  height: 25px;
  object-fit: cover;
`;


const RoundedBox = styled.div`
  background-color: white;
  height: auto;
  width: calc(100% - 150px);
  margin-top: 10px;
  margin-left: 1px;
  padding-right: 148px;
  border-radius: 20px;
`;
const HeaderText = styled.div`
  font-size: 14px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 35px;
  font-family: "esamanru";
`;



const RequestButton1 = styled.div`
  font-family: "esamanru";
  background-color: #E9E9E9;
  padding: 12px; /* Adjust padding as needed */
  width: 50px; /* Set the desired width */
  border-radius: 15px;
  font-size: 15px; /* Adjust font size as needed */
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 103%;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin: 5px;
    padding: 20px;
    margin-left: 30px;
    justify-content: space-between;
    font-weight: 900;
`;

export default MenteeMyProfile;