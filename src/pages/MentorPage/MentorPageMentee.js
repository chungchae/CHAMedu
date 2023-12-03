import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY } from "../../colors";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { Typography } from "antd";
import FlameIcon from "../../assets/images/flame_icon.png";
import ThumbIcon from "../../assets/images/thumbs_icon.png";
import NoteIcon from "../../assets/images/note_icon.png";
import MentorCard from "../../components/Mentor/MentorCard";
import MentorSmaple from "../../constants/json/mentor_list_sample.json";
import camelizeKey from "../../utils/camelizeKey";
import axios from "axios";
import { useEffect, useState } from "react";


const MentorPageMentee = () => {
  const mentorList = camelizeKey(MentorSmaple.mentor_list);
  const [mentorList1, setMentorList1] = useState();
  console.log('망',mentorList);
  useEffect(() => {
    const getMentorList = () => {
      axios.get(`http://localhost:8080/recommend-mentor-profile-list`).then((res) => {
        console.log(res);
        //setMentorList1(res.data.content);
      }).catch((error) =>{
        console.error('Axios Error', error);
      })
    }
    getMentorList();
  },[]);
  
  return (
    <Root>
      <Header />
      <Container>
        <TitleContainer>
          <MentorIcon src={FlameIcon} alt='인기 멘토 아이콘'></MentorIcon>
          <MentorTypo>인기 멘토</MentorTypo>
        </TitleContainer>
        <PopularMentorContainer>
          {mentorList.slice(0, 4).map((mentor) => (
            <MentorCard
              MentorItem={mentor}
              key={`mentor_card_${mentor.key}`}
            />
          ))}
          {/* {mentorList.slice(0, 4).map((mentor, index) => (
            <NewMentorCard
              mentor={mentor}
              index={index}
              key={`mentor_card_${index}`}
            />
          ))} */}
        </PopularMentorContainer>

        <TitleContainer>
          <MentorIcon src={ThumbIcon} alt='인기 멘토 아이콘'></MentorIcon>
          <MentorTypo>내 전형 추천 멘토</MentorTypo>
        </TitleContainer>
        <AdmissionMentorContainer>
          {mentorList.slice(0, 4).map((mentor) => (
            <MentorCard //나중에는 NewMentor로
              MentorItem={mentor}
              key={`mentor_card_${mentor.key}`}
            />
          ))}
          {/* {mentorList.slice(0, 4).map((mentor, index) => (
            <NewMentorCard
              mentor={mentor}
              index={index}
              key={`mentor_card_${index}`}
            />
          ))} */}
        </AdmissionMentorContainer>

        <TitleContainer>
          <MentorIcon src={NoteIcon} alt='인기 멘토 아이콘'></MentorIcon>
          <MentorTypo>내 전공 추천 멘토</MentorTypo>
        </TitleContainer>
        <MajorMentorContainer>
          {mentorList.slice(0, 4).map((mentor) => (
            <MentorCard
              MentorItem={mentor}
              key={`mentor_card_${mentor.key}`}
            />
          ))}
          {/* {mentorList.slice(0, 4).map((mentor, index) => (
            <NewMentorCard
              mentor={mentor}
              index={index}
              key={`mentor_card_${index}`}
            />
          ))} */}
        </MajorMentorContainer>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px; //헤더 높이만큼 padding
  position: relative;
  background-color: ${GRAY.LIGHT};
`;
const Container = styled.div`
  flex-direction: column;
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

const PopularMentorContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: center;
  padding-bottom: 50px;
`;

const AdmissionMentorContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: center;
  padding-bottom: 50px;
`;

const MajorMentorContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: center;
  padding-bottom: 50px;
`;

const MentorTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`;

const MentorIcon = styled.img`
  width: 25px;
  height: 25px;
  padding-right: 7px;
`;

export default MentorPageMentee;
