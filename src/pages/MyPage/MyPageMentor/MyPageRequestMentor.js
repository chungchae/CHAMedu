import Header from "../../../components/Header/HeaderMentee";
import styled from 'styled-components';
import { CONTAINER_WIDTH, HEADER_HEIGHT } from '../../../assets/system/layout';
import { useNavigate } from 'react-router-dom';
import { GRAY } from "../../../colors";
import Profile from '../../../assets/images/mypage_profile.png'; 
import Request from '../../../assets/images/mypage_request.png';
import List from '../../../assets/images/mypage_list.png';

const MyPageRequestMentor = () => {
  return (
    <Root>
      <Header />
      <Sidebar>
        <SidebarContent>
          <ProfileImage src={Profile} alt="My Profile" />
          내 프로필
        </SidebarContent>
      </Sidebar>
      <Sidebar>
        <SidebarContent>
          <ProfileImage src={Request} alt="Consult Request" />
          상담요청
        </SidebarContent>
      </Sidebar>
      <Sidebar>
        <SidebarContent>
          <ProfileImage src={List} alt="Consult List" />
          상담내역
        </SidebarContent>
      </Sidebar>

      <Container></Container>
      <RoundedBox /> {/* Add the new RoundedBox component here */}
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: ${HEADER_HEIGHT - 5}px;
  position: relative;
  background-color: ${GRAY.LIGHT};
  
`;

const Container = styled.div`
  width: 20%;
  height: 700px;
  background-color: white;
`;

const Sidebar = styled.div`
  width: 20%;
  height: 100%;
  background: white; 
  padding: 10px;
  box-sizing: border-box;

  
`;


const SidebarContent = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    background: lightgray; 
    border-radius: 15px;
  }
`;

const ProfileImage = styled.img`
  width: 20px; 
  height: 20px; 
  margin-right: 10px; 
`;
const RoundedBox = styled.div`
  position: absolute;
  top: 71px;
  right: 18px;
  width: 78%;
  height: 33%;
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export default MyPageRequestMentor;
