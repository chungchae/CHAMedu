import Header from '../../components/Header/HeaderGuest'
import styled from 'styled-components'
import { CONTAINER_WIDTH, HEADER_HEIGHT } from '../../assets/system/layout'
import { GRAY, PRIMARY } from '../../colors'
import { Button, ConfigProvider, Typography } from 'antd'
import welcomeImg from '../../assets/images/welcome.png'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
  const navigate = useNavigate()
  const onButtonStartClick = () => {
    navigate('/user/mentor');
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY.DEFAULT,
        },
      }}
    >
    <Root>
      <Header />
      <Content>
        <Imgcontainer src={welcomeImg} alt={'이미지'} />
        <TextContainer>
          <Welcomebox>환영합니다!</Welcomebox>
          <DivGray>CHAMedu의 멤버가 되셨습니다!</DivGray>
          <ButtonStart type="primary"onClick={onButtonStartClick}>시작하기</ButtonStart>
        </TextContainer>
      </Content>
    </Root>
    </ConfigProvider>
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
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${HEADER_HEIGHT}px);
`

const Imgcontainer = styled.img`
  width: 600px;
  height: 700px;
  display: block;
  margin-right: 150px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Welcomebox = styled(Typography)`
  font-size: 60px;
  font-family: "esamanru";
  color: #000000;
  text-align: center;
  background-color: #FFFFFF;
`

const DivGray = styled.div`
  color: gray;
  text-align: center;
  font-family: "esamanru";
`

const ButtonStart = styled(Button)`
font-family: "esamanru";
margin-top: 50px;
`

export default WelcomePage
