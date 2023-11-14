import React from 'react';
import Header from "../../../components/Header/HeaderMentee";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../../assets/system/layout";
import { GRAY } from "../../../colors";
import Profile from "../../../assets/images/mypage_profile.png";
import Request from "../../../assets/images/mypage_request.png";
import List from "../../../assets/images/mypage_list.png";
import Person from "../../../assets/images/mypage_person.png";

const MyPageRequestMentor = () => {
  const imageList = [
    {
      imageName: Person,
      date: '2023-11-14',
      time: '14:30',
      title: 'Sample Image 1',
      onAccept: () => console.log('Accepted 1'),
      onReject: () => console.log('Rejected 1'),
    },
    {
      imageName: Person,
      date: '2023-12-14',
      time: '16:30',
      title: 'Sample Image 2',
      onAccept: () => console.log('Accepted 1'),
      onReject: () => console.log('Rejected 1'),
    },
    
  ];

  return (
    <Root>
      <Header />
      <Container>
        <TabContainer>
          <Sidebar>
            <SidebarContent>
              <ProfileImage src={Profile} alt="My Profile" />내 프로필
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
        </TabContainer>
        <Contentcontainer>
          <RoundedBox>
            <HeaderText>상담 수락 대기 목록</HeaderText>
            {imageList.map((image, index) => (
              <ImageCard
                key={index}
                imageName={image.imageName}
                date={image.date}
                time={image.time}
                title={image.title}
                onAccept={image.onAccept}
                onReject={image.onReject}
              />
            ))}
          </RoundedBox>
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
  width: 12%;
  height: 700px;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
`;

const Contentcontainer = styled.div`
  width: 100%;
`;

const Sidebar = styled.div`
  background: white;
  padding: 3px;
  box-sizing: border-box;
  font-family: "esamanru";
  &:hover {
    background: #f2f2f2;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "esamanru";
  padding-top: 10px;
  height: 30px;
`;

const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const RoundedBox = styled.div`
  background-color: white;
  height: 200px;
  width: 1150px;
  margin-top: 10px;
  margin-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
`;

const HeaderText = styled.div`
  font-size: 14px;
  padding-top: 10px;
  padding-left: 20px;
  font-family: "esamanru";
`;

const ImageCard = ({ imageName, date, time, title, onAccept, onReject }) => {
  return (
    <div style={styles.container}>
      <img src={Person} alt="Image" style={styles.image} />
      <div style={styles.details}>
        <div style={styles.header}>
          <p>{date}</p>
          <p>{time}</p>
          <h3>{title}</h3>
        </div>
        <div style={styles.buttons}>
          <button onClick={onAccept}>수락</button>
          <button onClick={onReject}>거절</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',

    border: '1px solid #ccc',
    borderRadius: '20px',
    margin: '5px',
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  details: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    marginBottom: '10px',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  
  },
};
export default MyPageRequestMentor;
