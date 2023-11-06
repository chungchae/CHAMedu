import { useNavigate } from "react-router-dom";
import { generateRandomMentorCardLogoImg } from "../../utils/generateRandomPrifileImg";
import { Card, Space, Tag } from "antd";
import styled from "styled-components";
import Meta from "antd/es/card/Meta";
import { GRAY } from "../../colors";

const ReviewCard = () => {
  
  return (
    <Root>
    </Root>
  );
};

const Root = styled.div`
  width: 275px;
  height: 300px;
  display: flex;
  border-radius: 16px;
  border: 1px #c9c9c955 solid;
`;


export default ReviewCard;
