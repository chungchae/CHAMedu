import { useEffect, useState } from "react";
import { CONTAINER_WIDTH, HEADER_HEIGHT } from "../../assets/system/layout";
import { GRAY, PRIMARY } from "../../colors";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import ProfileImg from "../../assets/images/profile.png";
import StarIcon from "../../assets/images/Star.png";
import NoteIcon from "../../assets/images/note_icon.png";
import { Button, Typography, Tag, ConfigProvider } from "antd";
import ReviewSlider from "../../components/Mentor/ReviewSlider";
import MentorReserveModal from "../../components/Mentor/MentorReserveModal";
import MentorReviewModal from "../../components/Mentor/MentorReviewModal";
import Bunting from "../../assets/images/buntingIcon.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const MentorDetailPageMentee = () => {
  const mentorParams = useParams();
  const [modalReserveOpen, setModalReserveOpen] = useState(false);
  const [mentorData, setMentorData] = useState();
  const openReserveModal = () => {
    setModalReserveOpen(true);
  };
  const closeReserveModal = () => {
    setModalReserveOpen(false);
  };

  const [modalReviewOpen, setModalReviewOpen] = useState(false);
  const openReviewModal = () => {
    setModalReviewOpen(true);
  };
  const closeReviewModal = () => {
    setModalReviewOpen(false);
  };
  const role = sessionStorage.getItem("role");

  const admissionTypeChange = (admission) => {
    if (admission === 0) {
      return "학종";
    } else if (admission === 1) {
      return "정시";
    } else if (admission === 2) {
      return "교과";
    } else if (admission === 3) {
      return "논술";
    }
    return "All";
  };

  useEffect(() => {
    console.log("멘토 파라미터:", mentorParams.mentorKey);

    const getMentor = () => {
      axios
        .get(`/api/mentor-profile/${mentorParams.mentorKey}`)
        .then((res) => {
          console.log(res.data);
          setMentorData(res.data);
        })
        .catch((error) => {
          console.error("Axios Error", error);
        });
    };

    getMentor();
  }, []);

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
          <Profilecontainer>
            <Mentorcontainer>
              <BuntingImg src={Bunting} alt='Bunting Icon' />
              <MentorProfileImg src={ProfileImg} />
              <RateContainer>
                <RateStarImg src={StarIcon}></RateStarImg>
                <RateTypo>{mentorData?.avgScore}</RateTypo>
                <ReviewTypo>진행한 상담 {mentorData?.chatCount}건</ReviewTypo>
              </RateContainer>
            </Mentorcontainer>
            <Infocontainer>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                <MentorNameTypo>{mentorData?.nickname}</MentorNameTypo>
                <AdmissionTag color={"#99DDEC"}>
                  {admissionTypeChange(mentorData?.addmissionType)}
                </AdmissionTag>
              </div>

              <MentorEducationTypo>
                {mentorData?.university}
              </MentorEducationTypo>
              <MentorIntroTypo>{mentorData?.promotonText}</MentorIntroTypo>
              <ButtonContainer>
                {role === "mentee" && (
                  <>
                    <ReserveButton onClick={openReserveModal}>
                      상담 예약하기 →
                    </ReserveButton>
                  </>
                )}

                <MentorReserveModal
                  isOpen={modalReserveOpen}
                  closeModal={closeReserveModal}
                />
              </ButtonContainer>
            </Infocontainer>
          </Profilecontainer>
          <Reviewcontainer>
            <TextContainer>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <IconImg src={NoteIcon} />
                <ReviewTypo2>후기 {mentorData?.reviewCount}개</ReviewTypo2>
              </div>
              {role === "mentee" && (
                <>
                  <WriteReviewButtonContainer onClick={openReviewModal}>
                    <WriteReviewTypo>후기 작성하기</WriteReviewTypo>
                  </WriteReviewButtonContainer>
                </>
              )}

              <MentorReviewModal
                isOpen={modalReviewOpen}
                closeModal={closeReviewModal}
              />
            </TextContainer>
            {mentorData?.reviewList && (
              <ReviewSlider reviewList={mentorData?.reviewList} />
            )}
          </Reviewcontainer>
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
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const BuntingImg = styled.img`
  width: 50px;
  height: 60px;
  position: absolute;
  left: 100px;
`;

const Profilecontainer = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  margin: 30px 0px;
  border-radius: 20px;
  padding: 40px;
`;

const Reviewcontainer = styled.div`
  padding: 20px 0px;
`;

const Mentorcontainer = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
`;

const Infocontainer = styled.div`
  padding-left: 50px;
  flex-direction: column;
`;

const AdmissionTag = styled(Tag)`
  display: flex;
  align-items: center;
  height: 27px;
  border: none;
  font-size: 14px;
  color: white;
  font-family: "esamanru";
`;

const MentorProfileImg = styled.img`
  width: 500px;
  height: 250px;
  object-fit: cover;
  border-radius: 200px;
  padding: 0px 30px;
  padding-bottom: 20px;
`;

const RateContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RateStarImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const RateTypo = styled(Typography)`
  font-family: "esamanru";
  font-size: 18px;
  font-weight: 700;
  padding-right: 8px;
`;

const ReviewTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  color: ${GRAY.DARK};
`;

const ReviewTypo2 = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
`;

const WriteReviewButtonContainer = styled.div`
  cursor: pointer;
`;

const WriteReviewTypo = styled(Typography)`
  font-size: 18px;
  font-family: "esamanru";
  text-decoration: underline;
  color: ${GRAY.DARK};
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
`;

const MentorIntroTypo = styled(Typography)`
  font-size: 16px;
  font-family: "esamanru";
  font-weight: 100;
`;

const ButtonContainer = styled.div``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: "row";
  width: 100%;
  justify-content: space-between;
`;

const IconImg = styled.img`
  margin-right: 5px;
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

const ReserveButton = styled(Button)`
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-family: "esamanru";
`;

export default MentorDetailPageMentee;
