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
import NewMentorCard from "../../components/Mentor/NewMentorCard";
import { useEffect, useState } from "react";

const MentorPageMentee = () => {
  const [pMentorList, setPMentorList] = useState();
  const [rMentorList, setRMentorList] = useState();
  const [mMentorList, setMMentorList] = useState();

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    console.log(userId);
    const getMentor1List = () => {
      axios
        .get(`http://localhost:8080/recommend-mentor-profile-list/${userId}`)
        .then((res) => {
          console.log(res);
          if (Array.isArray(res.data.popularMentors)) {
            setPMentorList(res.data.popularMentors);
          } else {
            // 배열이 아닌 경우 빈 배열로 설정
            setPMentorList([]);
          }
          if (Array.isArray(res.data.wishAdmissionTypeMentors)) {
            setRMentorList(res.data.wishAdmissionTypeMentors);
          } else {
            // 배열이 아닌 경우 빈 배열로 설정
            setRMentorList([]);
          }
          if (Array.isArray(res.data.wishCollegeMentors)) {
            setMMentorList(res.data.wishCollegeMentors);
          } else {
            // 배열이 아닌 경우 빈 배열로 설정
            setMMentorList([]);
          }
        })
        .catch((error) => {
          console.error("Axios Error", error);
        });
    };
    getMentor1List();
  }, []);

  return (
    <Root>
      <Header />
      <Container>
        <TitleContainer>
          <MentorIcon src={FlameIcon} alt="인기 멘토 아이콘"></MentorIcon>
          <MentorTypo>인기 멘토</MentorTypo>
        </TitleContainer>
        {pMentorList && pMentorList?.length !== 0 ? (
          <PopularMentorContainer>
            {pMentorList?.slice(0, 4).map((mentor, index) => (
              <NewMentorCard
                mentor={mentor}
                index={index}
                key={`mentor_card_${index}`}
              />
            ))}
          </PopularMentorContainer>
        ) : (
          <PopularMentorContainer>
            <NoRecommendMentor>인기 멘토가 없습니다.</NoRecommendMentor>
          </PopularMentorContainer>
        )}

        <TitleContainer>
          <MentorIcon src={ThumbIcon} alt="인기 멘토 아이콘"></MentorIcon>
          <MentorTypo>내 전형 추천 멘토</MentorTypo>
        </TitleContainer>
        {rMentorList && rMentorList?.length !== 0 ? (
          <AdmissionMentorContainer>
            {rMentorList?.slice(0, 4).map((mentor, index) => (
              <NewMentorCard
                mentor={mentor}
                index={index}
                key={`mentor_card_${index}`}
              />
            ))}
          </AdmissionMentorContainer>
        ) : (
          <AdmissionMentorContainer>
            <NoRecommendMentor>전형 추천 멘토가 없습니다.</NoRecommendMentor>
          </AdmissionMentorContainer>
        )}

        <TitleContainer>
          <MentorIcon src={NoteIcon} alt="인기 멘토 아이콘"></MentorIcon>
          <MentorTypo>내 전공 추천 멘토</MentorTypo>
        </TitleContainer>
        {mMentorList && mMentorList?.length !== 0 ? (
          <MajorMentorContainer>
            {mMentorList?.slice(0, 4).map((mentor, index) => (
              <NewMentorCard
                mentor={mentor}
                index={index}
                key={`mentor_card_${index}`}
              />
            ))}
          </MajorMentorContainer>
        ) : (
          <MajorMentorContainer>
            <NoRecommendMentor>전공 추천 멘토가 없습니다.</NoRecommendMentor>
          </MajorMentorContainer>
        )}
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

const NoRecommendMentor = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
`;

export default MentorPageMentee;