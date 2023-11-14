import React, {useState} from 'react';
import Header from "../../../components/Header/HeaderMentee";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../../assets/system/layout";
import { GRAY } from "../../../colors";
import Profile from "../../../assets/images/mypage_profile.png";
import Request from "../../../assets/images/mypage_request.png";
import List from "../../../assets/images/mypage_list.png";
import RequestContent from '../../../components/Mentor/Consultation/RequestContent';
import HistoryContent from '../../../components/Mentor/Consultation/HistoryContent';
import MyProfile from '../../../components/Mentor/Consultation/MyProfile';

const MyPageMentor = () => {
  const [selectMenu, setSelectMenu] = useState('내 프로필');
  
  return (
    <Root>
      <Header />
      <Container>
        <TabContainer>
          <Sidebar onClick={() => {setSelectMenu('내 프로필')}} isSelected={selectMenu === '내 프로필'}>
            <SidebarContent>
              <ProfileImage src={Profile} alt="My Profile" />내 프로필
            </SidebarContent>
          </Sidebar>
          <Sidebar onClick={() => {setSelectMenu('상담요청')}} isSelected={selectMenu === '상담요청'}>
            <SidebarContent>
              <ProfileImage src={Request} alt="Consult Request" />
              상담요청
            </SidebarContent>
          </Sidebar>
          <Sidebar onClick={() => {setSelectMenu('상담내역')}} isSelected={selectMenu === '상담내역'}>
            <SidebarContent>
              <ProfileImage src={List} alt="Consult List" />
              상담내역
            </SidebarContent>
          </Sidebar>
        </TabContainer>
        <Contentcontainer>
          {/* 컴포넌트 분리 */}
          {selectMenu === '내 프로필' && <MyProfile />}
          {selectMenu === '상담요청' && <RequestContent />}
          {selectMenu === '상담내역' && <HistoryContent />}   
        </Contentcontainer>
      </Container>
    </Root>
  );
};


const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: ${HEADER_HEIGHT}px;
  background-color: ${GRAY.LIGHT};
`;

const TabContainer = styled.div`
  position: relative;
  width: 230px;
  height: 700px;
  background-color: white;
    padding: 0px 10px 0px 0px;
  
`;

const Container = styled.div`
  display: flex;
`;

const Contentcontainer = styled.div`
  width: 100%;
`;

const Sidebar = styled.div`
  background: ${(props) => (props.isSelected) ? '#f2f2f2' : 'white'};
  border-radius: 20px;
  padding: 3px;
  box-sizing: border-box;
  font-family: "esamanru";
  margin-bottom: 10px;
  &:hover {
    background: #f2f2f2;
    border-radius: 20px;
  }

`;

const SidebarContent = styled.div`
     display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: "esamanru";
    padding-top: 10px;
        align-items: flex-end;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;


export default MyPageMentor;
