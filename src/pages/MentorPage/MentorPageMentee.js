import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY } from "../../colors";
import Header from "../../components/Header/HeaderMentee";
import styled from "styled-components";
import { Card, Input, Typography } from "antd";
import ProImg from "../../assets/images/profile.png";

const MentorPageMentee = () => {
  const { Meta } = Card;

  return (
    <Root>
      <Header></Header>
      <Container>
        <SearchContainer>
          <SearchBox />
        </SearchContainer>
        <PopularMentorContainer>
          <MentorCard
            hoverable
            style={{ width: 240 }}
            cover={<img alt='example' src={ProImg} />}
          >
            <Meta title='치와와교수' description='www.instagram.com' />
          </MentorCard>
        </PopularMentorContainer>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
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
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopularMentorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MentorTypo = styled(Typography)`
  font-family: "esamanru";
`;

const MentorCard = styled(Card)``;

const SearchBox = styled(Input)`
`

export default MentorPageMentee;
