import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY, PRIMARY } from "../../colors";
import Header from "../../components/Header/HeaderMentee";
import styled from "styled-components";
import { Card, Input, Typography } from "antd";
import ProImg from "../../assets/images/profile.png";
import FlameIcon from "../../assets/images/flame_icon.png";
import ThumbIcon from "../../assets/images/thumbs_icon.png";
import NoteIcon from "../../assets/images/note_icon.png";
import MentorCard from "../../components/Mentor/MentorCard";
import MentorSmaple from "../../constants/json/mentor_list_sample.json";
import camelizeKey from "../../utils/camelizeKey";

const MentorPageMentee = () => {
  const mentorList = camelizeKey(MentorSmaple.mentor_list);
  console.log(mentorList);
  

  return (
    <Root>
      <Header />
      <Container>
        <SearchContainer>
          <SearchBox placeholder="멘토를 검색해보세요!"/>
        </SearchContainer>
        <TitleContainer>
          <MentorIcon src={FlameIcon} alt='인기 멘토 아이콘'></MentorIcon>
          <MentorTypo>인기 멘토</MentorTypo>
        </TitleContainer>
        <PopularMentorContainer>
          {mentorList.slice(0, 4).map((MentorItem) => (
            <MentorCard
              MentorItem={MentorItem}
              key={`mentor_card_${MentorItem.key}`}
            />
          ))}
        </PopularMentorContainer>

        <TitleContainer>
          <MentorIcon src={ThumbIcon} alt='인기 멘토 아이콘'></MentorIcon>
          <MentorTypo>내 전형 추천 멘토</MentorTypo>
        </TitleContainer>
        <DepartmentMentorContainer>
          {mentorList.slice(0, 4).map((MentorItem) => (
            <MentorCard
              MentorItem={MentorItem}
              key={`mentor_card_${MentorItem.key}`}
            />
          ))}
        </DepartmentMentorContainer>

        <TitleContainer>
          <MentorIcon src={NoteIcon} alt='인기 멘토 아이콘'></MentorIcon>
          <MentorTypo>내 전공 추천 멘토</MentorTypo>
        </TitleContainer>
        <MajorMentorContainer>
          {mentorList.slice(0, 4).map((MentorItem) => (
            <MentorCard
              MentorItem={MentorItem}
              key={`mentor_card_${MentorItem.key}`}
            />
          ))}
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
`;
const SearchContainer = styled.div`
  width: 70%;
  height: 50px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopularMentorContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: center;
  padding-bottom: 50px;
`;

const DepartmentMentorContainer = styled.div`
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

const SearchBox = styled(Input)`
  &:hover {
    border-color: ${PRIMARY.DEFAULT};
    box-shadow: 0 0 0 2px ${PRIMARY.DEFAULT}20;
  }
  &:focus {
    border-color: ${PRIMARY.DEFAULT};
    box-shadow: 0 0 0 2px ${PRIMARY.DEFAULT}20;
  }
`;


export default MentorPageMentee;
