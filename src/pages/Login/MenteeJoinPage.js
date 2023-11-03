import React from 'react'
import Header from '../../components/Header/HeaderGuest'
import styled from 'styled-components'
import { CONTAINER_WIDTH, HEADER_HEIGHT } from '../../assets/system/layout'
import { GRAY } from '../../colors'

const MenteeJoinPage = () => {
  return (
    <Root>
      <Header />
      <Container>CHAMedu</Container>
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
  background-color: ${GRAY.LIGHT};
`

const Container = styled.div`
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  justify-content: center;
  background: white;
  font-size: 20px;
  margin-top: 10px;
  color: #4CAF4F;
  font-weight: bold;
`
export default MenteeJoinPage
