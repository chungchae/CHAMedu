import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../../assets/system/layout";
import { GRAY } from "../../../colors";
import Profile from "../../../assets/images/mypage_profile.png";
import Request from "../../../assets/images/mypage_request.png";
import List from "../../../assets/images/mypage_list.png";
import ReviewContent from '../../../components/Mentor/Consultation/ReviewContent';
import HistoryContent from '../../../components/Mentor/Consultation/HistoryContent';
import MenteeMyProfile from '../../../components/Mentor/Consultation/MenteeMyProfile';
import axios from "axios";

const MyPageMentee = () => {
  const [selectMenu, setSelectMenu] = useState('내 프로필');

  useEffect(() => {
    getMenteeMypageData();
  }, []);

  //멘티 프로필 데이터 GET API
  const getMenteeMypageData = () => {
    axios.get('/mentee-mypage')
      .then((res) => {
        console.log('Response from /mentee-mypage:', res);
      })
      .catch((error) => {
        console.error('Axios Error:', error);
      });
  };

  return (
    <Root>
      <Header />
      <Container>
        <TabContainer>
          <Sidebar onClick={() => {setSelectMenu('내 프로필')}} isSelected={selectMenu === '내 프로필'}>
            <SidebarContent>
              <ProfileImage src={Profile} alt="My Profile" />   내 프로필
            </SidebarContent>
          </Sidebar>
          <Sidebar onClick={() => {setSelectMenu('작성한 후기')}} isSelected={selectMenu === '작성한 후기'}>
            <SidebarContent>
              <ProfileImage src={Request} alt="Consult Request" />
                 작성한 후기
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
          {selectMenu === '내 프로필' && <MenteeMyProfile />}
          {selectMenu === '작성한 후기' && <ReviewContent />}
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
  height: 869px;
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
  cursor: pointer;
  &:hover {
    background: #f2f2f2;
    border-radius: 20px;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  align-items: center;
  font-family: "esamanru";
  padding: 10px;
  margin-left: 10px;

`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  padding-left: 10px;

`;

export default MyPageMentee;
