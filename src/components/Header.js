import { Button, Typography } from "antd";
import styled from "styled-components";
import React from "react";
import IconImg from "../assets/images/Icon.png";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../assets/system/layout";

const Header = () => {
  return (
    <Container>
      <ItemContainer>
        <LogoImg src={IconImg} alt={"로고 이미지"} />
        <LogoTypo>CHAMedu</LogoTypo>
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300;
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

const LogoImg = styled.img`
  width: 30px;
  height: 20px;
  padding: 15px;
`;

const LogoTypo = styled(Typography)`
  font-weight: 500;
  span {
    font-family: "esamanru";
  }
`;

export default Header;
