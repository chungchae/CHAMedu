import React from "react";
import Header from "../../components/Header/HeaderGuest";
import styled from "styled-components";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY } from "../../colors";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const navigate = useNavigate();



  const onBox1Click = () => {
    // Box1 클릭 시 수행할 작업 추가
    navigate('/mentee/join');
  }

  const onBox2Click = () => {
    // Box2 클릭 시 수행할 작업 추가
    navigate('/mentor/join');
    
  }

  return (
    <Root>
      <Header />
      <Container>
        CHAMedu
      </Container>

      <Box1 onClick={onBox1Click}>
        내용1
      </Box1>

      <Box2 onClick={onBox2Click}>
        내용2
      </Box2>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  position: relative;
  background-color: ${GRAY.LIGHT};
`;

const Container = styled.div`
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  justify-content: center;
  background: white;
  font-size: 20px;
  margin-top: 10px;
  color: #4CAF4F;
  font-weight: bold;
`;

const Box1 = styled.div`
  background-color: #E91E63;
  color: #fff;
  padding: 20px;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer; // 커서 모양 변경 (선택 사항)
`;

const Box2 = styled.div`
  background-color: #2196F3;
  color: #fff;
  padding: 20px;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer; // 커서 모양 변경 (선택 사항)
`;

export default JoinPage;
