import { useNavigate } from "react-router-dom";
import { generateRandomMentorCardLogoImg } from "../../utils/generateRandomPrifileImg";
import { Card, Space, Tag, Typography } from "antd";
import styled from "styled-components";
import Meta from "antd/es/card/Meta";
import { GRAY } from "../../colors";

const ReviewCard = ({title, rate, content}) => {
  
  return (
    <Root>
      <TitleTypo>{title}</TitleTypo>
      <TitleTypo>{rate}</TitleTypo>
      <TitleTypo>{content}</TitleTypo>
    </Root>
  );
};

const Root = styled.div`
  flex-direction: column;
  border-radius: 16px;
  border: 1px #c9c9c955 solid;
`;

const TitleTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  font-weight: 700;
`;


export default ReviewCard;
