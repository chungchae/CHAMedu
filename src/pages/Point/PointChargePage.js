import React from "react";
import { useState } from "react";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY, PRIMARY } from "../../colors";
import Header from "../../components/Header/HeaderMentee";
import styled from "styled-components";
import { Typography } from "antd";
import ChamIcon from "../../assets/images/cham.png";

const PointChargePage = () => {
  return (
    <Root>
      <Header></Header>
      <Container>
        <div style={{ width: "100%" }}>
          <MenuTypo>포인트 충전</MenuTypo>
        </div>
        <MenuContainer>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <ChamImg src={ChamIcon}></ChamImg>
            <ChamTypo>100 CHAM</ChamTypo>
            <WonTypo>10000 원</WonTypo>
          </div>
          <ChargeContainer>
            <ChargeTypo>결제하기</ChargeTypo>
          </ChargeContainer>
        </MenuContainer>
        <MenuContainer>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <ChamImg src={ChamIcon}></ChamImg>
            <ChamTypo>500 CHAM</ChamTypo>
            <WonTypo>45000 원</WonTypo>
          </div>
          <ChargeContainer>
            <ChargeTypo>결제하기</ChargeTypo>
          </ChargeContainer>
        </MenuContainer>
        <MenuContainer>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <ChamImg src={ChamIcon}></ChamImg>
            <ChamTypo>1000 CHAM</ChamTypo>
            <WonTypo>90000 원</WonTypo>
          </div>
          <ChargeContainer>
            <ChargeTypo>결제하기</ChargeTypo>
          </ChargeContainer>
        </MenuContainer>
      </Container>
      
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px; //헤더 높이만큼 padding
  position: relative;
  background-color: ${GRAY.LIGHT};
`;

const Container = styled.div`
  flex-direction: column;
  width: ${CONTAINER_WIDTH}px;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  background-color: white;
  display: flex;
  margin: 30px 0px;
  border-radius: 20px;
  padding: 30px;
`;

const MenuContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: ${CONTAINER_WIDTH}px;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  border: 1px solid ${GRAY.DEFAULT};
  justify-content: space-between;
  padding: 0px 5px;
  margin-top: 13px;
`;
const ChargeContainer = styled.div`
  cursor: pointer;
`;

const MenuTypo = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
`;

const ChamTypo = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  padding-right: 10px;

`;

const WonTypo = styled(Typography)`
  font-size: 18px;
`;

const ChargeTypo = styled(Typography)`
  color: ${GRAY.DEFAULT};
  font-size: 18px;
  text-decoration: underline;
  padding-right: 5px;
`;

const ChamImg = styled.img`
  width: 20px;
  height: 25px;
  padding: 10px;
  margin-top: 5px;
  padding-right: 10px;
`;

export default PointChargePage;
