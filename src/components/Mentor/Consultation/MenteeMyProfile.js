import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Button, Typography, Tag } from "antd";
import { CONTAINER_WIDTH } from "../../../assets/system/layout";
import { GRAY, PRIMARY } from "../../../colors";
import Person from "../../../assets/images/mypage_person.png";
import axios from "axios";
import MenteeModifyModal from "../../../components/Mentor/MenteeModifyModal";

const MenteeMyProfile = () => {
  const [menteeData, setMenteeData] = useState({}); //데이터 저장할 곳 만듦
  const [modalModifyOpen, setModalModifyOpen] = useState(false);
  const userId = sessionStorage.getItem("userId");

  const getAdmissionColor = (value) => {
    if (value === 3) {
      return '#99DDEC';
    }
    if (value === 0) {
      return '#E9E587';
    }
    if (value === 2) {
      return '#F8A7A2';
    }
    if (value === 1) {
      return '#D5BEED';
    }
    else {
      return '#C4C4C4'
    }
  };
  const translateAdmission = (value) => {
      if (value === 0) {
        return "학종";
      }
      if (value === 1) {
        return "정시";
      }
      if (value === 2) {
        return "교과";
      }
      if (value === 3) {
        return "논술";
      }
      else {
        return "기타";
      }
    };

  useEffect(() => {
    //api 부름
    const getMentee = () => {
      axios
        .get(`http://localhost:8080/api/mentee-mypage/${userId}`)
        .then((res) => {
          console.log(res);
          setMenteeData(res.data); // 아까 거기에 저장
        })
        .catch((error) => {
          console.error("Axios Error", error);
        });
    };
    getMentee();
  }, []);

  const openModifyModal = () => {
    setModalModifyOpen(true);
  };
  const closeModifyModal = () => {
    setModalModifyOpen(false);
  };

  const collegeChange = (wish) => {
    if(wish === 0){
      return "공과대";
    } else if (wish === 1){
      return "자연대";
    } else if (wish === 2){
      return "문과대";
    }else if (wish === 3){
      return "예대";
    }else {
      return "체대";
    }
      
  }
  return (
    <>
      <Container>
        <Profilecontainer>
          <Infocontainer>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <MentorNameTypo>
                {menteeData?.nickname}
                <ModifyButton onClick={openModifyModal}>
                  프로필 수정하기
                </ModifyButton>
              </MentorNameTypo>
            <DepartmentTag
                color={getAdmissionColor(menteeData?.admissionType)}
              >
                {translateAdmission(menteeData?.admissionType)}
              </DepartmentTag>
            </div>

            <MentorEducationTypo>
              희망 대학교 : {menteeData?.university} <Gap /> 희망 단과대 : {collegeChange(menteeData?.wishCollege)}</MentorEducationTypo>
            <MentorIntroTypo>{menteeData?.promotionText}</MentorIntroTypo>
            <ButtonContainer>
              <MenteeModifyModal
                mentorData={menteeData}
                isOpen={modalModifyOpen}
                closeModal={closeModifyModal}
              />
            </ButtonContainer>
          </Infocontainer>
        </Profilecontainer>
        <RoundedBox>
          <HeaderText>상담 신청 내역</HeaderText>
          {Array.isArray(menteeData.reqeustRoomList) &&
            menteeData.reqeustRoomList.map((room, index) => (
              <RequestWrapper key={index}>
                <RequestUserWrapper>
                  <RequestImageWrapper>
                    <RequestImage src={Person} alt="Image" />
                    <div>{room.mentorName}</div>
                  </RequestImageWrapper>
                  <div>{room.startTime.split("T")[0]}</div>
                  <div>
                    {room.startTime.split("T")[1].substring(0, 5)} ~{" "}
                    {room.endTime.split("T")[1].substring(0, 5)}
                  </div>
                  {typeof room.title ? (
                    <div>{room.title}</div>
                  ) : (
                    <div>None title</div>
                  )}
                </RequestUserWrapper>

                <RequestButtonWrapper>
                  {/* w 대기상태 a 예정상태 c 완료  d 요청됨 */}
                  {room.status === "W" && (
                    <RequestButton1>대기상태</RequestButton1>
                  )}
                  {room.status === "A" && (
                    <RequestButton1>예정상태</RequestButton1>
                  )}
                  {room.status === "C" && <RequestButton1>완료</RequestButton1>}
                  {room.status === "D" && (
                    <RequestButton1>요청됨</RequestButton1>
                  )}
                </RequestButtonWrapper>
              </RequestWrapper>
            ))}
        </RoundedBox>
      </Container>
    </>
  );
};

const Gap = styled.div`
  width: 30px;
`;

const ModifyButton = styled(Button)`
  position: absolute;
  margin-left: 200px;
  margin-top: 0px;
  color: ${PRIMARY.DEFAULT};
  &:hover {
    color: ${PRIMARY.DEFAULT}!important;
    border-color: ${PRIMARY.DEFAULT}!important;
  }
  &:focus {
    color: ${PRIMARY.DEFAULT}!important;
    border-color: ${PRIMARY.DEFAULT}!important;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const Time = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  font-family: "esamanru";
`;

const TimeSpan = styled.span`
  margin-left: 20px;
  color: gray;
  text-decoration: underline;
  cursor: pointer;
`;

const Container = styled.div`
  flex-direction: column;
  width: ${CONTAINER_WIDTH}px;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`;

const Profilecontainer = styled.div`
  background-color: white;
  display: flex;
  margin: 30px 0px;
  border-radius: 20px;
  padding: 30px;
`;

const Infocontainer = styled.div`
  padding: 10px;
  flex-direction: column;
`;

const MentorNameTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  font-weight: 700;
  padding-bottom: 7px;
  padding-right: 10px;
`;

const MentorEducationTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  color: ${GRAY.DARK};
  padding-bottom: 7px;
  display: inline-flex;
`;

const MentorIntroTypo = styled(Typography)`
  font-size: 16px;
  font-family: "esamanru";
  font-weight: 100;
`;

const IconImg = styled.img`
  margin-right: 5px;
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

const RoundedBox = styled.div`
  background-color: white;
  height: auto;
  width: calc(100% - 150px);
  margin-top: 10px;
  margin-left: 1px;
  padding-right: 148px;
  border-radius: 20px;
`;
const HeaderText = styled.div`
  font-size: 14px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 35px;
  font-family: "esamanru";
`;

const RequestButton1 = styled.div`
  font-family: "esamanru";
  background-color: #e9e9e9;
  padding: 12px; /* Adjust padding as needed */
  width: 75px; /* Set the desired width */
  border-radius: 15px;
  font-size: 15px; /* Adjust font size as needed */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RequestImageWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const RequestUserWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 30px;
`;

const RequestButtonWrapper = styled.div`
  display: inline-flex;
  gap: 10px;
`;

const RequestImage = styled.img``;

const RequestWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: 103%;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 5px;
  padding: 20px;
  margin-left: 30px;
  justify-content: space-between;
  font-weight: 900;
`;
const DepartmentTag = styled(Tag)`
  display: flex;
  align-items: center;
  height: 27px;
  border: none;
  font-size: 14px;
  color: white;
  font-family: "esamanru";
`;

export default MenteeMyProfile;