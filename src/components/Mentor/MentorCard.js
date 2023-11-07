import { useNavigate } from "react-router-dom";
import { generateRandomMentorCardLogoImg } from "../../utils/generateRandomPrifileImg";
import { Card, Space, Tag } from "antd";
import styled from "styled-components";
import Meta from "antd/es/card/Meta";
import { GRAY } from "../../colors";

const MentorCard = ({ className, MentorItem, position }) => {
  const navigate = useNavigate();

  const onClickMentorCard = () => {
    if (MentorItem) {
      navigate(`/user/mentor/${MentorItem.key}`); //key를 갖고 MentorDetail 페이지로 이동
    }
  };

  return (
    <Root
      className={className}
      onClick={onClickMentorCard}
      hoverable
      cover={
        <RepresentativeImgContainer>
          <RepresentativeImg
            src={generateRandomMentorCardLogoImg()}
            alt={"멘토 대표 이미지"}
          />
        </RepresentativeImgContainer>
      }
    >
      <CardTitle>
        {MentorItem ? MentorItem.nickname : "멘토 이름"}
      </CardTitle>
      <CardDescription>
        {MentorItem ? `${MentorItem.education}` : "멘토 학력"}
      </CardDescription>
    </Root>
  );
};

const Root = styled(Card)`
  width: 275px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  border: 1px #c9c9c955 solid;
`;
const RepresentativeImgContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

const RepresentativeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: "esamanru";
`;

const CardDescription = styled.div`
  font-size: 16px;
  color: ${GRAY.DARK};
  font-family: "esamanru";
`;

/* const RepresentativeImgBadge = styled(Tag)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`
const DevelopmentStackTagContainer = styled(Space)`
  height: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`

const DevelopmentStackTag = styled(Tag)`` */

export default MentorCard;
