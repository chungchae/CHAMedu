import Header from '../../components/Header/HeaderMentee'
import styled from 'styled-components'
import { CONTAINER_WIDTH, HEADER_HEIGHT } from '../../assets/system/layout'
import { useNavigate } from 'react-router-dom'

const MyPageRequestMentor = () => {
  return (
    <Root>
      <Header />
      <DivGray>
        CHAMedu 회원이 되어 입시 고민에 대한 이야기를 나눠보세요
      </DivGray>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  position: relative;
  background-color: #fff;
`

const DivGray = styled.div`
  color: gray;
  padding-top: 20px;
   white-space: nowrap;
`

export default MyPageRequestMentor
