import Header from '../../components/Header/HeaderGuest'
import styled from 'styled-components'
import { CONTAINER_WIDTH, HEADER_HEIGHT } from '../../assets/system/layout'
import { GRAY } from '../../colors'
import { Typography } from 'antd'
import welcomeImg from '../../assets/images/welcome.png'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
  const navigate = useNavigate()
  const onButtonStartClick = () => {
    navigate('/');
    /*navigate('/mentor/request')*/
  }

  return (
    <Root>
      <Header />
      <Content>
        <Imgcontainer src={welcomeImg} alt={'이미지'} />
        <TextContainer>
          <Welcomebox>환영합니다!</Welcomebox>
          <DivGray>CHAMedu의 멤버가 되셨습니다!</DivGray>
          <ButtonStart onClick={onButtonStartClick}>시작하기</ButtonStart>
        </TextContainer>
      </Content>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: ${HEADER_HEIGHT - 15}px;
  position: relative;
`

const Content = styled.div`
  display: flex;
  align-items: center; /* 이미지와 TextContainer를 수직 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  height: calc(100vh - ${HEADER_HEIGHT}px);
`

const Imgcontainer = styled.img`
  width: 600px;
  height: 700px;
  display: block;
  margin-right: 150px; /* 이미지와 다른 컨텐츠 사이의 오른쪽 여백 조절 */
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Welcomebox = styled(Typography)`
  font-size: 60px;
  font-family: "esamanru";
  color: #000000;
  text-align: center;
  background-color: #FFFFFF;
  margin-top: 20px;
`

const DivGray = styled.div`
  color: gray;
  text-align: center;
  padding-top: 20px;
`

const ButtonStart = styled.div`
  background-color: #C8E7CA;
  color: #388E3B;
  width: 60px;
  padding: 10px 20px;
  border-radius: 6px;
  margin-top: 20px; /* DivGray와 ButtonStart 사이의 여백을 조절합니다 */
  font-size: 15px;
  cursor: pointer;
`

export default WelcomePage
