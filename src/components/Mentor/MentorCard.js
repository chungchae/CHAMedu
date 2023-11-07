import { useNavigate } from 'react-router-dom'
import { generateRandomProjectCardLogoImg } from '../../utils/generateRandomPrifileImg'
import { Card, Space, Tag } from 'antd'
import styled from "styled-components";
import Meta from 'antd/es/card/Meta'



const MentorCard = ({ className, MentorItem, position }) => {
  const navigate = useNavigate()

  const onClickRoot = () => {
    navigate(`/`)
  }

  const { Meta } = Card;

  return (
    <Root
      className={className}
      onClick={onClickRoot}
      hoverable
      cover={
        <RepresentativeImgContainer>
          <RepresentativeImg
            src={generateRandomProjectCardLogoImg()}
            alt={'멘토 대표 이미지'}
          />
        </RepresentativeImgContainer>
      }
    >
      <Card title={MentorItem ? MentorItem.title : "치와와교수"} description={MentorItem ? `${MentorItem.education}` : "Default Description"} />

    </Root>
  )
}

const Root = styled(Card)`
  width: 275px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  border: 1px #c9c9c955 solid;
`
const RepresentativeImgContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`

const RepresentativeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const CardMeta = styled(Meta)``

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
