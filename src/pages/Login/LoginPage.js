import Header from "../../components/Header/HeaderMentee";
import styled from "styled-components";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY } from "../../colors";
import { Typography } from "antd";
import MainImg from "../../assets/images/main.png"

const LoginPage = () => {
  return (
    <Root>
      <Header />
      <Container>
       
      </Container>

     
     
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
`;
