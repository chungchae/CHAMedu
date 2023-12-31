import styled from "styled-components";
import React from "react";
import Person from "../../../assets/images/mypage_person.png";
import { GRAY, PRIMARY } from "../../../colors";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button, ConfigProvider } from "antd";
import ReportModal from "../../Chat/ReportModal";

const HistoryContentMentor = () => {
  const [consultationList, setConsultationList] = useState();
  const [modalReportOpen, setModalReportOpen] = useState(false);

  //신고 모달창 관리
  const openReportModal = () => {
    setModalReportOpen(true);
  };
  const closeReportModal = () => {
    setModalReportOpen(false);
  };

  //신고 POST API
  useEffect(() => {
    const getConsultation = () => {
      axios
        .get(`/api/mentor-mypage/chat-log`)
        .then((res) => {
          console.log(res);
          if (Array.isArray(res.data)) {
            setConsultationList(res.data);
            console.log("상담내역:", consultationList);
          } else {
            setConsultationList([]);
          }
        })
        .catch((error) => {
          console.error("Axios Error", error);
        });
    };
    getConsultation();
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY.DEFAULT,
        },
      }}
    >
      <RoundedBox>
        <div style={{ width: "100%" }}>
          <HeaderText>상담 내역</HeaderText>
          <SubText>채팅은 30일 이후 만료됩니다.</SubText>
        </div>
        {consultationList?.map((consultation, index) => (
          <RequestWrapper key={index}>
            <RequestUserWrapper>
              <RequestImageWrapper>
                <RequestImage src={Person} alt='Image' />
                <div>{consultation.userName}</div>
              </RequestImageWrapper>
              <div>{consultation.startTime.split("T")[0]}</div>
              <div>
                {consultation.startTime.split("T")[1].substring(0, 5)} ~{" "}
                {consultation.endTime.split("T")[1].substring(0, 5)}
              </div>
              <div>{consultation.title}</div>
            </RequestUserWrapper>
            <div>
              <ReportButton onClick={openReportModal}>신고하기</ReportButton>
              <ReportModal
                roomId={consultation.roomId}
                isOpen={modalReportOpen}
                closeModal={closeReportModal}
              />
              <RequestButtonWrapper>
                {consultation.checkStatus !== "채팅조회" ? (
                  <CompleteTrue>만료됨</CompleteTrue>
                ) : (
                  <CompleteFalse>채팅조회</CompleteFalse>
                )}
              </RequestButtonWrapper>
            </div>
          </RequestWrapper>
        ))}
      </RoundedBox>
    </ConfigProvider>
  );
};
const ReportButton = styled(Button)`
  margin-right: 10px;
  font-family: "esamanru";
`;

const CompleteTrue = styled.div`
  font-family: "esamanru";
  font-weight: 500;
  color: gray;
  text-decoration: underline;
`;

const SubText = styled.div`
  font-size: 15px;
  padding-bottom: 30px;
  padding-left: 20px;
  font-family: "esamanru";
  color: ${GRAY.DARK};
`;

const CompleteFalse = styled.div`
  font-family: "esamanru";
`;

const RoundedBox = styled.div`
  background-color: white;
  height: auto;
  width: calc(100% - 150px);
  margin-top: 10px;
  margin-left: 50px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.div`
  width: 100%;
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  font-family: "esamanru";
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

const RequestButtonWrapper = styled(Button)``;

const RequestImage = styled.img``;

const RequestWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: calc(100% - 120px);
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 5px;
  padding: 20px;
  justify-content: space-between;
  font-weight: 900;
`;

export default HistoryContentMentor;
