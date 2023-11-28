import { Button, Typography } from "antd";
import styled from "styled-components";
import React from "react";
import HeaderIcon from "../../assets/images/HeaderIcon.png";
import ProfileImg from "../../assets/images/profile.png";
import ChamIcon from "../../assets/images/cham.png";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY, PRIMARY } from "../../colors";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons'

const HeaderMentee = () => {
  const navigate = useNavigate();

  const onClickLogoButton = () => {
    navigate("/");
  };

  const onClickMentorButton = () => {
    navigate('/user/mentor')
  }

  const onClickChargeButton = () => {
    navigate('/mentee/charge')
  }

 
  return (
    <Container>
      <ItemContainer>
        <LogoContainer onClick={onClickLogoButton}>
          <LogoImg src={HeaderIcon} alt={"로고 이미지"} />
          <LogoTypo>CHAMedu</LogoTypo>
        </LogoContainer>
        <HeaderContainer>
          <MenuContainer>
            <Menu type={"text"} onClick={onClickMentorButton}>멘토 둘러보기</Menu>
            <Menu type={"text"}>마이페이지</Menu>
            <LogoutButton type={"text"}>로그아웃</LogoutButton>
          </MenuContainer>
          <ChamContainer>
            <ChamImg src={ChamIcon}></ChamImg>
            <ChamTypo>370 CHAM</ChamTypo>
            <PlusIcon onClick={onClickChargeButton}/>
          </ChamContainer>
          <ProImg src={ProfileImg} alt={"프로필 이미지"}></ProImg>
        </HeaderContainer>
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
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
  cursor: pointer;
`;

const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const ChamContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const LogoImg = styled.img`
  width: 30px;
  height: 20px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ChamImg = styled.img`
  width: 20px;
  height: 25px;
  padding: 10px;
  margin-top: 5px;
`;

const ProImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid ${GRAY.DEFAULT};
`;

const LogoTypo = styled(Typography)`
  font-size: 30;
  font-weight: 700;

  font-family: "esamanru";
`;

const ChamTypo = styled(Typography)`
  color: ${PRIMARY.DARK};
  margin-top: 2px;
  font-family: "esamanru";
`;

const Menu = styled(Button)`
  font-weight: 500;
  span {
    font-family: "esamanru";
  }
`;

const LogoutButton = styled(Button)`
  font-weight: 500;
  color: ${GRAY.DARK};
  span {
    font-family: "esamanru";
  }
`;

export const PlusIcon = styled(PlusOutlined)`
  margin: 5px;
  color: ${PRIMARY.DARK};
  font-size: 20px;
  cursor: pointer;
`

export default HeaderMentee;
