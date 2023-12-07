import Person from "../../../assets/images/mypage_person.png";
import React from "react";
import { useState, useEffect } from "react";
import { GRAY, PRIMARY } from "../../../colors";
import styled from "styled-components";
import { Button, Typography, Tag } from "antd";
import MentorReviewModal from "../../../components/Mentor/MentorReviewModal";
import axios from "axios";
import StarRatings from 'react-star-ratings';

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
    const getMentee = () => { // review 불러오는 api 작성
      axios.get(`/api/mentee-mypage/review`).then((res) => {
      
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
      title: '동국대학교 논술 문제유형관련 질문',
      content: '너무 좋아요',
      score: 5,
      onAccept: () => console.log('Accepted 1'),
      onReject: () => console.log('Rejected 1'),
    },
    {
      imageName: Person,
      title: '논술 수학 범위 관련 질문',
      content: '하하',
      score: 5,
      onAccept: () => console.log('Accepted 1'),
      onReject: () => console.log('Rejected 1'),
    },
    {
        imageName: Person,
        title: '논술 수학 범위 관련 질문',
        content: '하하',
        score: 5,
        onAccept: () => console.log('Accepted 1'),
        onReject: () => console.log('Rejected 1'),
      },
    
  ];
    return (
        <>
         <RoundedBox>
            <HeaderText>후기 내역</HeaderText>
          

          
            {Array.isArray(menteeData.content) && menteeData.content.map((content, index) => (
              <RequestWrapper key={index}>
                <RequestUserWrapper>
                  <RequestImageWrapper>
                    <RequestImage src={Person} alt="Image"/>
                    <div>{content.title}</div>
                  </RequestImageWrapper>
                
                  <div>{content.content}</div>
                  <ScoreWrapper>
                  <StarRatings
                   rating={content.score}  
                   starDimension="20px"
                   starRatedColor={PRIMARY.LIGHT}
                   starHoverColor={PRIMARY.LIGHT}
                   numberOfStars={5}
                  name={`rating-${index}`}  
                />
                </ScoreWrapper>
                </RequestUserWrapper>

                <RequestButtonWrapper>
                  <WriteReviewButtonContainer onClick={openReviewModal}>
                    <WriteReviewTypo>후기 삭제하기</WriteReviewTypo>
                  </WriteReviewButtonContainer>
                </RequestButtonWrapper>
                
              </RequestWrapper>  
            ))}
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
  font-size: 14px;
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
font-family: "esamanru";
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
const ScoreWrapper = styled.div`
  font-family: "esamanru";
  margin-right: 5px; // 이렇게 하면 score가 오른쪽으로 이동합니다
`;
export default ReviewContent;