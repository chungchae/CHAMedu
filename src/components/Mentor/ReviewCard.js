//MentorDetailPage의 Mentor Review Card 컴포넌트
import { Typography } from "antd";
import styled from "styled-components";
import starIcon from "../../assets/images/Star.png";
const ReviewCard = ({ title, rate, content }) => {
  return (
    <Root>
      <TitleTypo>{title}</TitleTypo>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <RateStarImg src={starIcon} />
        <TitleTypo>{rate}</TitleTypo>
      </div>
      <TitleTypo>{content}</TitleTypo>
    </Root>
  );
};

const Root = styled.div`
  width: 170px;
  height: 150px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background-color: white;  
  margin: 10px;
  margin-left: 0px;
  padding: 10px;
`;

const TitleTypo = styled(Typography)`
  font-size: 16px;
  font-family: "esamanru";
  margin-top: 1px;
`;


const RateStarImg = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 3px;
  object-fit: cover;
`;

export default ReviewCard;
