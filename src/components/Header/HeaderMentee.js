import { Button, Typography } from "antd";
import styled from "styled-components";
import React from "react";
import HeaderIcon from "../../assets/images/HeaderIcon.png";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { PRIMARY } from "../../colors";
import { useNavigate } from 'react-router-dom'


const HeaderMentee = () => {
  const navigate = useNavigate()

  const onClickLogoButton = () => {
    navigate('/')
  }

  const onClickLoginButton = () => {
    navigate('/')
  }



  return (
    <Container>
      <ItemContainer>
        <LogoContainer onClick={onClickLogoButton}>
          <LogoImg src={HeaderIcon} alt={"로고 이미지"} />
          <LogoTypo>CHAMedu</LogoTypo>
        </LogoContainer>
        <MenuContainer>
          <LoginButton>로그인</LoginButton>
        </MenuContainer>
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 400;
  background-color: white;
  display: flex;
  border-bottom: 1px #c9c9c9 solid;
  box-shadow: 0 1px 2px rgba(57, 63, 72, 0.2);
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 100;
`;

const ItemContainer = styled.div`
  width: ${CONTAINER_WIDTH}px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 30px;
  height: 20px;
  padding-right: 10px;
  padding-top:20px;
  padding-bottom:20px;
`;

const LogoTypo = styled(Typography)`
  font-size: 30;
  font-weight: 700;
  span {
    font-family: "esamanru";
  }
`;

const LoginButton = styled(Button)`
  font-weight: 500;
  span {
    font-family: "esamanru";
  }
  &:hover {
    color: ${PRIMARY.DARK}!important;;
    border-color: ${PRIMARY.DARK}!important;;
  }
  &:active {
    color: ${PRIMARY.DARK}!important;;
    border-color: ${PRIMARY.DARK}!important;;
  }
`;

export default HeaderMentee;
