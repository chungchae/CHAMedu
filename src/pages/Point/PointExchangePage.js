import React from "react";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY, PRIMARY } from "../../colors";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { Button, ConfigProvider, InputNumber, Typography, message } from "antd";
import axios from "axios";
import { useState } from "react";

const PointExchangePage = () => {
  const userId = sessionStorage.getItem("userId");
  const [changedPoints, setChangedPoints] = useState(0);

  const handlePointsChange = (value) => {
    setChangedPoints(value);
  };

  const exchangePoints = (changedPoints) => {
    const data = {
      userId: userId,
      changedPoints: changedPoints,
    };

    console.log(userId);
    console.log(changedPoints);
    console.log(data);

    axios
      .post(`/point/exchange`, data, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((res) => {
        console.log("Complete Response:", res);
        console.log("Response Status:", res.status);

        if (res.status >= 200 && res.status < 300) {
          console.log(changedPoints, "CHAM 환전 성공!");
          message.success("환전 성공!");
        }
        return res.data;
      })
      .then((res) => {
        console.log("Parsed Response:", res);
      })
      .catch((error) => {
        console.log("Axios Error:", error);
      });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY.DEFAULT,
        },
      }}
    >
      <Root>
        <Header></Header>
        <Container>
          <div style={{ width: "100%" }}>
            <MenuTypo>포인트 교환</MenuTypo>
            <ContentTypo>입력한 만큼의 Cham이 차감됩니다.</ContentTypo>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "300px",
              gap: "10px",
            }}
          >
            <ExchangeCham
              onChange={handlePointsChange}
            />
            <ExchangeButton onClick={() => exchangePoints(changedPoints)}>교환</ExchangeButton>

          </div>
        </Container>
      </Root>
    </ConfigProvider>
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
  justify-content: center;
  padding-bottom: 30px;
  background-color: white;
  display: flex;
  margin: 30px 0px;
  border-radius: 20px;
  padding: 30px;
`;

const MenuTypo = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  font-family: "esamanru";
`;

const ContentTypo = styled(Typography)`
  font-size: 15px;
  padding-bottom: 10px;
  font-family: "esamanru";
  color: ${GRAY.DARK};
`;

const ExchangeCham = styled(InputNumber)``;

const ExchangeButton = styled(Button)``;

export default PointExchangePage;
