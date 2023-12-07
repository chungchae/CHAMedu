import Person from "../../../assets/images/mypage_person.png";
import React from "react";
import { useState, useEffect } from "react";
import { GRAY, PRIMARY } from "../../../colors";
import styled from "styled-components";
import { Button, Typography, Tag } from "antd";
import MentorReviewModal from "../../../components/Mentor/MentorReviewModal";
import axios from "axios";

const ReviewContent = () => {
  const [modalReviewOpen, setModalReviewOpen] = useState(false);
  const [menteeData, setMenteeData] = useState({});
  
  const openReviewModal = () => {
    setModalReviewOpen(true);
  };
  const closeReviewModal = () => {
    setModalReviewOpen(false);
  };

   useEffect(() => {
    const getMentee = () => { // api주소 가상으로
      axios.get(`http://localhost:8080/api/mentee-mypage/review`).then((res) => {
      
      console.log(res);
      setMenteeData(res.data);
    }).catch((error) =>{
      console.error('Axios Error', error);
    })
    }
    getMentee();
  },[]);

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
         <RoundedBox>
            <HeaderText>작성한 후기</HeaderText>
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
                <WriteReviewButtonContainer onClick={openReviewModal}>
                <WriteReviewTypo>작성한 후기 보기</WriteReviewTypo>
              </WriteReviewButtonContainer>
                </RequestButtonWrapper>
                <MentorReviewModal
                  isOpen={modalReviewOpen}
                  closeModal={closeReviewModal}
                />
              </RequestWrapper>  
            ))} 

            {/* /* 코드 오면 68-90 주석처리 menteeData.review
            {Array.isArray(menteeData.review) && menteeData.review.map((review, index) => (
              <RequestWrapper key={index}>
                <RequestUserWrapper>
                  <RequestImageWrapper>
                    <RequestImage src={Person} alt="Image"/>
                    <div>{review.name}</div>
                  </RequestImageWrapper>
                  <div>{review.date}</div>
                  <div>{review.time}</div>
                  <div>{review.title}</div>
                </RequestUserWrapper>

                <RequestButtonWrapper>
                  <WriteReviewButtonContainer onClick={openReviewModal}>
                    <WriteReviewTypo>작성한 후기 보기</WriteReviewTypo>
                  </WriteReviewButtonContainer>
                </RequestButtonWrapper>
                <MentorReviewModal
                  isOpen={modalReviewOpen}
                  closeModal={closeReviewModal}
                />
              </RequestWrapper>  
            ))} */}
          </RoundedBox>
          </>
    );
}
const WriteReviewButtonContainer = styled.div`
  cursor: pointer;
`;
const WriteReviewTypo = styled(Typography)`
  font-family: "esamanru";
  background-color: #E9E9E9;
  padding: 12px; /* Adjust padding as needed */
  width: 120px; /* Set the desired width */
  border-radius: 15px;
  font-size: 13px; /* Adjust font size as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  
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
  font-size: 18px;
  padding-top: 30px;
  padding-bottom: 30px;
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
const RequestButton1 = styled.div`
  background-color: #E9E9E9;
  padding: 12px; /* Adjust padding as needed */
  width: 110px; /* Set the desired width */
  border-radius: 15px;
  font-size: 15px; /* Adjust font size as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export default ReviewContent;