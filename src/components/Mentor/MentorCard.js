import { useNavigate } from "react-router-dom";
import { generateRandomMentorCardLogoImg } from "../../utils/generateRandomPrifileImg";
import { Card, Tag } from "antd";
import styled from "styled-components";
import { GRAY } from "../../colors";
import Bunting from "../../assets/images/buntingIcon.png";
import { getDepartmentColor } from "../../utils/color";

const MentorCard = ({ className, MentorItem }) => {
  const navigate = useNavigate();

  const onClickMentorCard = () => {
    if (MentorItem) {
      navigate(`/user/mentor/${MentorItem.key}`);
    }
  }; //멘토 카드 클릭 시 멘토의 디테일 페이지로 이동

  const shouldDisplayBunting = MentorItem && MentorItem.star >= 4.5;
  //멘토의 평균 별점이 4.5 이상이면 휘장 표시

  return (
    <div style={{ position: "relative" }}>
      {shouldDisplayBunting && <BuntingImg src={Bunting} alt='Bunting Icon' />}
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
        <CardTitle>{MentorItem ? MentorItem.nickname : "멘토 이름"}</CardTitle>
        <CardDescription>
          {MentorItem ? `${MentorItem.education}` : "멘토 학력"}
        </CardDescription>
        <DepartmentTag
          color={getDepartmentColor(MentorItem.department)}
          /* 멘토의 분야를 태그로 표시 */
        >
          {MentorItem.department}
        </DepartmentTag>
      </Root>
    </div>
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
  position: relative;
  margin-top: 6px;
`;

const BuntingImg = styled.img`
  width: 50px;
  height: 60px;
  position: absolute;
  right: 10px;
  z-index: 1;
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

const DepartmentTag = styled(Tag)`
position: absolute;
top: 10px;
left: 10px;
border: none;
font-size: 14px;
color: white;
padding: 4px 8px;
font-family: "esamanru";
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

export default MentorCard;
